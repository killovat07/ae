'use strict';

// Form class
class FormCore {
    constructor(form, options = {}) {
        this.form = form;
        if (!this.form) return;

        this.props = this.initProps(options);
        this.state = this.initState(this.form);
        this.validator = new FormValidator(this.state, this.props);
        this.isSubmited = false;
        this.updateCurrentStep();
        this.setEvents();
    }
    initProps(options) {
        const defaults = {
            formStepClass: '.form-step',
            formItemClass: '.form-item',
            formFieldClass: '.form-field-class',
            formRelatedFieldClass: '.related-field input',
            formErrorContainerClass: '.form-error',
            formErrorClass: 'is-invalid',
            btnNextClass: '.btn-form-next',
            btnSubmitClass: '.form-submit-btn',
            btnPrevClass: '.btn-form-prev',
            popupClass: '.popup-success',
            recaptchaFieldClass: '.recaptcha-response',
        };
        return { ...defaults, ...options };
    }
    initState(form) {
        if (this.form.classList.contains('signup-form')) {
            const paymentInputs = this.form.querySelectorAll('.form-step-payment .radio-wrapper');
            const paymentVisible = Array.from(
                Array.from(paymentInputs)
                    .find((el) => el.classList.contains('is-active'))
                    .querySelectorAll('input[name], select')
            );

            const howFoundOutInputs = this.form.querySelectorAll('.form-step-how-found-out .radio-wrapper');
            const howFoundOutActive = Array.from(howFoundOutInputs).find((el) => el.classList.contains('is-active'));
            let howFoundOutActiveInputs;
            howFoundOutActive
                ? (howFoundOutActiveInputs = Array.from(howFoundOutActive.querySelectorAll('input[name], select')))
                : (howFoundOutActiveInputs = []);

            const filteredStepPayments = Array.from(this.form.querySelectorAll(this.props.formStepClass)).filter(
                (el) => !el.classList.contains('form-step-payment')
            );
            const filteredAll = filteredStepPayments.filter((el) => !el.classList.contains('form-step-how-found-out'));

            const fields = [];
            howFoundOutActiveInputs.forEach((el) => fields.push(el));
            filteredAll.forEach((el) => {
                el.querySelectorAll('input[name], select').forEach((field) => {
                    if (field) {
                        fields.push(field);
                    }
                });
            });

            return {
                form,
                fields,
                paymentVisible,
            };
        } else {
            const fields = Array.from(this.form.querySelectorAll('input[name], select'));

            return {
                form,
                fields,
            };
        }
    }

