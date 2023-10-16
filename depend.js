const allCountriesObj = {
    UK: 'Great Britain',
    AFG: 'Afghanistan',
    ALA: 'Aland Islands',
    ALB: 'Albania',
    DZA: 'Algeria',
    ASM: 'American Samoa',
    AND: 'Andorra',
    AGO: 'Angola',
    AIA: 'Anguilla',
    ATA: 'Antarctica',
    ATG: 'Antigua and Barbuda',
    ARG: 'Argentina',
    ARM: 'Armenia',
    ABW: 'Aruba',
    AUS: 'Australia',
    AUT: 'Austria',
    AZE: 'Azerbaijan',
    BHS: 'Bahamas',
    BHR: 'Bahrain',
    BGD: 'Bangladesh',
    BRB: 'Barbados',
    BLR: 'Belarus',
    BEL: 'Belgium',
    BLZ: 'Belize',
    BEN: 'Benin',
    BMU: 'Bermuda',
    BTN: 'Bhutan',
    BOL: 'Bolivia',
    BES: 'Bonaire, Sint Eustatius and Saba',
    BIH: 'Bosnia and Herzegovina',
    BWA: 'Botswana',
    BVT: 'Bouvet Island',
    BRA: 'Brazil',
    IOT: 'British Indian Ocean Territory',
    BRN: 'Brunei Darussalam',
    BGR: 'Bulgaria',
    BFA: 'Burkina Faso',
    BDI: 'Burundi',
    KHM: 'Cambodia',
    CMR: 'Cameroon',
    CAN: 'Canada',
    CPV: 'Cape Verde',
    CYM: 'Cayman Islands',
    CAF: 'Central African Republic',
    TCD: 'Chad',
    CHL: 'Chile',
    CHN: 'China',
    CXR: 'Christmas Island',
    CCK: 'Cocos (Keeling) Islands',
    COL: 'Colombia',
    COM: 'Comoros',
    COG: 'Congo',
    COD: 'Congo, Democratic Republic of the Congo',
    COK: 'Cook Islands',
    CRI: 'Costa Rica',
    CIV: "Cote D'Ivoire",
    HRV: 'Croatia',
    CUB: 'Cuba',
    CUW: 'Curacao',
    CYP: 'Cyprus',
    CZE: 'Czech Republic',
    DNK: 'Denmark',
    DJI: 'Djibouti',
    DMA: 'Dominica',
    DOM: 'Dominican Republic',
    ECU: 'Ecuador',
    EGY: 'Egypt',
    SLV: 'El Salvador',
    GNQ: 'Equatorial Guinea',
    ERI: 'Eritrea',
    EST: 'Estonia',
    ETH: 'Ethiopia',
    FLK: 'Falkland Islands (Malvinas)',
    FRO: 'Faroe Islands',
    FJI: 'Fiji',
    FIN: 'Finland',
    FRA: 'France',
    GUF: 'French Guiana',
    PYF: 'French Polynesia',
    ATF: 'French Southern Territories',
    GAB: 'Gabon',
    GMB: 'Gambia',
    GEO: 'Georgia',
    DEU: 'Germany',
    GHA: 'Ghana',
    GIB: 'Gibraltar',
    GRC: 'Greece',
    GRL: 'Greenland',
    GRD: 'Grenada',
    GLP: 'Guadeloupe',
    GUM: 'Guam',
    GTM: 'Guatemala',
    GGY: 'Guernsey',
    GIN: 'Guinea',
    GNB: 'Guinea-Bissau',
    GUY: 'Guyana',
    HTI: 'Haiti',
    HMD: 'Heard Island and McDonald Islands',
    VAT: 'Holy See (Vatican City State)',
    HND: 'Honduras',
    HKG: 'Hong Kong',
    HUN: 'Hungary',
    ISL: 'Iceland',
    IND: 'India',
    IDN: 'Indonesia',
    IRN: 'Iran, Islamic Republic of',
    IRQ: 'Iraq',
    IRL: 'Ireland',
    IMN: 'Isle of Man',
    ISR: 'Israel',
    ITA: 'Italy',
    JAM: 'Jamaica',
    JPN: 'Japan',
    JEY: 'Jersey',
    JOR: 'Jordan',
    KAZ: 'Kazakhstan',
    KEN: 'Kenya',
    KIR: 'Kiribati',
    PRK: "Korea, Democratic People's Republic of",
    KOR: 'Korea, Republic of',
    XKX: 'Kosovo',
    KWT: 'Kuwait',
    KGZ: 'Kyrgyzstan',
    LAO: "Lao People's Democratic Republic",
    LVA: 'Latvia',
    LBN: 'Lebanon',
    LSO: 'Lesotho',
    LBR: 'Liberia',
    LBY: 'Libyan Arab Jamahiriya',
    LIE: 'Liechtenstein',
    LTU: 'Lithuania',
    LUX: 'Luxembourg',
    MAC: 'Macao',
    MKD: 'Macedonia, the Former Yugoslav Republic of',
    MDG: 'Madagascar',
    MWI: 'Malawi',
    MYS: 'Malaysia',
    MDV: 'Maldives',
    MLI: 'Mali',
    MLT: 'Malta',
    MHL: 'Marshall Islands',
    MTQ: 'Martinique',
    MRT: 'Mauritania',
    MUS: 'Mauritius',
    MYT: 'Mayotte',
    MEX: 'Mexico',
    FSM: 'Micronesia, Federated States of',
    MDA: 'Moldova, Republic of',
    MCO: 'Monaco',
    MNG: 'Mongolia',
    MNE: 'Montenegro',
    MSR: 'Montserrat',
    MAR: 'Morocco',
    MOZ: 'Mozambique',
    MMR: 'Myanmar',
    NAM: 'Namibia',
    NRU: 'Nauru',
    NPL: 'Nepal',
    NLD: 'Netherlands',
    ANT: 'Netherlands Antilles',
    NCL: 'New Caledonia',
    NZL: 'New Zealand',
    NIC: 'Nicaragua',
    NER: 'Niger',
    NGA: 'Nigeria',
    NIU: 'Niue',
    NFK: 'Norfolk Island',
    MNP: 'Northern Mariana Islands',
    NOR: 'Norway',
    OMN: 'Oman',
    PAK: 'Pakistan',
    PLW: 'Palau',
    PSE: 'Palestinian Territory, Occupied',
    PAN: 'Panama',
    PNG: 'Papua New Guinea',
    PRY: 'Paraguay',
    PER: 'Peru',
    PHL: 'Philippines',
    PCN: 'Pitcairn',
    POL: 'Poland',
    PRT: 'Portugal',
    PRI: 'Puerto Rico',
    QAT: 'Qatar',
    REU: 'Reunion',
    ROM: 'Romania',
    RUS: 'Russian Federation',
    RWA: 'Rwanda',
    BLM: 'Saint Barthelemy',
    SHN: 'Saint Helena',
    KNA: 'Saint Kitts and Nevis',
    LCA: 'Saint Lucia',
    MAF: 'Saint Martin',
    SPM: 'Saint Pierre and Miquelon',
    VCT: 'Saint Vincent and the Grenadines',
    WSM: 'Samoa',
    SMR: 'San Marino',
    STP: 'Sao Tome and Principe',
    SAU: 'Saudi Arabia',
    SEN: 'Senegal',
    SRB: 'Serbia',
    SCG: 'Serbia and Montenegro',
    SYC: 'Seychelles',
    SLE: 'Sierra Leone',
    SGP: 'Singapore',
    SXM: 'St Martin',
    SVK: 'Slovakia',
    SVN: 'Slovenia',
    SLB: 'Solomon Islands',
    SOM: 'Somalia',
    ZAF: 'South Africa',
    SGS: 'South Georgia and the South Sandwich Islands',
    SSD: 'South Sudan',
    ESP: 'Spain',
    LKA: 'Sri Lanka',
    SDN: 'Sudan',
    SUR: 'Suriname',
    SJM: 'Svalbard and Jan Mayen',
    SWZ: 'Swaziland',
    SWE: 'Sweden',
    CHE: 'Switzerland',
    SYR: 'Syrian Arab Republic',
    TWN: 'Taiwan, Province of China',
    TJK: 'Tajikistan',
    TZA: 'Tanzania, United Republic of',
    THA: 'Thailand',
    TLS: 'Timor-Leste',
    TGO: 'Togo',
    TKL: 'Tokelau',
    TON: 'Tonga',
    TTO: 'Trinidad and Tobago',
    TUN: 'Tunisia',
    TUR: 'Turkey',
    TKM: 'Turkmenistan',
    TCA: 'Turks and Caicos Islands',
    TUV: 'Tuvalu',
    UGA: 'Uganda',
    UKR: 'Ukraine',
    ARE: 'United Arab Emirates',
    GBR: 'United Kingdom',
    USA: 'United States',
    UMI: 'United States Minor Outlying Islands',
    URY: 'Uruguay',
    UZB: 'Uzbekistan',
    VUT: 'Vanuatu',
    VEN: 'Venezuela',
    VNM: 'Viet Nam',
    VGB: 'Virgin Islands, British',
    VIR: 'Virgin Islands, U.s.',
    WLF: 'Wallis and Futuna',
    ESH: 'Western Sahara',
    YEM: 'Yemen',
    ZMB: 'Zambia',
    ZWE: 'Zimbabwe',
};

const currentCountry = document.querySelector('.current-country-option').value;
document.querySelector('.current-country-option').innerHTML = allCountriesObj[currentCountry];

