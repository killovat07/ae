class СustomSelect {
    constructor(selectField, options = {}) {
        this.selectField = selectField;
        this.selectFieldElems = Array.from(selectField.children);
        this.selectFieldOptions = Array.from(selectField.querySelectorAll('option:not([value="default"])'));
        this.props = this.initProps(options);

        this.init();
        this.setEvents();
    }
 
    init() {
        const { classNames } = this.props;
        this.container = this.selectField.closest(`.${classNames.container}`);
        this.placeholderText = this.selectField.querySelector('option[value="default"]').textContent || null;

        this.props.showSearch =  !!this.selectField.dataset.search;
        this.props.searchPlaceholderText = this.selectField.dataset.searchplaceholder;
 
        this.render();
 
        this.selectValue = this.container.querySelector(`.${classNames.selectValue}`);
        this.dropdownList = this.container.querySelector(`.${classNames.dropdownList}`);
        this.dropdownOptions = this.container.querySelectorAll(`.${classNames.dropdownOption}`);
        
        this.searchField = this.container.querySelector(`.${classNames.searchField}`);
        this.searchClearBtn = this.container.querySelector(`.${classNames.searchClear}`);


        this.props.multiselect = !!this.selectField.multiple;
        if (this.props.multiselect){
            this.container.classList.add('select--multiple');
            this.selectField.multiple = true;
        }
        //on mob
        this.props.isMob = (this.isMobile()) ? true : false;
        if (!this.props.isMob){
            this.selectField.style.display = 'none';
        }else{
           this.container.classList.add('select--mobile');
        }

        this.setDefaultValues();
    }
     
    initProps(options) {
        const defaults = {
            autoClose: true,
            showSearch: false,
            searchPlaceholderText: 'search...',
            classNames: {
                container: 'select-field',
                select: 'select',
                selectActive: 'select--focused',
                relatedField: 'related-field',
                 
                selectValue: 'select-value',
                selectValueItem: 'select-value-item',
                selectValueClose: 'icon-close',
                 
                dropdownList: 'select-dropdown',
                dropdownOption: 'select-option',
                dropdownOptionGroup: 'select-group',
                dropdownOptionGroupTitle: 'select-group-title',
                dropdownOptionActive: 'select-option--selected',

                searchField: 'select-search',
                searchClear: 'select-search-clear',
           }
        }
        return Object.assign({}, defaults, options);
    }
     
    setEvents() {
        const { classNames } = this.props;
        this.selectField.addEventListener('change', () => {
            //for mob select set select-value
            if (this.props.isMob && !this.props.multiselect){
                Array.from(this.selectField.selectedOptions).forEach( el => {
                    const optionIndex = this.selectFieldOptions.indexOf(el);
                    const optionText = el.textContent;
                    this.setSelectValue(optionText,optionIndex);
                });
            }
            this.setPlaceholder();
        });
         
        this.selectValue.addEventListener("click", ({ target }) => {
            if (this.props.isMob) return;

            this.setOpenVariant();            
            this.container.classList.toggle(classNames.selectActive);

            /*delete value on Multiselect icon close*/
            if (target.matches(`.${classNames.selectValueClose}`)){
                this.unsetValue(target.parentNode.getAttribute('data-index'));
                this.selectValue.removeChild(target.parentNode);
                this.selectField.dispatchEvent( new Event('change') );
            }

            if (this.props.showSearch) this.filterClearValue();

        });
         
        this.dropdownOptions.forEach( (el,optionIndex) => {
            el.addEventListener("click", ({ target }) => {
                //off on self selected
                if (target.classList.contains(classNames.dropdownOptionActive)) return;
                 
                this.setSelectValue(target.textContent,optionIndex);
                this.selectField.dispatchEvent( new Event('change') );
                if (this.props.autoClose) this.hideDropdown();
            });
        }); 
 
        // Close all possible opened select boxes on outside click
        document.addEventListener('click', ({ target }) => {
            if (target.closest(`.${classNames.container}`) != this.container){
                this.hideDropdown();
            };
        });

        //filter options
        if (this.props.showSearch){
            this.searchField.addEventListener('input', () => {
                const searchValue = this.searchField.value.toLowerCase().trim();
                this.filterOptions(searchValue);
            });
            this.searchClearBtn.addEventListener('click', ()=> {
                this.filterClearValue();
            });
        }
    }
 
    render() {
        const { classNames, showSearch, searchPlaceholderText } = this.props;
        const searchElems = (showSearch) ? `
            <input type="text" placeholder="${searchPlaceholderText}" class="${classNames.searchField}"/>
            <span class="${classNames.searchClear}"></span>
        ` : '';
        const dropdownOptions = this.createDropdownOptions(this.selectFieldElems);
        const selectContent = `
            <div class="${classNames.selectValue}"></div>
            <div class="${classNames.dropdownList}">
                ${searchElems}
                ${dropdownOptions}
            </div>`;

        this.container.querySelector('select').insertAdjacentHTML('afterend',selectContent);
    }
    createDropdownOptions(options) {
        const { classNames } = this.props;
        return options.reduce( (accumulator, option) => {
            let template = '';
            if (option.tagName === 'OPTGROUP'){
                const options = Array.from(option.children).reduce( (acc, el) => {
                    return acc += `<div class="${classNames.dropdownOption}">${el.text}</div>`;
                }, '');
                template = `
                <div class="${classNames.dropdownOptionGroupTitle}">${option.label}</div>
                <div class="${classNames.dropdownOptionGroup}">      
                    ${options}
                </div>
                `;
            }else{
                template = (option.value !== 'default') ? `<div class="${classNames.dropdownOption}">${option.text}</div>` : '';
            }
             
            return accumulator += template;
        }, '');
    }
    createSelectValueItem(text, index) {
        const { classNames } = this.props;
        return `
            <span class="${classNames.selectValueItem}" data-index="${index}">
                ${text}
                <span class="${classNames.selectValueClose}"></span>
            </span>`;
    } 
 
    setSelectValue(value,index){
        if (this.props.multiselect) {
            if ( this.placeholderText && this.selectValue.textContent === this.placeholderText ) this.selectValue.textContent = '';
           
            const valueItem = this.createSelectValueItem(value, index);
            this.selectValue.insertAdjacentHTML('beforeend',valueItem);             
        } else {
            //remove active class and attr selected
            this.dropdownOptions.forEach( (el,indx) => this.unsetValue(indx) );

            //value for group option
            const parent = this.selectFieldOptions[index].parentNode;
            if (parent.tagName === 'OPTGROUP'){
                this.selectValue.innerHTML = `
                    <span class="value-group">${parent.label}</span>
                    <span class="value-group-item">${value}</span>
                `
            }else{
                this.selectValue.textContent = value;
            }
        }
        //add active class and attr selected
        this.setValue(index);
    }
     
    unsetValue(index){
        this.dropdownOptions[index].classList.remove(this.props.classNames.dropdownOptionActive);
        this.selectFieldOptions[index].selected = false;
    }
     
    setValue(index){
        const { classNames } = this.props;
        this.dropdownOptions[index].classList.add(classNames.dropdownOptionActive);
        
        const option = this.selectFieldOptions[index];  
        option.selected = true;

        const isOptionRelated = option.dataset.related;
        const relatedPlaceholder = option.dataset.placeholder; 
        const relatedField = this.selectField.closest('.form-item').querySelector(`.${classNames.relatedField}`);     

        // hide/show related input
        if (relatedField){
            if (isOptionRelated){            
                relatedField.classList.remove('is-hidden');
                if (relatedPlaceholder) relatedField.querySelector('input').placeholder = relatedPlaceholder;
            }else{
                relatedField.classList.add('is-hidden');
                relatedField.querySelector('input').value = '';
            }
        }

    }
     
    setPlaceholder() {
        if (this.placeholderText && this.selectValue.textContent.trim() === ''){
            this.selectValue.textContent = this.placeholderText;
        }
    }
     
    setDefaultValues() {
        this.selectFieldOptions.forEach( (el,index) => {
            if (el.selected) this.setSelectValue(el.textContent,index);
        });
        this.setPlaceholder();
    }
     
    hideDropdown() {
        this.container.classList.remove(this.props.classNames.selectActive);
    }
    isMobile() {
        const userAgent = window.navigator.userAgent;
        return  /ucBrowser|xiaomiBrowser|samsungBrowser|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(userAgent);
    }
    checkOpenToTop(){
        const windowHeight = window.innerHeight;
        const boxHeight = this.dropdownList.clientHeight;
        const clientRectBottom = this.selectValue.getBoundingClientRect().bottom;
        return (windowHeight-clientRectBottom < boxHeight) ? true : false;
    }
    setOpenVariant(){
        if (this.checkOpenToTop()) 
            this.container.classList.add('select--opened-top');
        else{
            this.container.classList.remove('select--opened-top');
        }
    }

    filterOptions(searchValue) {
        this.dropdownOptions.forEach( el => {
            const elText = el.textContent.toLowerCase().trim();
            const isHiddenElem = (!searchValue || elText.includes(searchValue))? false : true;
            el.style.display = (isHiddenElem) ? 'none' : 'block';
        });
    }
     
    filterClearValue() {
        this.searchField.value = '';
        this.filterOptions(this.searchField.value);
    }
}

const selects = document.querySelectorAll('.form-select');
selects.forEach(select => {
    new СustomSelect(select, {})
});


