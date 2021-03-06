define('ember-power-select/components/power-select/options', ['exports', 'ember-power-select/templates/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const isTouchDevice = !!window && 'ontouchstart' in window;
  (function (ElementProto) {
    if (typeof ElementProto.matches !== 'function') {
      ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector;
    }

    if (typeof ElementProto.closest !== 'function') {
      ElementProto.closest = function closest(selector) {
        let element = this;
        while (element && element.nodeType === 1) {
          if (element.matches(selector)) {
            return element;
          }
          element = element.parentNode;
        }
        return null;
      };
    }
  })(window.Element.prototype);

  exports.default = Ember.Component.extend({
    isTouchDevice,
    layout: _options.default,
    tagName: 'ul',
    attributeBindings: ['role', 'aria-controls'],
    role: 'listbox',

    // Lifecycle hooks
    didInsertElement() {
      this._super(...arguments);
      if (this.get('role') === 'group') {
        return;
      }
      let findOptionAndPerform = (action, e) => {
        let optionItem = e.target.closest('[data-option-index]');
        if (!optionItem) {
          return;
        }
        if (optionItem.closest('[aria-disabled=true]')) {
          return; // Abort if the item or an ancestor is disabled
        }
        let optionIndex = optionItem.getAttribute('data-option-index');
        action(this._optionFromIndex(optionIndex), e);
      };
      this.element.addEventListener('mouseup', e => findOptionAndPerform(this.get('select.actions.choose'), e));
      this.element.addEventListener('mouseover', e => findOptionAndPerform(this.get('select.actions.highlight'), e));
      if (this.get('isTouchDevice')) {
        this._addTouchEvents();
      }
      if (this.get('role') !== 'group') {
        let select = this.get('select');
        select.actions.scrollTo(select.highlighted);
      }
    },

    // CPs
    'aria-controls': Ember.computed('select.uniqueId', function () {
      return `ember-power-select-trigger-${this.get('select.uniqueId')}`;
    }),

    // Methods
    _addTouchEvents() {
      let touchMoveHandler = () => {
        this.hasMoved = true;
        if (this.element) {
          this.element.removeEventListener('touchmove', touchMoveHandler);
        }
      };
      // Add touch event handlers to detect taps
      this.element.addEventListener('touchstart', () => {
        this.element.addEventListener('touchmove', touchMoveHandler);
      });
      this.element.addEventListener('touchend', e => {
        let optionItem = e.target.closest('[data-option-index]');

        if (!optionItem) {
          return;
        }

        e.preventDefault();
        if (this.hasMoved) {
          this.hasMoved = false;
          return;
        }

        let optionIndex = optionItem.getAttribute('data-option-index');
        this.get('select.actions.choose')(this._optionFromIndex(optionIndex), e);
      });
    },

    _optionFromIndex(index) {
      let parts = index.split('.');
      let options = this.get('options');
      let option = options[parseInt(parts[0], 10)];
      for (let i = 1; i < parts.length; i++) {
        option = option.options[parseInt(parts[i], 10)];
      }
      return option;
    }
  });
});