document.querySelector('.suggest-custom-country').addEventListener('change', ()=> {
    document.querySelectorAll('input[name="UserForm[location]"]').forEach(input=> input.value = '');
})

class Utils {
    isTouchDevice() {
        return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? true : false;
    }
    isObject(value) {
        return value && typeof value === 'object' && value.constructor === Object;
    }
    mergeDeep(target, ...sources) {
        if (!sources.length) return target;
        const source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (const key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) Object.assign(target, { [key]: {} });
                    this.mergeDeep(target[key], source[key]);
                } else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
        return this.mergeDeep(target, ...sources);
    }
    partial(func, ...argsBound) {
        return function (...args) {
            return func.call(this, ...argsBound, ...args);
        };
    }
    curry(fn) {
        const argsLength = fn.length;
        return function fn1(...args) {
            if (args.length >= argsLength) {
                return fn(...args);
            }
            return function fn2(...moreArgs) {
                const newArgs = args.concat(moreArgs);
                return fn1(...newArgs);
            };
        };
    }
    debounce(f, ms) {
        let isReady = false;
        let wrapper = function () {
            if (isReady) return;
            f.apply(this, arguments);
            isReady = true;
            setTimeout(function () {
                isReady = false;
            }, ms);
        };
        return wrapper;
    }
    throttle(func, ms) {
        let isThrottled = false,
            savedArgs,
            savedThis;
        function wrapper() {
            if (isThrottled) {
                savedArgs = arguments;
                savedThis = this;
                return;
            }
            func.apply(this, arguments);
            isThrottled = true;
            setTimeout(function () {
                isThrottled = false;
                if (savedArgs) {
                    wrapper.apply(savedThis, savedArgs);
                    savedArgs = savedThis = null;
                }
            }, ms);
        }
        return wrapper;
    }
    memorySizeOf(obj) {
        let bytes = 0;
        function sizeOf(obj) {
            if (obj !== null && obj !== undefined) {
                switch (typeof obj) {
                    case 'number':
                        bytes += 8;
                        break;
                    case 'string':
                        bytes += obj.length * 2;
                        break;
                    case 'boolean':
                        bytes += 4;
                        break;
                    case 'object':
                        const objClass = Object.prototype.toString.call(obj).slice(8, -1);
                        if (objClass === 'Object' || objClass === 'Array') {
                            for (let key in obj) {
                                if (!obj.hasOwnProperty(key)) continue;
                                sizeOf(obj[key]);
                            }
                        } else bytes += obj.toString().length * 2;
                        break;
                }
            }
            return bytes;
        }
        return sizeOf(obj);
    }
}
class MultiStep {
    constructor(validator, { formContainer, fields, props }) {
        this.validator = validator;
        this.formContainer = formContainer;
        this.fields = fields;
        this.props = props;
        this.init();
    }
    init() {
        const { stepContainer, formControls, pagination, activeClass } = this.props;
        this.stepsList = this.formContainer.querySelectorAll(stepContainer);
        this.maxStep = this.stepsList.length;
        this.currentStep = Array.from(this.stepsList).find((step) => step.classList.contains(activeClass));
        this.currentStepIndex = !this.currentStep
            ? 0
            : Array.from(this.stepsList).findIndex((step) => step.classList.contains(activeClass));
        this.setCurrentStepData(this.currentStepIndex);
        const nextBtnsNodes = document.querySelectorAll(formControls.nextElement);
        const nextCustomBtnsNodes = document.querySelectorAll(formControls.nextCustomElement);
        this.nextBtns = [...nextBtnsNodes, ...nextCustomBtnsNodes];
        this.prevBtns = this.formContainer.querySelectorAll(formControls.prevElement);
        if (pagination.exist) {
            this.initPagination();
        }
        this.setEvents();
    }
    setEvents() {
        const onNextClick = (e) => {
            if (e.currentTarget.disabled) return;
            e.preventDefault();
            e.target.focus();
            this.setDisabledBtn();
            this.next();
        };
        this.nextBtns.forEach((btn) => {
            btn && btn.addEventListener('mousedown', onNextClick);
        });
        const onPrevClick = (e) => {
            e.preventDefault();
            this.prev();
        };
        this.prevBtns.forEach((btn) => {
            btn && btn.addEventListener('click', onPrevClick);
        });
        this.fields.forEach((field) => {
            field.element.addEventListener('focus', (e) => this.resetDisabledBtn());
        });
    }
    setCurrentStepData(index) {
        this.stepsList[index].classList.add(this.props.activeClass);
        this.currentStep = this.stepsList[index];
        this.formContainer.dataset.currentStepIndex = index + 1;
        document.body.dataset.currentStepIndex = index + 1;
        document.body.dataset.currentStepName = this.currentStep.dataset.stepName;
    }
    isLastStep() {
        return this.currentStepIndex + 1 === this.maxStep;
    }
    getStepNodes(index) {
        const step = this.stepsList[index];
        if (!step) {
            return;
        }
        return Array.from(step.querySelectorAll(`[name^="${this.props.formNamespace}"]`)).map((node) => node.name);
    }
    getCurrentStepFields(index) {
        const currentStepNodes = this.getStepNodes(index);
        return this.fields.filter((field) => currentStepNodes.includes(field.fieldName));
    }
    getCurrentStepRequiredFields(index) {
        const currentStepRequiredNodes = this.getStepNodes(index);
        return this.fields.filter((field) => {
            return field.validateRule && field.validateRule.required && currentStepRequiredNodes.includes(field.fieldName);
        });
    }
    getPrevStepFields(index) {
        const prevStepNodes = this.getStepNodes(index - 1);
        if (!prevStepNodes) return null;
        return this.fields.filter((field) => prevStepNodes.includes(field.fieldName));
    }
    getNextStepFields(index) {
        const nextStepNodes = this.getStepNodes(index + 1);
        if (!nextStepNodes) return null;
        return this.fields.filter((field) => nextStepNodes.includes(field.fieldName));
    }
    setDisabledBtn() {
        this.nextBtns.forEach((btn) => {
            btn.disabled = true;
            btn.classList.add(this.props.disabledClass);
        });
    }
    resetDisabledBtn() {
        this.nextBtns.forEach((btn) => {
            btn.disabled = false;
            btn.classList.remove(this.props.disabledClass);
        });
    }
    showNextStep() {
        if (this.currentStepIndex < this.stepsList.length - 1) {
            this.currentStepIndex++;
            this.stepBy(this.currentStepIndex, 'step-next');
            this.dispatchMultistepEvent('step-next');
            this.dispatchMultistepEvent('step-change');
        }
    }
    next(input) {
        const currentStepFields = this.getCurrentStepRequiredFields(this.currentStepIndex);
        if (currentStepFields.length) {
            this.validator
                .validate(currentStepFields, this.resetDisabledBtn.bind(this))
                .then((errorList) => {
                    const currentStepErrorNames = currentStepFields.map((field) => field.errorName).filter((field) => errorList.has(field));
                    this.resetDisabledBtn();
                    if (!errorList.size || !currentStepErrorNames.length) {
                        this.showNextStep();
                        if (input) input.blur();
                    }
                })
                .catch((err) => {
                    return err;
                });
        } else {
            this.resetDisabledBtn();
            this.showNextStep();
        }
    }
    prev() {
        this.resetDisabledBtn();
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.stepBy(this.currentStepIndex);
            this.dispatchMultistepEvent('step-prev');
            this.dispatchMultistepEvent('step-change');
        }
    }
    stepBy(index) {
        this.currentStep.classList.remove(this.props.activeClass);
        this.setCurrentStepData(index);
    }
    dispatchMultistepEvent(name = 'step-change') {
        const event = new CustomEvent(name, {
            detail: {
                maxStep: this.maxStep,
                currentStep: this.currentStep,
                currentStepIndex: this.currentStepIndex,
                currentStepFields: this.getCurrentStepFields(this.currentStepIndex),
                prevStepFields: this.getPrevStepFields(this.currentStepIndex),
                nextStepFields: this.getNextStepFields(this.currentStepIndex),
            },
        });
        this.formContainer.dispatchEvent(event);
    }
    initPagination() {
        const { root, container, item } = this.props.pagination;
        let items = `<div class="${container}">`;
        for (let i = 1; i <= this.maxStep; i++) {
            items += `<div class="${item}" data-pagination-index="${i}"><span>${i}</span></div>`;
        }
        items += '</div>';
        root.insertAdjacentHTML('beforeend', items);
        this.paginationContainer = document.querySelector(`.${container}`);
        this.paginations = [...this.paginationContainer.children];
        this.updatePagination(0);
        this.formContainer.addEventListener('step-next', (e) => this.updatePagination(e.detail.currentStepIndex));
        this.formContainer.addEventListener('step-prev', (e) => this.updatePagination(e.detail.currentStepIndex));
    }
    updatePagination(i) {
        const { currentClass, visitedClass } = this.props.pagination;
        this.paginations.forEach((el) => {
            el.classList.remove(currentClass);
            el.classList.remove(visitedClass);
        });
        this.paginations
            .filter((el, index) => index <= i)
            .forEach((el) => {
                el.classList.add(visitedClass);
            });
        this.paginationContainer.children[i].classList.remove(visitedClass);
        this.paginationContainer.children[i].classList.add(currentClass);
    }
}
class SuggestLocation {
    constructor(fieldContainer, { props }) {
        if (!fieldContainer) {
            return;
        }
        this.container = fieldContainer;
        this.options = this.setOptions();
        this.inputField = this.container.querySelector(`[name="${props.formNamespace}[location]"]`);
        this.suggestField = this.container.querySelector(`.${this.options.suggestFieldClass}`);
        this.lastInputValue = this.inputField.value;
        this.isSuggestActive = false;
        this.isSendingData = false;
        this.currentItemIndex = -1;
        this.keycode = { enter: 13, esc: 27, arrowUp: 38, arrowDown: 40 };
        this.setEvents();
    }
    setOptions() {
        return {
            suggestSelect: '.suggest-custom-country',
            suggestFieldClass: 'suggest',
            suggestActiveClass: 'suggest--active',
            suggestActiveClassTop: 'suggest--opened-top',
            suggestItemClass: 'suggest__item',
            currentClass: 'current',
            minLength: 2,
            maxLength: 25,
            requestUrl: '/geo/suggestLocation',
            limit: 30,
            debaunceDelay: 300,
            boxHeight: 300,
        };
    }
    setEvents() {
        this.inputField.addEventListener(
            'keyup',
            this.debounce((event) => {
                const inputValue = event.target.value.trim();
                if (this.isValueValid(inputValue, event)) {
                    this.lastInputValue = inputValue;
                    this.getSuggestData(inputValue);
                }
            }, this.options.debaunceDelay)
        );
        this.container.addEventListener('keyup', ({ keyCode: currentKeyCode }) => {
            if (!this.isSuggestActive) {
                return;
            }
            switch (currentKeyCode) {
                case this.keycode.enter:
                    this.setSuggestValue();
                    this.closeSuggest();
                    break;
                case this.keycode.esc:
                    this.closeSuggest();
                    break;
                case this.keycode.arrowUp:
                    this.moveCurrentItem('up');
                    break;
                case this.keycode.arrowDown:
                    this.moveCurrentItem('down');
                    break;
            }
        });
        this.suggestField.addEventListener('click', ({ target }) => {
            if (target.className === this.options.suggestItemClass) {
                target.classList.add(this.options.currentClass);
                this.setSuggestValue();
                this.closeSuggest();
            }
            this.inputField.dispatchEvent(new Event('blur'));
            this.inputField.dispatchEvent(new Event('touchend'));
        });
        document.addEventListener('click', (event) => {
            const itemClosest = event.target.closest('.' + this.options.suggestFieldClass);
            if (!itemClosest) {
                this.suggestField.classList.remove(this.options.suggestActiveClass, this.options.suggestActiveClassTop);
            }
        });
    }
    isValueValid(inputValue, event) {
        const inputValueLength = inputValue.length;
        return inputValue &&
            this.lastInputValue != inputValue &&
            inputValueLength >= this.options.minLength &&
            inputValueLength <= this.options.maxLength &&
            !this.isSendingData
            ? true
            : false;
    }
    getSuggestData(searchValue) {
        const { url, options } = this.prepareData(searchValue);
        this.isSendingData = true;
        this.fetchData(url, options);
    }
    prepareData(searchValue) {
        
        const headers = new Headers({ 'x-requested-with': 'XMLHttpRequest', 'Content-Type': 'application/json' });
        let data;
        if(this.container.querySelector(this.options.suggestSelect) && this.container.querySelector(this.options.suggestSelect).value !== '') {
            data = { q: searchValue, limit: this.options.limit, country: this.container.querySelector(this.options.suggestSelect).value };
        }
        else {
            data = { q: searchValue, limit: this.options.limit};
        }
        return { url: this.getFetchUrl(this.options.requestUrl, data), options: { method: 'GET', headers } };
    }
    fetchData(url, options) {
        fetch(url, options)
            .then((res) => res.json())
            .then(({ data, meta }) => {
                this.isSendingData = false;
                if (meta.code === 200 && data.locations.length) {
                    this.generateSuggestList(data.locations);
                    this.openSuggest();
                }
            });
    }
    getFetchUrl(url, data) {
        let getParams = '';
        for (let key in data) {
            if (getParams !== '') {
                getParams += '&';
            }
            getParams += key + '=' + encodeURIComponent(data[key]);
        }
        return url + '?' + getParams;
    }
    generateSuggestList(data) {
        const html = data.reduce((acc, item) => {
            acc += `<div class="${this.options.suggestItemClass}">${item}</div>`;
            return acc;
        }, '');
        this.suggestField.innerHTML = html;
    }
    openSuggest() {
        this.isSuggestActive = true;
        if (this.isOpenToTop()) this.suggestField.classList.add(this.options.suggestActiveClassTop);
        this.suggestField.classList.add(this.options.suggestActiveClass);
    }
    closeSuggest() {
        this.isSuggestActive = false;
        this.currentItemIndex = -1;
        this.suggestField.classList.remove(this.options.suggestActiveClass, this.options.suggestActiveClassTop);
        this.inputField.dispatchEvent(new Event('blur'));
    }
    setSuggestValue() {
        const selectedItem = this.suggestField.querySelector(`.${this.options.currentClass}`);
        if (selectedItem) {
            this.lastInputValue = this.inputField.value = selectedItem.textContent;
        }
    }
    moveCurrentItem(way) {
        const suggestItems = this.suggestField.querySelectorAll(`.${this.options.suggestItemClass}`);
        const suggestItemsLength = suggestItems.length;
        switch (way) {
            case 'up':
                this.currentItemIndex--;
                if (this.currentItemIndex < 0) this.currentItemIndex = suggestItemsLength - 1;
                break;
            case 'down':
                this.currentItemIndex++;
                if (this.currentItemIndex > suggestItemsLength - 1) this.currentItemIndex = 0;
        }
        suggestItems.forEach((el) => {
            el.classList.remove(this.options.currentClass);
        });
        const currentItem = suggestItems[this.currentItemIndex];
        currentItem.classList.add(this.options.currentClass);
        const offsetItem = currentItem.offsetTop;
        this.suggestField.scrollTop = offsetItem;
    }
    isOpenToTop() {
        const windowHeight = window.innerHeight;
        const clientRectBottom = this.container.getBoundingClientRect().bottom;
        return windowHeight - clientRectBottom < this.options.boxHeight;
    }
    debounce(fn, delay) {
        let timer = null;
        return function () {
            let context = this,
                args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        };
    }
}
class UserRecovery {
    constructor({ formContainer, props: { userRecoveryProps } }) {
        this.formContainer = formContainer;
        this.userRecoveryProps = userRecoveryProps;
        this.init();
    }
    init() {
        this.emailElement = this.formContainer.querySelector(this.userRecoveryProps.emailElement);
        const tokenElement = this.formContainer.querySelector(this.userRecoveryProps.tokenElement);
        this.token = tokenElement ? tokenElement.value : '';
        this.setEvents();
    }
    setEvents() {
        this.formContainer.addEventListener('click', (e) => {
            if (e.target.matches(this.userRecoveryProps.passwordElement)) {
                this.recoveryPassword(e.target.href);
            }
            if (e.target.matches(this.userRecoveryProps.confirmElement)) {
                this.recoveryConfirm(e.target.href);
            }
            if (e.target.matches(this.userRecoveryProps.cancelElement)) {
                this.recoveryCancel(e.target.href);
            }
        });
    }
    recoveryRequest(url, formData) {
        const headers = new Headers({ 'x-requested-with': 'XMLHttpRequest' });
        const options = { method: 'POST', headers: headers, body: formData };
        fetch(url, options)
            .then((res) => res.json())
            .then(({ status, data, meta }) => {
                if (status === 'error' && meta.code === 302 && meta.redirect) {
                    this.redirectToCaptcha(meta.redirect);
                    return;
                }
                const message = status === 'success' ? data.message : meta.description.description;
                this.showErrorMessage(message);
            })
            .catch((err) => {
            });
    }
    recoveryPassword(url) {
        const formData = new FormData();
        formData.append('RecoveryForm[email]', this.emailElement.value);
        this.recoveryRequest(url, formData);
    }
    recoveryConfirm(url) {
        const recoveryId = url.substr(-32);
        url = url.replace('/id/' + recoveryId, '');
        const formData = new FormData();
        formData.append('id', recoveryId);
        formData.append('YII_CSRF_TOKEN', this.token);
        this.recoveryRequest(url, formData);
    }
    recoveryCancel(url) {
        this.recoveryRequest(url);
    }
    showErrorMessage(msg) {
        this.errorElement = this.formContainer.querySelector(this.userRecoveryProps.errorElement);
        this.errorElement && (this.errorElement.innerHTML = msg);
    }
    redirectToCaptcha(url) {
        const exp = new RegExp(/\/\/(www|m)/);
        if (!exp.test(url)) {
            url = location.protocol + '//' + location.host + (url[0] === '/' ? url : '/' + url);
        }
        window.location.href = url;
    }
}
class Validator {
    constructor({ props, formContainer, fields }) {
        this.formContainer = formContainer;
        this.props = props;
        this.fields = fields;
        this.storage = {};
        this.errorList = new Set();
        this.lastErrorNames = [];
        this.isSubmitted = false;
        this.setEvents();
    }
    setEvents() {
        this.formContainer.addEventListener('field-validate', (e) => {
            this.highlight(e.detail.response);
        });
    }
    prepareFormData(fields) {
        const formDataList = fields.reduce((acc, item) => {
            if (this.storage[item.name] === item.element.value) {
                return acc;
            }
            const formData = new FormData();
            formData.append('ajax', 'register-form');
            formData.append('scenario', item.validateRule.scenario);
            if (item.name === 'day' || item.name === 'month' || item.name === 'year') {
                formData.append(`UserForm[day]`, this.formContainer.querySelector(`input[data-type="day"]`).value);
                formData.append(`UserForm[month]`, this.formContainer.querySelector(`input[data-type="month"]`).value);
                formData.append(`UserForm[year]`, this.formContainer.querySelector(`input[data-type="year"]`).value);
            } else {
                formData.append(item.fieldName, item.element.value);
            }
            if (item.extraFormData) {
                for (const [key, value] of Object.entries(item.extraFormData)) {
                    formData.append(key, value);
                }
            }
            acc.push(formData);
            this.storage[item.name] = item.element.value;
            this.lastErrorNames.push(item.errorName);
            return acc;
        }, []);
        return formDataList;
    }
    prepareRequests(dataList) {
        return dataList.map((request) => {
            const data = { method: 'POST', body: request };
            return fetch(this.props.actionURL, data);
        });
    }
    validate(fields, successCallback, failureCallback) {
        const notEmptyFields = this.props.hasValidationEmptyFields ? this.checkEmptyFields(fields) : fields;
        const fieldsData = this.prepareFormData(notEmptyFields);
        const promises = this.prepareRequests(fieldsData);
        return Promise.all(promises)
            .then((responses) => {
                const jsons = responses.map((res) => res.json());
                const headers = responses.map((res) => res.headers);
                return [jsons, headers];
            })
            .then(async (responses) => {
                const [jsons, headers] = responses;
                for (const [i, json] of jsons.entries()) {
                    const data = await json;
                    if (Array.isArray(data) && !data.length) {
                        this.unhighlight();
                        successCallback && successCallback();
                    } else {
                        const eventFieldValidate = new CustomEvent('field-validate', { detail: { response: data, header: headers[i] } });
                        this.formContainer.dispatchEvent(eventFieldValidate);
                        failureCallback && failureCallback();
                    }
                }
                return this.errorList;
            })
            .catch((err) => {
            });
    }
    checkEmptyFields(fields) {
        const emptyFields = fields.filter((field) => field.element.value.length === 0).map((field) => field.errorName);
        emptyFields.forEach((name) => this.renderEmptyFieldError(name));
        return fields.filter((field) => field.element.value.length !== 0);
    }
    renderEmptyFieldError(name) {
        if (!window.jqueryValidationMessages) return;
        const fieldName = this.fields.filter((field) => field.errorName === name).map((field) => field.fieldName);
        const errorName = window.jqueryValidationMessages[fieldName];
        const errorMessage = errorName && errorName.required;
        this.renderErrorMessage(name, errorMessage);
    }
    getErrorElements(name) {
        const { fieldContainer, errorContainer } = this.props;
        const errorField = this.fields.find((field) => field.errorName === name);
        if (!errorField) return;
        const parent = errorField.element.closest(fieldContainer);
        const container = parent.querySelector(errorContainer);
        return { errorField, parent, container };
    }
    resetErrors(name) {
        const { errorClass, validClass } = this.props;
        const { parent, container } = this.getErrorElements(name);
        container.innerHTML = '';
        parent.classList.remove(errorClass);
        parent.classList.add(validClass);
        this.errorList.delete(name);
    }
    renderErrorMessage(name, message) {
        const { errorClass, validClass } = this.props;
        const { parent, container } = this.getErrorElements(name);
        container.dataset.errorName = name;
        container.innerHTML = `<p>${message}</p>`;
        parent.classList.add(errorClass);
        parent.classList.remove(validClass);
        this.errorList.add(name);
    }
    unhighlight(name) {
        if (
            this.lastErrorNames.includes('UserForm_day') ||
            this.lastErrorNames.includes('UserForm_month') ||
            this.lastErrorNames.includes('UserForm_year')
        ) {
            this.errorList.delete('UserForm_day');
            this.errorList.delete('UserForm_month');
            this.errorList.delete('UserForm_year');
        }
        this.lastErrorNames.forEach((errorName) => {
            this.resetErrors(errorName);
        });
        this.lastErrorNames = [];
    }
    highlight(data) {
        const [errorName] = Object.keys(data);
        const [errorMessage] = Object.values(data);
        this.renderErrorMessage(errorName, errorMessage[0]);
        this.lastErrorNames = [];
    }
}
class FData {
    constructor({ fields }) {
        this.fData = this.getFdata();
        this.fDataEmailTransfer = new FDataEmailTransfer(this.fData, fields);
    }
    getFdata() {
        const url = new URL(window.location.href);
        const fData = url.searchParams.get('_fData');
        return fData ? this.prepareFdata(fData) : '';
    }
    prepareFdata(fData) {
        try {
            const decodedFData = decodeURIComponent(fData);
            const base64Decoded = this.b64DecodeUnicode(decodedFData);
            return JSON.parse(base64Decoded);
        } catch (e) {
        }
    }
    b64DecodeUnicode(str) {
        return decodeURIComponent(
            atob(str)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
    }
}
class FDataEmailTransfer {
    constructor(fData, fields) {
        if (!fData) return;
        this.fData = fData;
        this.fields = fields;
        this.emailValue = this.getEmail();
        this.setEmail(this.emailValue);
    }
    getEmail() {
        const { email } = this.fData;
        return this.isValidEmail(email) ? email : '';
    }
    setEmail(value) {
        const emailInput = this.fields.find((field) => field.name === 'email').element;
        emailInput.value = value;
    }
    isValidEmail(emailValue) {
        const pattern = new RegExp(/^[a-zA-Z0-9.!#$%&вЂ™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        return this.fData.hasOwnProperty('email') && pattern.test(emailValue);
    }
}
class Regform extends Utils {
    constructor(formContainer, options = {}) {
        super();
        this.formContainer = formContainer;
        this.props = this.initProps(options);
        this.state = this.initState(this.formContainer, this.props);
        this.formId = `${this.props.formNamespace}-${Date.now()}`;
        this.init();
    }
    init() {
        this.form = this.formContainer.querySelector(this.props.formElement);
        this.validator = new Validator(this.state);
        this.userRecovery = new UserRecovery(this.state);
        const suggestContainer = this.getSuggestContainer();
        if (suggestContainer) {
            this.suggestLocation = new SuggestLocation(suggestContainer, this.state);
        }
        if (this.props.hasMultiSteps) {
            this.multiStep = new MultiStep(this.validator, this.state);
        }
        this.fData = new FData(this.state);
        this.setValidatorEvents();
        this.setCustomEvents();
    }
    initProps(options) {
        const defaults = {
            formNamespace: 'UserForm',
            formElement: '.register-hidden-form',
            actionURL: '/user/register',
            stepContainer: '.form-step-item',
            fieldContainer: '.form-item',
            errorContainer: '.form-error-block',
            errorClass: 'error-field',
            validClass: 'valid-field',
            activeClass: 'is-active',
            disabledClass: 'is-disabled',
            suggestSelect: '.location-country',
            formControls: {
                submitElement: '.submit-btn',
                nextElement: '.next-btn',
                prevElement: '.prev-btn',
                nextCustomElement: '.next-custom-btn',
                blurPreventValidationSelector: '[data-prevent-validation="blur"]',
            },
            hasMultiSteps: false,
            pagination: {
                exist: true,
                root: this.formContainer,
                container: 'pagination-block',
                item: 'pagination-item',
                currentClass: 'is-current',
                visitedClass: 'is-visited',
            },
            hasValidationEmptyFields: false,
            fields: {
                gender: { name: 'gender', btn: '.gender-btn', btnBlock: '.gender-btns-block', validateRule: { required: false } },
                partnerGender: {
                    name: 'partnerGender',
                    btn: '.partner-gender-btn',
                    btnBlock: '.partner-gender-btns-block',
                    validateRule: { required: false },
                },
                sexual_orientation: { name: 'sexual_orientation', validateRule: { required: false } },
                age: { name: 'age', validateRule: { required: true, scenario: 'ageOnly' } },
                day: { name: 'day', validateRule: { required: true, scenario: 'secondStep' } },
                month: { name: 'month', validateRule: { required: true, scenario: 'secondStep' } },
                year: { name: 'year', validateRule: { required: true, scenario: 'secondStep' } },
                screenname: { name: 'login', validateRule: { required: true, scenario: 'loginOnly' } },
                location: { name: 'location', validateRule: { required: true, scenario: 'location' } },
                email: { name: 'email', validateRule: { required: true, scenario: 'email' } },
                password: { name: 'password', validateRule: { required: true, scenario: 'passwordOnly' } },
                termsConsent: { name: 'termsConsent', validateRule: { required: true, scenario: 'termsConsentOnly' } },
                policyConsent: { name: 'policyConsent', validateRule: { required: true, scenario: 'policyConsentOnly' } },
            },
            userRecoveryProps: {
                formNamespace: 'UserForm',
                errorElement: `div[data-error-name="UserForm_email"]`,
                cancelElement: '#recoveryCancelUser',
                confirmElement: '#recoveryConfirm',
                passwordElement: '#recoveryPassword',
                tokenElement: 'input[name="YII_CSRF_TOKEN"]',
                emailElement: `input[name="UserForm[email]"]`,
            },
            fData: {},
        };
        return this.mergeDeep(defaults, options);
    }
    initState(formContainer, props) {
        const fields = this.setFields();
        return { props, formContainer, fields };
    }
    setFields() {
        return Object.values(this.props.fields).reduce((acc, field) => {
            const element = this.formContainer.querySelector(`[name='${this.props.formNamespace}[${field.name}]']:not([type='hidden'])`);
            if (element) {
                const fieldName = element.name;
                const extendedField = { element, fieldName, errorName: `${this.props.formNamespace}_${field.name}` };
                acc.push(Object.assign(field, extendedField));
            }
            return acc;
        }, []);
    }
    getFieldsElement(name) {
        const elem = this.state.fields.find((field) => field.name === name);
        return elem && elem.element;
    }
    setFieldValue(name, value) {
        const element = this.state.fields.find((field) => field.name === name).element;
        element.value = value;
        element.dispatchEvent(new Event('blur'));
        element.dispatchEvent(new Event('change'));
    }
    updateFieldValue(fields) {
        const nodes = fields.map((field) => field.element);
        nodes.forEach(({ name, value }) => {
            const input = this.form.querySelector(`[name='${name}']`);
            input && (input.value = value);
        });
    }
    getSuggestContainer() {
        const suggestInput = this.getFieldsElement('location');
        this.suggestContainer = suggestInput && suggestInput.closest(this.props.fieldContainer);
        return this.suggestContainer;
    }
    setValidatorEvents() {
        const validateRequiredFields = this.state.fields.filter(({ validateRule }) => validateRule && validateRule.required);
        const inputs = validateRequiredFields.filter((input) => input.element.tagName === 'INPUT' && input.element.type !== 'checkbox');
        const termsCheckboxes = validateRequiredFields.filter(
            (input) => input.element.tagName === 'INPUT' && input.element.type == 'checkbox'
        );
        const selects = validateRequiredFields.filter((select) => select.element.tagName === 'SELECT');
        this.submitBtn = this.formContainer.querySelector(this.props.formControls.submitElement);
        this.submitBtn.addEventListener('mousedown', (e) => {
            if (e.detail > 1) return;
            e.preventDefault();
            e.target.focus();
            e.currentTarget.classList.add(this.props.disabledClass);
            const eventFormSubmitClick = new Event('form-submit-click');
            this.formContainer.dispatchEvent(eventFormSubmitClick);
            this.submit(validateRequiredFields);
        });
        const eventInputBlur = new Event('field-blur');
        const handleInputBlur = (e) => {
            const blurPreventSelectors = Array.from(document.querySelectorAll(this.props.formControls.blurPreventValidationSelector));
            if (
                (this.submitBtn && this.submitBtn === e.relatedTarget) ||
                (this.multiStep && this.multiStep.nextBtns.length && this.multiStep.nextBtns.some((btn) => btn === e.relatedTarget)) ||
                (blurPreventSelectors && blurPreventSelectors.length && blurPreventSelectors.some((btn) => btn === e.relatedTarget)) ||
                (this.suggestLocation && this.suggestLocation.isSuggestActive)
            ) {
                return;
            }
            e.target.dispatchEvent(eventInputBlur);
        };
        inputs.forEach((input) => {
            input.element.addEventListener('field-blur', (e) => {
                this.updateFieldValue([input]);
                this.validator.validate([input]);
            });
            input.element.addEventListener('blur', handleInputBlur);
            input.element.addEventListener('keypress', (e) => {
                if (e.keyCode == 13) {
                    if (this.multiStep) {
                        this.multiStep.nextBtns.forEach((btn) => {
                            if (!btn.disabled) {
                                this.multiStep.setDisabledBtn();
                                this.multiStep.isLastStep() ? this.submit(validateRequiredFields) : this.multiStep.next(input.element);
                            }
                        });
                    } else {
                        this.submit(validateRequiredFields);
                    }
                }
            });
        });
        const eventTermsCheckboxesChange = new Event('field-terms-change');
        termsCheckboxes.forEach((checkbox) => {
            checkbox.element.addEventListener('field-terms-change', (e) => {
                e.currentTarget.value = e.currentTarget.checked;
                this.updateFieldValue([checkbox]);
                this.validator.validate([checkbox]);
            });
            checkbox.element.addEventListener('change', (e) => {
                e.target.dispatchEvent(eventTermsCheckboxesChange);
            });
        });
        this.eventFieldChange = new Event('field-change');
        selects.forEach((select) => {
            select.element.addEventListener('field-change', (e) => {
                this.updateFieldValue([select]);
                this.validator.validate([select]);
            });
            select.element.addEventListener('change', (e) => {
                e.target.dispatchEvent(this.eventFieldChange);
            });
        });
        inputs.forEach((input) => {
            input.element.addEventListener('change', (e) => {
                e.target.dispatchEvent(this.eventFieldChange);
        });`654467`
        });
        const eventFieldClick = new Event('field-click');
        inputs.forEach((input) => {
            input.element.addEventListener('click', (e) => {
                e.target.dispatchEvent(eventFieldClick);
            });
        });
        document.querySelectorAll('.form-select').forEach((select) => {
            select.addEventListener('click', (e) => {
                e.currentTarget.querySelector('select').dispatchEvent(eventFieldClick);
            });
        });
        this.formContainer.addEventListener('field-validate', () => {
            this.updateFieldValue(validateRequiredFields);
        });
    }
    setCustomEvents() {
        const { activeClass } = this.state.props;
        const notRequiredFields = this.state.fields.filter(({ validateRule }) => validateRule && !validateRule.required);
        const genderField = this.getFieldsElement('gender');
        const partnerGenderField = this.getFieldsElement('partnerGender');
        notRequiredFields.forEach((field) => {
            field.element.addEventListener('change', () => {
                this.updateFieldValue(notRequiredFields);
            });
            switch (field.name) {
                case 'gender':
                    genderField.addEventListener('change', ({ target }) => {
                        this.changeOrientation(target.value, partnerGenderField.value);
                    });
                    const genderBtnsBlock = this.formContainer.querySelector(field.btnBlock);
                    const genderBtns = genderBtnsBlock.querySelectorAll(field.btn);
                    genderBtns.forEach((btn) => {
                        btn.addEventListener('click', (e) => {
                            genderBtnsBlock.querySelector(`.${activeClass}`).classList.remove(activeClass);
                            e.currentTarget.classList.add(activeClass);
                            const partnerGenderBtn = this.state.fields.find((field) => field.name == 'partnerGender').btn;
                            const partnerGenderValue = this.formContainer.querySelector(`${partnerGenderBtn}.${activeClass}`).dataset
                                .partnerGender;
                            this.changeOrientation(e.currentTarget.dataset.gender, partnerGenderValue);
                        });
                    });
                    break;
                case 'partnerGender':
                    partnerGenderField.addEventListener('change', ({ target }) => {
                        this.changeOrientation(genderField.value, target.value);
                    });
                    const partnerGenderBtnsBlock = this.formContainer.querySelector(field.btnBlock);
                    const partnerGenderBtns = partnerGenderBtnsBlock.querySelectorAll(field.btn);
                    partnerGenderBtns.forEach((btn) => {
                        btn.addEventListener('click', (e) => {
                            partnerGenderBtnsBlock.querySelector(`.${activeClass}`).classList.remove(activeClass);
                            e.currentTarget.classList.add(activeClass);
                            const genderBtn = this.state.fields.find((field) => field.name == 'gender').btn;
                            const genderValue = this.formContainer.querySelector(`${genderBtn}.${activeClass}`).dataset.gender;
                            this.changeOrientation(genderValue, e.currentTarget.dataset.partnerGender);
                        });
                    });
                    break;
                case 'sexual_orientation':
                    const orientationField = this.getFieldsElement('sexual_orientation');
                    const eventOrientationChange = new Event('orientation-change');
                    orientationField.addEventListener('orientation-change', ({ target }) => {
                        target.dataset.genderSelected = target.selectedOptions[0].dataset.genderValue;
                        this.setOrientation(target.dataset.genderSelected, target.value);
                    });
                    orientationField.addEventListener('change', ({ target }) => {
                        target.dispatchEvent(eventOrientationChange);
                        target.dispatchEvent(this.eventFieldChange);
                    });
                default:
                    break;
            }
        });
    }
    changeOrientation(gender, partnerGender) {
        if (`${gender}-${partnerGender}` === 'male-female') this.setOrientation('male', 'hetero');
        if (`${gender}-${partnerGender}` === 'male-male') this.setOrientation('male', 'homo');
        if (`${gender}-${partnerGender}` === 'female-male') this.setOrientation('female', 'hetero');
        if (`${gender}-${partnerGender}` === 'female-female') this.setOrientation('female', 'homo');
    }
    setOrientation(gender, orientation) {
        this.form.querySelector(`[name='${this.state.props.formNamespace}[gender]']`).value = gender;
        this.form.querySelector(`[name='${this.state.props.formNamespace}[sexual_orientation]']`).value = orientation;
        document.body.dataset.orientation = `${orientation}-${gender}`;
    }
    async submit(fields) {
        if (!this.isSubmitted) {
            this.updateFieldValue(fields);
            const errors = await this.validator.validate(fields);
            if (!errors.size && !this.isSubmitted) {
                const eventFormSubmit = new Event('form-submit');
                this.formContainer.dispatchEvent(eventFormSubmit);
                this.isSubmitted = true;
                console.log(this.form.submit())
                // this.form.submit();
            }
            if (errors.size) {
                this.submitBtn.classList.remove(this.props.disabledClass);
            }
        }
    }
}
('use strict');
var webPushService = {
    loggerEnabled: false,
    subscribeFlag: false,
    subscribeOneSignalFlag: false,
    datinginformUser: null,
    urlParams: {},
    initOneSignalFlag: false,
    safariOptions: false,
    safariSubscriptionProposed: false,
    ip: false,
    vapidAccountId: false,
    vapidPublicKey: false,
    init: function (options) {
        this.loggerEnabled = options.loggerEnabled || false;
        this.oneSignalAllowed = options.oneSignalAllowed || false;
        this.safariOptions = options.safari || false;
        this.vapidAccountId = options.vapidAccountId || false;
        this.vapidPublicKey = options.vapidPublicKey || false;
        var self = this;
        if (options.disabledAfterLogin) {
            return false;
        }
        if (options.oneSignalAllowed) {
            self.initOneSignal({ appId: options.safari.appId, safariWebId: options.safari.webId });
        } else if (options.enabled) {
            if (self.isSupported()) {
                self.registerServiceWorker();
            } else if (self.isSafariPushSupported()) {
                self.subscribeSafari();
            } else {
                if (!options.defaultBlocked) self.track('blocked');
            }
        }
    },
    isSupported: function () {
        if (!('serviceWorker' in navigator)) {
            return false;
        }
        if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
            return false;
        }
        if (Notification.permission === 'denied') {
            return false;
        }
        if (!('PushManager' in window)) {
            return false;
        }
        return true;
    },
    registerServiceWorker: function () {
        var self = this;
        var isSubscriptionProposed = false;
        navigator.serviceWorker
            .register('/webPushWorker.js')
            .then(function (serviceWorkerRegistration) {
                navigator.serviceWorker.ready
                    .then(function (serviceWorkerRegistration) {
                        if (Notification.permission === 'default') {
                            isSubscriptionProposed = true;
                            window.dispatchEvent(new CustomEvent('pushNotificationShow'));
                            self.track('proposed');
                        }
                        serviceWorkerRegistration.pushManager
                            .getSubscription()
                            .then(function (pushSubscription) {
                                return new Promise(function (resolve, reject) {
                                    if (pushSubscription instanceof PushSubscription) {
                                        resolve(pushSubscription);
                                    } else {
                                        if (!self.subscribeFlag) {
                                            self.subscribeFlag = true;
                                            var subscribeParams = { userVisibleOnly: true };
                                            if (self.vapidPublicKey) {
                                                subscribeParams.applicationServerKey = self.urlBase64ToUint8Array(self.vapidPublicKey);
                                            }
                                            serviceWorkerRegistration.pushManager
                                                .subscribe(subscribeParams)
                                                .then(function (pushSubscription) {
                                                    resolve(pushSubscription);
                                                })
                                                .catch(function (e) {
                                                    reject(e);
                                                });
                                        }
                                    }
                                });
                            })
                            .then(function (pushSubscription) {
                                if (isSubscriptionProposed) {
                                    var promise = self.track('accepted', pushSubscription);
                                    window.dispatchEvent(new CustomEvent('pushNotificationAccepted'));
                                }
                                self.subscribeUser(self.getUserId(), pushSubscription, promise, self.vapidAccountId);
                            })
                            .catch(function (error) {
                                self.subscribeFlag = false;
                                if (isSubscriptionProposed && Notification.permission === 'denied') {
                                    window.dispatchEvent(new CustomEvent('pushNotificationDeclined'));
                                    self.track('denied');
                                }
                                if (isSubscriptionProposed && Notification.permission === 'default') {
                                    window.dispatchEvent(new CustomEvent('pushNotificationClose'));
                                    self.track('close');
                                }
                            });
                    })
                    .catch(function (er) {
                    });
            })
            .catch(function (error) {
            });
    },
    urlBase64ToUint8Array: function (base64String) {
        const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
        const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    },
    getUserId: function () {
        if (window.currentUser && window.currentUser.id) {
            return window.currentUser.id;
        } else if (window.app && app.appData && app.appData().get('user') && app.appData().get('user').id) {
            return app.appData().get('user').id;
        } else if (this.isDatinginformUser() && this.getUrlParams().wpUserId) {
            return this.getUrlParams().wpUserId;
        } else if (window.app && app.isB2bApp && app.managerId) {
            return app.managerId;
        }
        return '';
    },
    getUrlParams: function () {
        if (!!Object.keys(this.urlParams).length) {
            return this.urlParams;
        }
        window.location.href.replace(
            /[?&]+([^=&]+)=([^&]*)/gi,
            function (m, name, value) {
                this.urlParams[name] = value;
            }.bind(this)
        );
        return this.urlParams;
    },
    sendSubscribe: function (data, promise) {
        var xhr = new XMLHttpRequest(),
            self = this;
        xhr.open('POST', '/crm/webPush/subscribe', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status != 200) {
                    if (promise && self.isDatinginformUser()) {
                        promise.then(function () {
                            window.close();
                        });
                    }
                    return;
                }
                if (promise && self.isDatinginformUser()) {
                    promise.then(function () {
                        window.close();
                    });
                }
            }
        };
        xhr.send(data);
    },
    isEmptyObj: function (obj) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
        return true;
    },
    subscribeUser: function (userId, pushSubscription, promise, vapidAccountId) {
        var self = this;
        this.getLocalIp(function (ip) {
            var data =
                'userId=' +
                self.getUserId() +
                (window.app && !self.isEmptyObj(app.csrfToken) ? '&' + app.csrfToken.name + '=' + app.csrfToken.value : '') +
                '&fingerprint=' +
                self.getFingerprint(ip);
            if (pushSubscription.subscriptionId && pushSubscription.endpoint.indexOf(pushSubscription.subscriptionId) === -1) {
                data += '&endpoint=' + pushSubscription.endpoint + '/' + pushSubscription.subscriptionId;
            } else {
                data += '&subscription=' + JSON.stringify(pushSubscription);
            }
            if (vapidAccountId) {
                data += '&vapidAccountId=' + vapidAccountId;
            }
            self.sendSubscribe(data, promise);
        });
    },
    sendTrack: function (url, action) {
        var xhr = new XMLHttpRequest(),
            self = this;
        xhr.open('GET', url, true);
        var promiseResolve,
            promise = new Promise(function (resolve) {
                promiseResolve = resolve;
            });
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                promiseResolve();
                if (this.status != 200) {
                    return;
                }
                if (promise && self.isDatinginformUser() && (action === 'dateinformDenied' || action === 'denied')) {
                    promise.then(window.close);
                }
            }
        };
        xhr.send();
        return promise;
    },
    track: function (action, pushSubscription) {
        if (this.isDatinginformUser() && ['proposed', 'denied', 'accepted', 'close'].indexOf(action) !== -1) {
            action = 'dateinform' + action.charAt(0).toUpperCase() + action.slice(1);
        }
        var self = this,
            url = '/crm/webPush/track?userId=' + self.getUserId() + '&track=' + action;
        if (pushSubscription) {
            url += '&endpoint=' + self.getEndpoint(pushSubscription);
        }
        return this.sendTrack(url, action);
    },
    isDatinginformUser: function () {
        if (typeof this.datinginformUser === 'boolean') {
            return this.datinginformUser;
        }
        this.datinginformUser = typeof app !== 'object' && window.location.host.indexOf('dateinform') !== -1;
        return this.datinginformUser;
    },
    getEndpoint: function (pushSubscription) {
        if (pushSubscription.endpoint.indexOf('https://android.googleapis.com/gcm/send') !== 0) {
            return pushSubscription.endpoint;
        }
        var mergedEndpoint = pushSubscription.endpoint;
        if (pushSubscription.subscriptionId && pushSubscription.endpoint.indexOf(pushSubscription.subscriptionId) === -1) {
            mergedEndpoint = pushSubscription.endpoint + '/' + pushSubscription.subscriptionId;
        }
        return mergedEndpoint;
    },
    initOneSignal: function (params) {
        var self = this;
        window.OneSignal.push(function () {
            if (OneSignal.isPushNotificationsSupported()) {
                if (!self.initOneSignalFlag) {
                    window.OneSignal.push(['init', { appId: params.appId, safari_web_id: params.safariWebId, autoRegister: false }]);
                    self.initOneSignalFlag = true;
                }
                window.OneSignal.push(['registerForPushNotifications', { modalPrompt: true }]);
            }
        });
    },
    subscribeOneSignal: function () {
        var self = this;
        if (this.oneSignalAllowed) {
            window.OneSignal.push(function () {
                if (OneSignal.isPushNotificationsSupported() && !self.subscribeOneSignalFlag) {
                    OneSignal.push([
                        'isPushNotificationsEnabled',
                        function (enabled) {
                            if (enabled) {
                                window.OneSignal.push([
                                    'getIdsAvailable',
                                    function (ids) {
                                        if (ids && ids.userId) {
                                            var params =
                                                'userId=' +
                                                self.getUserId() +
                                                (window.app && !self.isEmptyObj(app.csrfToken)
                                                    ? '&' + app.csrfToken.name + '=' + app.csrfToken.value
                                                    : '') +
                                                '&type=safari&registrationId=' +
                                                ids.userId;
                                            self.sendSubscribe(params);
                                        }
                                    },
                                ]);
                            }
                        },
                    ]);
                }
            });
        }
    },
    isSafariPushSupported: function () {
        return this.safariOptions.websitePushId && 'safari' in window && 'pushNotification' in window.safari;
    },
    subscribeSafari: function () {
        var permissionData = window.safari.pushNotification.permission(this.safariOptions.websitePushId);
        this.checkSafariPermissions(permissionData);
    },
    __getSafariWebServiceUrl: function () {
        if (this.safariOptions && this.safariOptions.webServiceUrl) {
            return this.safariOptions.webServiceUrl;
        }
        return 'https://' + location.host + '/safariWebPush';
    },
    checkSafariPermissions: function (permissionData) {
        var self = this;
        if (permissionData.permission === 'default') {
            self.subscribeProposed = true;
            self.track('proposed');
            window.safari.pushNotification.requestPermission(
                this.__getSafariWebServiceUrl(),
                self.safariOptions.websitePushId,
                { userId: self.getUserId() },
                self.checkSafariPermissions
            );
        } else if (permissionData.permission === 'denied') {
            if (self.subscribeProposed) {
                self.track('denied');
                self.subscribeProposed = false;
            }
        } else if (permissionData.permission === 'granted') {
            if (self.subscribeProposed) {
                self.track('accepted');
                self.subscribeProposed = false;
            }
            this.getLocalIp(function (ip) {
                var params =
                    'userId=' +
                    self.getUserId() +
                    (window.app && !self.isEmptyObj(app.csrfToken) ? '&' + app.csrfToken.name + '=' + app.csrfToken.value : '') +
                    '&type=safari&registrationId=' +
                    permissionData.deviceToken +
                    '&fingerprint=' +
                    self.getFingerprint(ip);
                self.sendSubscribe(params);
            });
        }
    },
    getFingerprint: function (ip) {
        var keys = [
            screen.colorDepth || -1,
            window.devicePixelRatio || '',
            navigator.hardwareConcurrency || 'unknown',
            new Date().getTimezoneOffset(),
            navigator.cpuClass || 'unknown',
            navigator.platform || 'unknown',
        ];
        if (typeof navigator.maxTouchPoints !== 'undefined') {
            keys.push(navigator.maxTouchPoints);
        } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
            keys.push(navigator.msMaxTouchPoints);
        } else {
            keys.push(0);
        }
        try {
            document.createEvent('TouchEvent');
            keys.push(1);
        } catch (_) {
            keys.push(0);
        }
        keys.push('ontouchstart' in window);
        keys.push(ip);
        return keys.join('');
    },
    getLocalIp: function (callback) {
        if (this.ip) {
            callback(this.ip);
            return;
        }
        var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        var pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }),
            noop = function () {};
        pc.createDataChannel('');
        pc.createOffer(pc.setLocalDescription.bind(pc), noop);
        pc.onicecandidate = function (ice) {
            if (!ice || !ice.candidate || !ice.candidate.candidate) return;
            var ip = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
            callback(ip);
            pc.onicecandidate = noop;
        };
    },
};

