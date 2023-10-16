// Validator class
class FormValidator {
    constructor(state, props) {
        this.fields = state.fields;
        this.form = state.form;
        this.props = props;
    }

    showMessage(field, message) {
        const { formFieldClass, formErrorContainerClass, formErrorClass } = this.props;

        if (field.closest(formFieldClass)) {
            const formField = field.closest(formFieldClass);
            const errorContainer = formField.querySelector(formErrorContainerClass);
            formField.classList.add(formErrorClass);
            errorContainer.innerHTML = message;
        }
    }

    hideMessage(field) {
        const { formFieldClass, formErrorContainerClass, formErrorClass } = this.props;

        if (field.closest(formFieldClass)) {
            const formField = field.closest(formFieldClass);
            const errorContainer = formField.querySelector(formErrorContainerClass);
            if (errorContainer !== null) {
                errorContainer.innerHTML = '';
            }
            formField.classList.remove(formErrorClass);
        }
    }

    hideMessages(formData) {
        let field = '';
        for (let name in formData) {
            if (name === 'paymentDetails') {
                for (let payment in formData.paymentDetails) {
                    field = this.getPaymentsdByName(payment);
                    if (field) {
                        this.hideMessage(field);
                    }
                }
            } else if (name === 'howFoundOut') {
                this.form.querySelectorAll('[name="howFoundOut"]').forEach((field) => {
                    this.hideMessage(field);
                });
            } else if (name === 'howFoundOutComment') {
                this.form.querySelectorAll('[name="howFoundOutComment"]').forEach((field) => {
                    this.hideMessage(field);
                });
            } else {
                field = this.getFieldByName(name);

                if (field) {
                    this.hideMessage(field);
                }
            }
        }
    }

    getFieldByName(name) {
        return this.fields.find((field) => field.name === name);
    }

    getPaymentsdByName(name) {
        const paymentsFields = this.form.querySelector(
            `.events-payment .radio-wrapper.is-active input[name="${name}"], .events-payment .radio-wrapper.is-active select[name="${name}"]`
        );

        if (paymentsFields !== null) {
            return paymentsFields;
        }
    }

    isValidForm(formData) {
        let result = [];
        for (let name in formData) {
            const value = formData[name];
            result.push(this.isValidField(name, value));
        }
        return result.every((val) => !!val);
    }

    isValidField(name, value) {
        const rules = this.getRules(value);

        const field = this.getFieldByName(name);
        const datasetRules = field && field.dataset ? field.dataset.validate : null;

        if (datasetRules) {
            const validatedRules = datasetRules.split(',').reduce((acc, rule) => {
                console.log(rule);
                acc.push(rules[rule.trim()](value));
                console.log(acc);
                return acc;
            }, []);

            if (validatedRules.every((val) => !!val)) {
                this.hideMessage(field);
                return true;
            }

            let message;
            if (validatedRules.length > 1) {
                for (let index = 0; index < validatedRules.length; index++) {
                    const rule = validatedRules[index];
                    if (!rule) {
                        message = this.getMessageArr(name, index);
                        break;
                    }
                }
            } else {
                message = this.getMessage(name);
            }

            this.showMessage(field, message);
        } else {
            return true;
        }
    }
    getMessageArr(name, index) {
        return this.props.messages[name][index];
    }
    getMessage(name) {
        return this.props.messages[name];
    }
    getRules() {
        return {
            required: (value) => (!!value && !!value.length ? true : false),
            full_name: (value) => {
                const pattern = /^[A-Za-z0-9 '-/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\"|]{1,100}$/;
                if (value.match(pattern)) return true;
            },
            company_name: (value) => {
                const pattern = /^[A-Za-z0-9 '-_`~!#*$@%+=.,^&()[\]|;:”<>?"{}\/\\][^\/\\]{1,126}$/;
                if (value.match(pattern)) return true;
            },
            company_url: (value) => {
                const pattern = /^(?:http(s)?:\/\/)?[A-Za-z\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]{1,100}$/;
                if (value.match(pattern)) return true;
            },
            vertical_other: (value) => {
                const pattern = /^[A-Za-z0-9 '-/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\"|]{1,127}$/;
                if (value.match(pattern)) return true;
            },
            email: (value) => {
                const pattern = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+).([a-zA-Z])$/;
                if (value.match(pattern)) return true;
            },
            link: (value) => (value.indexOf(' ') == -1 ? true : false),
        };
    }
}