    startTracking() {
        try {
            gtag('event', 'conversion', { send_to: 'AW-10925257538/9ijQCKyjpsgDEMLmyNko' });
        } catch (e) {
            console.error(e);
        }
    }
    setEvents() {
        const { form } = this.state;
        const { btnNextClass, btnPrevClass, btnSubmitClass } = this.props;

        const btnsFormNext = this.form.querySelectorAll(btnNextClass);
        const btnsFormPrev = this.form.querySelectorAll(btnPrevClass);
        const btnFormSubmit = this.form.querySelector(btnSubmitClass);

        btnsFormPrev.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.prevStep();
            });
        });

        btnsFormNext.forEach((btn) => {
            btn.addEventListener('click', () => {
                const { fields } = this.initState(this.form);
                const formData = this.getFormData(fields);

                if (!this.isSubmited)
                    this.submitForm(formData)
                        .then((res) => res.json())
                        .then((data) => {
                            this.isSubmited = false;
                            const isSkip = this.currentStep.classList.contains('skip');
                            if (data.message === 'FAIL' && !isSkip) this.onErrorStep(data);

                            if (data.message === 'OK' || isSkip) {
                                this.nextStep();
                            }
                        });
            });
        });

        btnFormSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            const { validation } = this.props;
            const { fields, paymentVisible } = this.initState(this.form);

            const formData = this.getFormData(fields, paymentVisible);
            const form = this.sanitizeForm(formData);

            const isFrontValid = validation && !this.validator.isValidForm(form) ? false : true;
            console.log(isFrontValid);
            if (!this.isSubmited && isFrontValid)
                this.submitForm(form)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        this.isSubmited = false;
                        if (data.msg === 'success' || data.msg === 'OK') {
                            this.onSuccessSubmit();
                        } else if (data.errors) {
                            this.onErrorSubmit(data.errors);
                        } else {
                            this.onBlackListMessageSubmit(data.msg);
                        }
                    });
        });
    }
    nextStep() {
        this.currentStep.classList.remove('is-visible');
        this.currentStep.nextElementSibling.classList.add('is-visible');

        this.updateCurrentStep();
    }
    prevStep() {
        const { fields } = this.state;
        const formData = this.getFormData(fields);
        this.currentStep.classList.remove('is-visible');
        this.currentStep.previousElementSibling.classList.add('is-visible');
        this.currentStep.previousElementSibling.querySelectorAll('.set-on-step-visit').forEach((field) => {
            field.value = 1;
        });
        this.updateCurrentStep();
    }
    updateCurrentStep() {
        const { formStepClass } = this.props;
        this.currentStep = this.form.querySelector(`${formStepClass}.is-visible`);
        document.querySelector('.wrapper').scrollTo(0, 0);
    }
    prepareFormData(field) {
        return field.reduce((acc, element) => {
            let value = element.value;

            if (element.tagName == 'SELECT') {
                value = this.getSelectData(value, element);
            }

            if (element.name == 'confirmation') {
                value = encodeURIComponent(value);
            }

            if (element.type == 'radio') {
                if (element.checked) {
                    acc[element.name] = value;
                }
            } else {
                acc[element.name] = value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            }

            return acc;
        }, {});
    }
    getFormData(elements, payments) {
        const fields = this.prepareFormData(elements);

        if (payments) {
            return Object.assign(fields, { terms: 1, policy: 1 }, { paymentDetails: this.prepareFormData(payments) });
        } else {
            return fields;
        }
    }
    sanitizeForm(form) {
        const data = {
            ...form,
        };

        return data;
    }
    getSelectData(value, select) {
        const selectedOptions = Array.from(select.selectedOptions);
        if (value == 'default') return '';

        if (selectedOptions.length) {
            //array type for multiselect
            if (!!select.multiple) {
                return selectedOptions.map((option) => option.value);
            }
            //add label for optgroup value
            const optGroup = selectedOptions[0].closest('optgroup');
            if (optGroup) value = `${optGroup.label}/${value}`;
        }
        return value;
    }
    submitForm(formData) {
        const { baseURL } = this.props;

        this.isSubmited = true;
        this.validator.hideMessages(formData);
        return fetch(baseURL, {
            method: this.form.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData, 'g-recaptcha-response': '1' }),
        });
        // return this.getToken().then((token) => {
        //     return fetch(baseURL, {
        //         method: this.form.method,
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ ...formData, 'g-recaptcha-response': token }),
        //     });
        // });
    }
    onSuccessSubmit() {
        if (this.form.classList.contains('contact-form')) {
            this.form.closest('.section-contacts').classList.add('form-success');
            this.form.querySelector('.textarea-describe').innerHTML = '';
            this.form.reset();
        } else {
            const name = document.querySelector('input[name=firstName]') || document.querySelector('input[name=name]');
            this.form.querySelector('.success-step .user-name').innerHTML = name.value;
            this.nextStep();
            this.form.classList.add('signup-success');
            this.startTracking();
            this.form.reset();
            if (document.querySelector('.signup .particles-js-canvas-el')) {
                document.querySelector('.particles-js-canvas-el').setAttribute('height', document.querySelector('.signup').clientHeight);
            }
        }
    }
    onErrorSubmit(errors) {
        for (let name in errors) {
            let field = '';
            if (this.currentStep.classList.contains('form-step-payment')) {
                field = this.validator.getPaymentsdByName(name);
            } else {
                field = this.validator.getFieldByName(name);
            }
            const message = errors[name].reduce((acc, item) => (acc += `<span>${item.message}</span>`), '');
            if (field) this.validator.showMessage(field, message);
        }
    }
    onBlackListMessageSubmit(message) {
        if (message) {
            this.form.querySelector('.step-body').innerHTML = message;
            this.form.querySelector('.user-name').innerHTML = document.querySelector('input[name=firstName]').value;
        }
        this.nextStep();
        this.form.classList.add('signup-error');
        this.form.reset();
        if (document.querySelector('.signup .particles-js-canvas-el')) {
            document.querySelector('.particles-js-canvas-el').setAttribute('height', document.querySelector('.signup').clientHeight);
        }
    }
    onErrorStep(data) {
        let stepFields;
        if (this.currentStep.classList.contains('form-step-payment')) {
            stepFields = Array.from(
                this.currentStep.querySelectorAll(
                    ".events-payment .radio-wrapper.is-active input[name], .events-payment .radio-wrapper.is-active select, [name='terms'], [name='policy']"
                )
            );
        } else if (this.currentStep.classList.contains('form-step-how-found-out')) {
            stepFields = Array.from(
                this.currentStep.querySelectorAll('.radio-wrapper.is-active input[name], .radio-wrapper.is-active select')
            );
        } else {
            stepFields = Array.from(this.currentStep.querySelectorAll('input[name], select'));
        }
        const errorsOnStep = stepFields.reduce((errors, field) => {
            const name = field.name;
            if (data.errors[name]) {
                const message = data.errors[name].reduce((acc, item) => (acc += `<span>${item.message}</span>`), '');
                this.validator.showMessage(field, message);
                errors.push(true);
            } else {
                errors.push(false);
            }
            return errors;
        }, []);
        //next step
        if (errorsOnStep.every((value) => !value)) this.nextStep();
    }
    // Recaptcha
    // getToken() {
    //     const { siteKey, recaptchaAction, recaptcha } = this.props;
    //     if (!recaptcha) {
    //         return Promise.resolve("");
    //     }
    //     return grecaptcha.execute(siteKey, { action: recaptchaAction });
    // }
}