class LoginAndRecovery extends Utils {
    constructor(formContainer, options = {}) {
        super();

        this.formContainer = formContainer;

        this.props = this.initProps(options);
        this.state = this.initState(this.formContainer);

        this.errorList = [];
        this.isSubmitted = false;
        this.setEvents();
    }

    initProps(options) {
        const defaults = {
            login: {
                formNamespace: 'LoginForm',
                actionURL: '/site/checkLogin',
                formElement: '.login-form',
                emailElement: '.login-email-field',
                emailError: '[data-error-name="email"]',
                msisdnError: '[data-error-name="msisdn"]',
                passwordElement: '.login-password-field',
                passwordError: '[data-error-name="password"]',
                submitElement: '.login-form-submit',
            },
            recovery: {
                formNamespace: 'RecoveryForm',
                actionURL: '/account/remindPassword',
                formElement: '.recovery-form',
                emailElement: '.recovery-email-field',
                emailError: '[data-error-name="email"]',
                emailSuccess: '[data-success-name="email"]',
                submitElement: '.recovery-form-submit',
            },
            fieldContainer: '.form-item',
            fieldElement: '.form-input input',
            errorContainer: '.form-error-block',
            errorClass: 'error-field',
            validClass: 'valid-field',
        };

        return this.mergeDeep(defaults, options); // class Utils (register)
    }

