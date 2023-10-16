class SliderUniverse {
    constructor(slider, options = {}) {
        this.slider = slider;
        this.options = options;
        this.props = this.initProps(options);
        this.setResponseParams();

        this.init();
        this.setEvents();
    }

    init() {
        const { slides_to_move, slide_group_start, loop_infinite } = this.props;

        this.swipe = {
            change_margin: this.props.swipe_margin,
            isBlocked: false,
        };
        this.body = document.querySelector('body');
        this.slide_wrapper = this.slider.querySelector('.slider-wrapper');
        this.slide_view = this.slider.querySelector('.slider-view');
        this.slide_items = this.slider.querySelectorAll('.slider-item');
        this.slides_init_count = this.slide_items.length;
        if (loop_infinite) this.genereteClones();

        this.slides_count = this.slide_items.length;
        this.slides_group = Math.ceil(this.slides_count / slides_to_move);
        this.loop_shift = loop_infinite ? this.slides_init_count : 0;
        this.slide_shifted = slide_group_start * slides_to_move + this.loop_shift;

        this.generateNav();
        this.generatePagination();

        this.setSlideWidth();
        this.setSlide(0);
        this.setAutoplay();
    }
    initProps(options) {
        let defaults = {
            enable: true, // for web mob init slider
            slides_in_view: 1, // slides to show in view
            slides_to_move: 1, // slides move per one action
            slide_group_start: 0, // start from 0, count / slides_in_view
            slide_margin: 2, // in %
            slide_offset: 0, // in % на сколько процентов освободить место для показа соседних слайдов
            pagination: false,
            navigate: true,
            swipe_margin: 30, // in px to change slide
            transition_time: 300,
            autoplay: false,
            autoplay_interval: 2500,
            loop: false,
            loop_infinite: false,
            btn_next_text: '',
            btn_prev_text: '',
        };
        defaults.transition = `all ${defaults.transition_time}ms ease-out`;

        return {
            ...defaults,
            ...options,
        };
    }

    setEvents() {
        const { navigate, pagination, slides_in_view, slides_to_move } = this.props;

        //touch slide events
        this.slide_wrapper.addEventListener('touchstart', (e) => {
            if (!this.swipe.isBlocked) this.setStartSwipeCoords(e.touches[0]);
        });
        this.slide_wrapper.addEventListener('touchmove', (e) => {
            if (!this.swipe.isBlocked) this.setMovingSwipeCoords(e, e.changedTouches[0]);
        });
        this.slide_wrapper.addEventListener('touchend', () => {
            if (!this.swipe.isBlocked) this.onSwipeTouchEnd();
        });

        //mouse slide events
        const onSlideMousemove = (e) => {
            this.setMovingSwipeCoords(e, e);
        };

        this.slide_wrapper.addEventListener('mousedown', (e) => {
            if (e.which > 2 || this.swipe.isBlocked) return;
            this.swipe.startX = e.clientX;
            document.addEventListener('mousemove', onSlideMousemove, false);
        });

        document.addEventListener('mouseup', (e) => {
            if (this.swipe.isBlocked) return;
            this.onSwipeTouchEnd();
            document.removeEventListener('mousemove', onSlideMousemove, false);
        });

        this.slider.querySelectorAll('.slider-item').forEach((item) => {
            
                item.addEventListener('click', (e) => {
                    if (e.which > 2 || this.swipe.isBlocked) {
                        return
                    }
                        else {
                        this.slider.querySelectorAll('.slider-item').forEach(el=>el.classList.remove('is-current'));
                        item.classList.add('is-current');
                    }
                }); 
          });

        //navigate arrows
        this.btnNext.addEventListener('click', this.nextSlide.bind(this));
        this.btnPrev.addEventListener('click', this.prevSlide.bind(this));

        //paginations
        this.dots.forEach((dot) => {
            dot.addEventListener('click', ({ target }) => {
                const currentIndex = Array.from(this.dots).indexOf(target);
                this.slide_shifted = currentIndex * this.props.slides_to_move;
                this.setSlide();
            });
        });

        window.addEventListener(
            'resize',
            this.throttle(() => {
                this.setResponseParams();
                this.setSlideWidth();
                this.setSlide(0);
                this.setAutoplay();
            }, 50)
        );
    }
    /* END EVENTS */

    setStartSwipeCoords(data) {
        this.swipe.startX = data.clientX;
        this.swipe.startY = data.clientY;
        this.swipe.scrollY = false;
        this.swipe.scrollX = false;
    }
    setMovingSwipeCoords(e, data) {
        this.swipe.endX = data.clientX;
        this.swipe.endY = data.clientY;
        this.swipe.deltaX = this.swipe.startX - this.swipe.endX;
        this.swipe.deltaY = this.swipe.startY - this.swipe.endY;
        this.setScrollWay();

        if (this.swipe.scrollY) this.swipe.deltaX = 0;
        if (this.swipe.scrollX) {
            if (this.props.enable) this.movingSlide();
            e.cancelable && e.preventDefault();
        }
    }

    setSlide(transition_time = this.props.transition_time) {
        const { enable, loop, loop_infinite, slides_in_view, slides_to_move, pagination, slide_offset, slide_margin } = this.props;
        if (this.swipe.isBlocked) return;
        if (transition_time !== 0) this.swipe.isBlocked = true;

        const animation = transition_time == 0 ? 'unset' : this.props.transition;
        this.slide_view.style.transition = animation;

        //to show last slide if allow
        if (this.slide_shifted + slides_in_view > this.slides_count) {
            this.slide_shifted = this.slides_count - slides_in_view;
        }
        //to show first slide if allow
        if (this.slide_shifted < 0) {
            this.slide_shifted = 0;
        }

        const offset = this.slide_width * this.slide_shifted - slide_offset / 2 - slide_margin;
        this.slide_view.style.transform = enable ? `translateX(${-offset}%)` : '';
        this.slide_view.addEventListener('transitionend', () => {
            this.swipe.isBlocked = false;
        });

        this.setActiveSlides();
        this.setActivePagination();
        if (!loop && !loop_infinite) this.setActiveNavs();
    }

    nextSlide() {
        const { loop, loop_infinite, slide_group_start, slides_to_move, slides_in_view } = this.props;
        if (this.swipe.isBlocked) return;

        if (this.slide_shifted + slides_in_view == this.slides_count) {
            this.slide_shifted = loop ? 0 : this.slides_count - slides_in_view;
        } else {
            this.slide_shifted += slides_to_move;
        }
        this.setSlide();

        if (loop_infinite && this.slide_shifted >= this.slides_count - this.slides_init_count) {
            this.slide_view.addEventListener(
                'transitionend',
                () => {
                    this.slide_shifted = this.slides_init_count;
                    this.setSlide(0);
                },
                { once: true }
            );
        }
    }
    prevSlide() {
        const { loop, loop_infinite, slides_to_move, slides_in_view } = this.props;
        if (this.swipe.isBlocked) return;

        if (this.slide_shifted == 0) {
            this.slide_shifted = loop ? this.slides_count - slides_in_view : 0;
        } else {
            this.slide_shifted -= slides_to_move;
        }
        this.setSlide();

        if (loop_infinite && this.slide_shifted < this.slides_init_count) {
            this.slide_view.addEventListener(
                'transitionend',
                () => {
                    this.slide_shifted = this.slides_count - this.slides_init_count - slides_to_move;
                    this.setSlide(0);
                },
                { once: true }
            );
        }
    }

    movingSlide() {
        const offset = `
            translateX(${-(this.slide_width * this.slide_shifted - this.props.slide_offset / 2 - this.props.slide_margin)}%)
            translateX(${-this.swipe.deltaX}px)
        `;
        this.slide_view.style.transition = 'unset';
        this.slide_view.style.transform = offset;
    }

    onSwipeTouchEnd() {
        const { enable, transition_time } = this.props;
        let { deltaX, change_margin } = this.swipe;

        if (!enable || !this.swipe.deltaX || this.swipe.deltaX === 0) return;
        const transition = !this.swipe.deltaX || this.swipe.deltaX === 0 ? 0 : transition_time;

        if (deltaX > 0 && deltaX > change_margin) {
            this.nextSlide();
        } else if (deltaX < 0 && deltaX < -change_margin) {
            this.prevSlide();
        } else {
            this.setSlide(transition);
        }
        this.swipe.deltaX = 0;
    }

    setActivePagination() {
        this.dots.forEach((dot) => dot.classList.remove('is-active'));
        const active = Math.ceil(this.slide_shifted / this.props.slides_to_move);
        if (this.dots[active]) this.dots[active].classList.add('is-active');
    }
    setActiveSlides() {
        const active = Math.ceil(this.slide_shifted / this.props.slides_to_move);
        this.slide_items.forEach((slide) => slide.classList.remove('is-current'));
        this.slide_items[active].classList.add('is-current');

        this.slide_items.forEach((slide) => slide.classList.remove('is-active'));
        for (let i = this.slide_shifted; i < this.slide_shifted + this.props.slides_in_view; i++) {
            this.slide_items[i].classList.add('is-active');
        }
    }
    setActiveNavs() {
        this.slide_shifted == 0 ? this.btnPrev.classList.add('is-hidden') : this.btnPrev.classList.remove('is-hidden');
        this.slide_shifted + this.props.slides_in_view == this.slides_count
            ? this.btnNext.classList.add('is-hidden')
            : this.btnNext.classList.remove('is-hidden');
    }

    setSlideWidth() {
        const { enable, slides_in_view, slide_offset, slide_margin } = this.props;
        this.slide_width = 100 / slides_in_view - slide_offset;

        this.slide_items.forEach((item) => {
            const width = enable ? `${this.slide_width - slide_margin * 2}%` : '';
            const margin = enable ? `0 ${slide_margin}%` : '';
            item.style.width = width;
            item.style.margin = margin;
        });
    }

    genereteClones() {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < this.slides_init_count; i++) {
            const cloneItem = this.slide_items[i].cloneNode(true);
            cloneItem.classList.add('clone-item');
            fragment.appendChild(cloneItem);
        }
        for (let i = 0; i < this.slides_init_count; i++) {
            fragment.appendChild(this.slide_items[i]);
        }
        for (let i = 0; i < this.slides_init_count; i++) {
            const cloneItem = this.slide_items[i].cloneNode(true);
            cloneItem.classList.add('clone-item');
            fragment.appendChild(cloneItem);
        }

        this.slide_view.innerHTML = '';
        this.slide_view.appendChild(fragment);
        this.slide_items = this.slider.querySelectorAll('.slider-item');
    }
    generateNav() {
        const { btn_next_text, btn_prev_text } = this.props;
        const navs = `
            <div class="slider-nav">
                <div class="slider-arrow arrow-prev">${btn_prev_text}</div>
                <div class="slider-arrow arrow-next">${btn_next_text}</div>
            </div>
        `;
        this.slider.insertAdjacentHTML('beforeend', navs);
        this.btnNext = this.slider.querySelector('.slider-arrow.arrow-next');
        this.btnPrev = this.slider.querySelector('.slider-arrow.arrow-prev');
    }
    generatePagination() {
        const dots = Array(this.slides_group)
            .fill(1)
            .reduce((acc, item) => {
                return (acc += `<div class="slider-pagination-item"></div>`);
            }, '');

        const paginations = `      
            <div class="slider-pagination">
                ${dots}
            </div> 
        `;
        this.slider.insertAdjacentHTML('beforeend', paginations);
        this.dots = this.slider.querySelectorAll('.slider-pagination-item');
    }

    setResponseParams() {
        const { response } = this.props;
        let load_default_params = true;

        if (!!response) {
            response.forEach((item) => {
                if (window.innerWidth < item.size) {
                    load_default_params = false;
                    for (let param in item.params) {
                        this.props[param] = item.params[param];
                    }
                }
                //load default params
                if (!load_default_params) return false;
                for (let param in this.options) {
                    if (param != 'response') this.props[param] = this.options[param];
                }
            });
        }
        const { enable, loop_infinite, navigate, pagination, slides_in_view, slides_to_move, slide_group_start } = this.props;
        !enable ? this.slider.classList.add('slider-off') : this.slider.classList.remove('slider-off');
        !navigate ? this.slider.classList.add('slider-no-nav') : this.slider.classList.remove('slider-no-nav');
        !pagination || slides_in_view !== slides_to_move || loop_infinite
            ? this.slider.classList.add('slider-no-pagination')
            : this.slider.classList.remove('slider-no-pagination');
    }
    setScrollWay() {
        if (!this.swipe.scrollX && (this.swipe.deltaY > 10 || this.swipe.deltaY < -10)) {
            this.swipe.scrollY = true;
        }
        if (!this.swipe.scrollY && (this.swipe.deltaX > 2 || this.swipe.deltaX < -2)) {
            this.swipe.scrollX = true;
        }
    }
    setAutoplay() {
        const { enable, autoplay, autoplay_interval } = this.props;
        let autoplayInterval;

        if (enable && autoplay) {
            autoplayInterval = setInterval(this.nextSlide.bind(this), autoplay_interval);
        } else {
            clearInterval(autoplayInterval);
        }
    }
    throttle(func, delay) {
        let timeout = null;
        return function (...args) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    func.call(this, ...args);
                    timeout = null;
                }, delay);
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slider_benefit_container = document.querySelector('.benefit-slider');
    const slider_review_container = document.querySelector('.review-slider');
    const slider_awards_container = document.querySelector('.awards-slider');
    const slider_news_container = document.querySelector('.news-slider');
    const featured_news_container = document.querySelector('.featured-slider');
    const event_news_container = document.querySelector('.events-slider');

    if (slider_benefit_container) {
        const slider_benefit = new SliderUniverse(slider_benefit_container, {
            slides_in_view: 4,
            slides_to_move: 1,
            slide_margin: 2,
            slide_offset: 0,
            pagination: false,
            navigate: true,
            loop_infinite: true,
            response: [
                {
                    size: 1600,
                    params: {
                        slides_in_view: 3,
                        slide_offset: 0,
                        slide_margin: 2,
                    },
                },
                {
                    size: 900,
                    params: {
                        slides_in_view: 2,
                        slides_to_move: 1,
                        slide_offset: 0,
                        slide_margin: 2,
                    },
                },
                {
                    size: 600,
                    params: {
                        slides_in_view: 1,
                        slides_to_move: 1,
                        slide_offset: 0,
                        slide_margin: 2,
                    },
                },
            ],
        });
    }
    if (slider_review_container) {
        const slider_review = new SliderUniverse(slider_review_container, {
            slides_in_view: 2,
            slides_to_move: 1,
            slide_margin: 2,
            pagination: false,
            navigate: true,
            loop_infinite: true,
            slide_offset: 7.4,
            response: [
                {
                    size: 1600,
                    params: {
                        slides_in_view: 2,
                    },
                },
                {
                    size: 900,
                    params: {
                        slides_in_view: 1,
                        slides_to_move: 1,
                        slide_margin: 4,
                        slide_offset: 12,
                    },
                },
                {
                    size: 600,
                    params: {
                        slide_offset: 30,
                        slides_in_view: 1,
                        slides_to_move: 1,
                    },
                },
            ],
        });
    }
    if (slider_awards_container) {
        const slider_awards = new SliderUniverse(slider_awards_container, {
            slides_in_view: 4,
            slides_to_move: 1,
            slide_margin: 2,
            pagination: false,
            navigate: true,
            loop_infinite: true,
            response: [
                {
                    size: 2400,
                    params: {
                        slides_in_view: 4,
                    },
                },
                {
                    size: 1200,
                    params: {
                        slides_in_view: 3,
                        slides_to_move: 1,
                    },
                },
                {
                    size: 800,
                    params: {
                        slides_in_view: 2,
                        slides_to_move: 1,
                    },
                },
                {
                    size: 600,
                    params: {
                        slide_margin: 4,
                        slide_offset: 30,
                        slides_in_view: 1,
                        slides_to_move: 1,
                    },
                },
            ],
        });
    }

    if (slider_news_container) {
        const slider_news = new SliderUniverse(slider_news_container, {
            slides_in_view: 4,
            slides_to_move: 1,
            slide_margin: 4,
            pagination: false,
            navigate: true,
            loop_infinite: true,
            slide_offset: 2,
            response: [
                {
                    size: 2400,
                    params: {
                        slide_margin: 2,
                        slides_in_view: 4,
                        slide_offset: 2,
                        swipe_margin: 50
                    },
                },
                {
                    size: 1240,
                    params: {
                        slide_offset: 0,
                        slides_in_view: 2,
                        slides_to_move: 1,
                    },
                },
                {
                    size: 900,
                    params: {
                        slide_offset: 0,
                        slides_in_view: 2,
                        slides_to_move: 1,
                    },
                },
                {
                    size: 600,
                    params: {
                        slide_offset: 0,
                        slide_margin: 4,
                        slides_in_view: 1,
                        slides_to_move: 1,
                    },
                },
            ],
        });
    }

    if (featured_news_container) {
        const featured_news = new SliderUniverse(featured_news_container, {
            slides_in_view: 4,
            slides_to_move: 1,
            slide_margin: 2,
            pagination: false,
            navigate: true,
            loop_infinite: true,
            slide_offset: 2,
            response: [
                {
                    size: 1600,
                    params: {
                        slides_in_view: 4,
                        slide_margin: 2,
                    },
                },
                {
                    size: 900,
                    params: {
                        slides_in_view: 3,
                        slides_to_move: 1,
                        slide_margin: 6,
                    },
                },
                {
                    size: 600,
                    params: {
                        slide_margin: 6,
                        slides_in_view: 3,
                        slides_to_move: 1,
                    },
                },
            ],
        });
    }

    if (event_news_container) {
        const event_news = new SliderUniverse(event_news_container, {
            slides_in_view: 4,
            slides_to_move: 1,
            slide_margin: 0,
            pagination: false,
            navigate: true,
            loop_infinite: true,
            slide_offset: 2,
            response: [
                {
                    size: 1600,
                    params: {
                        slides_in_view: 4,
                        slide_margin: 0,
                    },
                },
                {
                    size: 900,
                    params: {
                        slides_in_view: 3,
                        slides_to_move: 1,
                        slide_margin: 6,
                    },
                },
                {
                    size: 600,
                    params: {
                        slide_margin: 6,
                        slides_in_view: 3,
                        slides_to_move: 1,
                    },
                },
            ],
        });
    }
});