    initState(formContainer) {
        const { login, recovery, errorContainer } = this.props;

        const loginForm = formContainer.querySelector(login.formElement);
        const recoveryForm = formContainer.querySelector(recovery.formElement);
        const fields = this.initFields(loginForm, recoveryForm);
        const errorContainers = formContainer.querySelectorAll(errorContainer);

        return {
            loginForm,
            recoveryForm,
            fields,
            errorContainers,
        };
    }

    initFields(loginForm, recoveryForm) {
        const { login, recovery } = this.props;

        const loginEmailField = loginForm.querySelector(login.emailElement);
        const loginEmailError = loginForm.querySelector(login.emailError);
        const loginMsisdnError = loginForm.querySelector(login.msisdnError);
        const loginPasswordField = loginForm.querySelector(login.passwordElement);
        const loginPasswordError = loginForm.querySelector(login.passwordError);

        const recoveryEmailField = recoveryForm.querySelector(recovery.emailElement);
        const recoveryEmailError = recoveryForm.querySelector(recovery.emailError);
        const recoveryEmailSuccess = recoveryForm.querySelector(recovery.emailSuccess);

        return [
            {
                name: loginEmailField.name,
                element: loginEmailField,
                value: null,
                error: loginEmailError,
            },
            {
                name: `${login.formNamespace}[msisdn]`,
                element: loginEmailField,
                value: null,
                error: loginMsisdnError,
            },
            {
                name: loginPasswordField.name,
                element: loginPasswordField,
                value: null,
                error: loginPasswordError,
            },
            {
                name: recoveryEmailField.name,
                element: recoveryEmailField,
                value: null,
                error: recoveryEmailError,
                success: recoveryEmailSuccess,
            },
        ];
    }

    getField(key, value) {
        return this.state.fields.find(field => field[key] === value);
    }

    setEvents() {
        const { login, recovery } = this.props;
        const { loginForm, recoveryForm, fields } = this.state;
        
        // Enter keypress on inputs
        const inputs = fields.map(field => field.element);
        inputs.forEach(input => {
            input.addEventListener('keypress', e => {
                if(e.keyCode === 13) {
                    e.preventDefault();
                    
                    e.currentTarget.name === 'RecoveryForm[email]' ? this.validate(recovery.actionURL, recoveryForm) : this.submit(login.actionURL, loginForm)
                }
            });
        });

        // Login form submit
        const loginSubmitBtn = loginForm.querySelector(login.submitElement);
        loginSubmitBtn.addEventListener('click', e => {
            e.preventDefault();
            //if (this.hasSameValues(loginForm)) return; // cancel request for the same value

            this.submit(login.actionURL, loginForm);
        });

        // Recovery form submit
        const recoverySubmitBtn = recoveryForm.querySelector(recovery.submitElement);
        recoverySubmitBtn.addEventListener('click', e => {
            e.preventDefault();
            // if (this.hasSameValues(recoveryForm)) return; // cancel request for the same value

            this.validate(recovery.actionURL, recoveryForm);
        });

        // Switch forms
        const forgotPassword = this.formContainer.querySelector('.recovery-password-btn');
        forgotPassword.addEventListener('click', e => {
            this.switchToForm('login', 'recovery');
        });

        const backToLogin = this.formContainer.querySelector('.login-switch-btn');
        backToLogin.addEventListener('click', e => {
            this.switchToForm('recovery', 'login');
        });
    }

    hasSameValues(form) {
        const sameValues = [];

        form.querySelectorAll(this.props.fieldElement).forEach(({ name, value }) => {
            const elem = this.getField('name', name);
            sameValues.push(elem.value === value);
        });

        return sameValues.every(Boolean);
    }

    switchToForm(from, to) {
        const fromForm = this.formContainer.querySelector(this.props[from].formElement);
        const toForm = this.formContainer.querySelector(this.props[to].formElement);

        fromForm.classList.remove('visible');
        fromForm.classList.add('hidden');
        toForm.classList.remove('hidden');
        toForm.classList.add('visible');
        document.body.dataset.signInVisibleForm = to;

        const fromElem = this.getField('name', `${this.props[from].formNamespace}[email]`);
        const toElem = this.getField('name', `${this.props[to].formNamespace}[email]`);
        toElem.element.value = fromElem.element.value;
        toElem.element.dispatchEvent(new Event('blur'));
        toForm.querySelector(this.props[to].submitElement).dispatchEvent(new Event('click'));
    }

    updateState(form) {
        form.querySelectorAll(this.props.fieldElement).forEach(({ name, value }) => {
            const elem = this.getField('name', name);
            elem.value = value;
        });
    }

    redirect(url) {
        const exp = new RegExp(/\/\/(www|m)/);

        if (!exp.test(url)) {
            url = location.protocol + '//' + location.host + (url[0] === '/' ? url : '/' + url);
        }

        window.location.href = url;
    }

    prepareFetchOptions(form) {
        const body = new FormData(form);
        const headers = new Headers({ 'x-requested-with': 'XMLHttpRequest' });

        return {
            method: 'POST',
            headers,
            body,
        };
    }

    validate(url, form) {
        this.updateState(form);
        const options = this.prepareFetchOptions(form);

        return fetch(url, options)
            .then(res => res.json())
            .then(({ data, status, meta }) => {
                if (status === 'error') {
                    // prevent login spam
                    if (meta.code === 302 && meta.redirect) {
                        this.redirect(meta.redirect);
                        return;
                    }

                    this.renderErrors(meta.description);
                    document.dispatchEvent(new CustomEvent('login-field-validate', {
                        detail: {
                            meta,
                        }
                    }));
                }

                if (status === 'success') {
                    // success recovery email
                    if (data.valid) {
                        this.renderErrors(data);
                        return;
                    }

                    this.errorList = [];
                }

                return this.errorList;
            })
            .catch(err => {
                throw err;
            });
    }

    renderErrors(data) {
        const { login, recovery, errorClass, validClass } = this.props;

        // login response error
        if (data.type) {
            const errorName = `${login.formNamespace}[${data.type}]`;
            const elem = this.getField('name', errorName);

            this.renderMessage(elem.error, data.message, errorClass);
            this.errorList.push(errorName);
        }

        // recovery response error
        const recoveryName = `${recovery.formNamespace}[email]`;
        const recoveryElem = this.getField('name', recoveryName);
        if (data.email) this.renderMessage(recoveryElem.error, data.email[0], errorClass);

        // recovery response success
        if (data.valid) this.renderMessage(recoveryElem.success, data.message, validClass);
    }

    renderMessage(container, message, className) {
        this.resetErrors();

        container.innerHTML = message; // render new error message
        //container.closest(this.props.fieldContainer).classList.add(className);
        this.formContainer.querySelectorAll(this.props.fieldContainer).forEach(div => {
            div.classList.add(className);
        })
    }

    resetErrors() {
        const { errorContainers } = this.state;
        const { fieldContainer, errorClass, validClass } = this.props;

        errorContainers.forEach(container => {
            container.innerHTML = '';
            container.closest(fieldContainer).classList.remove(errorClass);
            container.closest(fieldContainer).classList.remove(validClass);
        });
    }

    async submit(url, form) {
        // Prevent double submit form
        if (!this.isSubmitted) {
            const errors = await this.validate(url, form);

            if (!errors.length && !this.isSubmitted) {
                document.dispatchEvent(new Event('loginform-submit'));
                this.isSubmitted = true;
                form.submit();
            }
        }
    }
}

const loginFormContainer = document.querySelector('.login-form-wrapper');
const loginForm = new LoginAndRecovery(loginFormContainer, {
    login: { formElement: '.login-form' },
});

new FieldEvents(['.login-form-wrapper .form-item']);

class RegAndLoginForms extends Utils {
	constructor(formInstances, options = {}) {
		super();

		this.formInstances = formInstances;

		this.props = this.initProps(options);
		this.state = this.initState();

		this.movingContainers();
		this.setEvents();
		this.initRegisteredUserLogic();
	}

	initProps(options) {
		const defaults = {
			selectors: {
				formBlock: '.form-block',
				formSwitchLinksBlock: '.form-switch-links',
				loginLink: '.login-link',
				regLink: '.reg-link',
				loginFormPopup: '.login-form-popup-block',
				loginFormPopupTitle: '.login-form-title',
				closeLoginFormPopup: '.close-login-form',
			},
			classes: {
				visible: 'is-visible',
			},
			textKeys: {
				loginLink: '{t::landingTranslations::Sign In}',
				loginLinkSecond: '{t::landingTranslations::Login if you are a member-XMLsafe}',
				regLink: '{t::landingTranslations::Sign up}',
			},
		};

		return this.mergeDeep(defaults, options); // class Utils (register)
	}

	initState() {
		const { formBlock, formSwitchLinksBlock, loginLink, regLink, loginFormPopup, loginFormPopupTitle, closeLoginFormPopup } =
			this.props.selectors;

		const formBlockElement = document.querySelector(formBlock);
		const formSwitchLinksBlockElement = document.querySelector(formSwitchLinksBlock);

		const loginLinkElement = document.querySelector(loginLink);
		const regLinkElement = document.querySelector(regLink);

		const loginFormPopupElement = document.querySelector(loginFormPopup);
		const loginFormPopupTitleElement = document.querySelector(loginFormPopupTitle);
		const closeLoginFormElement = document.querySelector(closeLoginFormPopup);

		return {
			refs: {
				formBlockElement,
				formSwitchLinksBlockElement,
				loginLinkElement,
				regLinkElement,
				loginFormPopupElement,
				loginFormPopupTitleElement,
				closeLoginFormElement,
			},
		};
	}

	move(container, place, elem) {
		container.insertAdjacentElement(place, elem);
	}

	movingContainers() {
		const { formContainer } = this.formInstances.regform;
		const { formBlockElement } = this.state.refs;

		// move regformContainer into .form-block
		formContainer && this.move(formBlockElement, 'afterbegin', formContainer);
	}

	switchForm(name) {
		const { formBlockElement, formSwitchLinksBlockElement } = this.state.refs;

		formBlockElement.dataset.visibleForm = name;
		formSwitchLinksBlockElement.dataset.visibleForm = name;
		document.body.dataset.formIsOpen = name;
	}

	setEvents() {
		const { loginLinkElement, regLinkElement, loginFormPopupElement, closeLoginFormElement } = this.state.refs;
		const { visible } = this.props.classes;

		// switch forms
		loginLinkElement.addEventListener('click', () => {
		    this.switchForm('login');
		    document.dispatchEvent(new Event('loginform-openclick'));
		    this.showLoginForm();
		});
		loginLinkElement.addEventListener('keypress', e => {
			if (e.keyCode == 13) this.switchForm('login');
		});
		regLinkElement.addEventListener('click', () => this.switchForm('register'));
		regLinkElement.addEventListener('keypress', e => {
			if (e.keyCode == 13) this.switchForm('register');
		});

		// login form events
		loginLinkElement.addEventListener('click', () => {

		});
		regLinkElement.addEventListener('click', () => {
			loginFormPopupElement.classList.remove(visible);
		});
		closeLoginFormElement.addEventListener('click', () => {
			loginFormPopupElement.classList.remove(visible);
			this.switchForm('register');
		});
		loginFormPopupElement.addEventListener('click', e => {
			if (e.target === e.currentTarget) {
				e.currentTarget.classList.remove(visible);
				this.switchForm('register');
			}
		});
	}
	
	showLoginForm() {
	    const { loginFormPopupElement } = this.state.refs;
	    const { visible } = this.props.classes;
	    loginFormPopupElement.classList.add(visible);
		document.dispatchEvent(new Event('loginform-open'));
	}

	initRegisteredUserLogic() {
		const { regform, loginForm } = this.formInstances;
		const { formBlockElement, loginLinkElement, loginFormPopupTitleElement } = this.state.refs;

		// has user logout
		const hasUserLogout = +formBlockElement.dataset.hasUserLogout;
		if (hasUserLogout) {
			this.showLoginForm();
			loginFormPopupTitleElement.innerHTML = '{t::landingTranslations::loginform_knownbycookie}';
		}

		// registered user
		setTimeout(function () {
			// setTimeout needed because of a parser problem ( variables accessibility )

			const loginEmail = loginForm.state.fields.find(field => field.name === 'LoginForm[email]').element;
			const regformEmail = regform.state.fields.find(field => field.fieldName === 'UserForm[email]').element;

			regform.formContainer.addEventListener('field-validate', e => {
				const [fieldName] = Object.keys(e.detail.response);

				if (fieldName === 'UserForm_email') {
					const hasUserRegistered = +e.detail.header.get('x-hal');

					if (hasUserRegistered) {
						loginFormPopupTitleElement.innerHTML = '{t::landingTranslations::loginform_knownemail}';
						loginEmail.value = regformEmail.value;
						this.showLoginForm();
					}
				}
			});
		}, 0);
	}
}

setTimeout(function() {
    regAndLoginInstance = new RegAndLoginForms({ regform, loginForm }, {});
}, 0);




// Options for Baseform object
// page options
const mainRegformContainer = document.querySelector('.reg-form-container');
const orientationType = document.body.dataset.orientation;               // hetero / homo
const platformType = document.body.dataset.platform;                     // web / mob
const pageType = document.body.dataset.pageType;                         // index / multistep

// init regform
let options = {};
if (pageType === 'multistep') {
    options = {
        ...options,
        hasMultiSteps: true,
        paginationContainer: document.querySelector(".paginator-text"),
    }
}
const regform = new Regform(mainRegformContainer, options);
new FieldEvents();

// not multistep form
if(pageType !== 'multistep') {
    mainRegformContainer.querySelector('.next-btn').classList.add('is-hidden');
    mainRegformContainer.querySelector('.prev-btn').classList.add('is-hidden');
};

const changeStepCount = () => {
    document.querySelector(".step-counter-current").innerText = regform.multiStep.currentStepIndex + 1;
}
regform.formContainer.addEventListener('step-next', changeStepCount);
document.querySelector(".step-counter-all").innerText = regform.multiStep.maxStep;


document.addEventListener('DOMContentLoaded', function(){
    const lpStepData = new LpStepData({
        regform: regform
    });
    
    const paginationWrapper = document.querySelector(".pagination-wrapper");
    paginationWrapper.appendChild( regform.multiStep.paginationContainer );
    const inputCountry = document.createElement("input");
    inputCountry.setAttribute('name', 'UserForm[SearchParams][country]');
    inputCountry.setAttribute('type', 'hidden');
    inputCountry.setAttribute('value', 'AUT');
    hiddeForm.append(inputCountry);
    
    const inputCity = document.createElement("input");
    inputCity.setAttribute('name', 'UserForm[SearchParams][city]');
    inputCity.setAttribute('type', 'hidden');
    inputCity.setAttribute('value', 'Afling');
    hiddeForm.append(inputCity);
});




