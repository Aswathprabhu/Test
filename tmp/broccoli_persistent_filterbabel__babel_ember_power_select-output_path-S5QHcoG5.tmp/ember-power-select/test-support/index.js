define('ember-power-select/test-support/index', ['exports', '@ember/test-helpers'], function (exports, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = selectChoose;
  exports.selectSearch = selectSearch;
  exports.removeMultipleOption = removeMultipleOption;
  exports.clearSelected = clearSelected;
  async function selectChoose(cssPathOrTrigger, valueOrSelector, optionIndex) {
    let trigger, target;
    if (cssPathOrTrigger instanceof HTMLElement) {
      if (cssPathOrTrigger.classList.contains('ember-power-select-trigger')) {
        trigger = cssPathOrTrigger;
      } else {
        trigger = cssPathOrTrigger.querySelector('.ember-power-select-trigger');
      }
    } else {
      trigger = document.querySelector(`${cssPathOrTrigger} .ember-power-select-trigger`);

      if (!trigger) {
        trigger = document.querySelector(cssPathOrTrigger);
      }

      if (!trigger) {
        throw new Error(`You called "selectChoose('${cssPathOrTrigger}', '${valueOrSelector}')" but no select was found using selector "${cssPathOrTrigger}"`);
      }
    }

    if (trigger.scrollIntoView) {
      trigger.scrollIntoView();
    }

    let contentId = `${trigger.attributes['aria-owns'].value}`;
    let content = document.querySelector(`#${contentId}`);
    // If the dropdown is closed, open it
    if (!content || content.classList.contains('ember-basic-dropdown-content-placeholder')) {
      await (0, _testHelpers.click)(trigger);
      await (0, _testHelpers.settled)();
    }

    // Select the option with the given text
    let options = document.querySelectorAll(`#${contentId} .ember-power-select-option`);
    let potentialTargets = [].slice.apply(options).filter(opt => opt.textContent.indexOf(valueOrSelector) > -1);
    if (potentialTargets.length === 0) {
      potentialTargets = document.querySelectorAll(`#${contentId} ${valueOrSelector}`);
    }
    if (potentialTargets.length > 1) {
      let filteredTargets = [].slice.apply(potentialTargets).filter(t => t.textContent.trim() === valueOrSelector);
      if (optionIndex === undefined) {
        target = filteredTargets[0] || potentialTargets[0];
      } else {
        target = filteredTargets[optionIndex] || potentialTargets[optionIndex];
      }
    } else {
      target = potentialTargets[0];
    }
    if (!target) {
      throw new Error(`You called "selectChoose('${cssPathOrTrigger}', '${valueOrSelector}')" but "${valueOrSelector}" didn't match any option`);
    }
    await (0, _testHelpers.click)(target);
    return (0, _testHelpers.settled)();
  }

  async function selectSearch(cssPathOrTrigger, value) {
    let trigger;
    if (cssPathOrTrigger instanceof HTMLElement) {
      trigger = cssPathOrTrigger;
    } else {
      let triggerPath = `${cssPathOrTrigger} .ember-power-select-trigger`;
      trigger = document.querySelector(triggerPath);
      if (!trigger) {
        triggerPath = cssPathOrTrigger;
        trigger = document.querySelector(triggerPath);
      }

      if (!trigger) {
        throw new Error(`You called "selectSearch('${cssPathOrTrigger}', '${value}')" but no select was found using selector "${cssPathOrTrigger}"`);
      }
    }

    if (trigger.scrollIntoView) {
      trigger.scrollIntoView();
    }

    let contentId = `${trigger.attributes['aria-owns'].value}`;
    let isMultipleSelect = !!trigger.querySelector('.ember-power-select-trigger-multiple-input');

    let content = document.querySelector(`#${contentId}`);
    let dropdownIsClosed = !content || content.classList.contains('ember-basic-dropdown-content-placeholder');
    if (dropdownIsClosed) {
      await (0, _testHelpers.click)(trigger);
      await (0, _testHelpers.settled)();
    }
    let isDefaultSingleSelect = !!document.querySelector('.ember-power-select-search-input');

    if (isMultipleSelect) {
      await (0, _testHelpers.fillIn)(trigger.querySelector('.ember-power-select-trigger-multiple-input'), value);
    } else if (isDefaultSingleSelect) {
      await (0, _testHelpers.fillIn)('.ember-power-select-search-input', value);
    } else {
      // It's probably a customized version
      let inputIsInTrigger = !!trigger.querySelector('.ember-power-select-trigger input[type=search]');
      if (inputIsInTrigger) {
        await (0, _testHelpers.fillIn)(trigger.querySelector('input[type=search]'), value);
      } else {
        await (0, _testHelpers.fillIn)(`#${contentId} .ember-power-select-search-input[type=search]`, 'input');
      }
    }
    return (0, _testHelpers.settled)();
  }

  async function removeMultipleOption(cssPath, value) {
    let elem;
    let items = document.querySelectorAll(`${cssPath} .ember-power-select-multiple-options > li`);
    let item = [].slice.apply(items).find(el => el.textContent.indexOf(value) > -1);
    if (item) {
      elem = item.querySelector('.ember-power-select-multiple-remove-btn');
    }
    try {
      await (0, _testHelpers.click)(elem);
      return (0, _testHelpers.settled)();
    } catch (e) {
      (true && Ember.warn('css path to remove btn not found'));

      throw e;
    }
  }

  async function clearSelected(cssPath) {
    let elem = document.querySelector(`${cssPath} .ember-power-select-clear-btn`);
    try {
      await (0, _testHelpers.click)(elem);
      return (0, _testHelpers.settled)();
    } catch (e) {
      (true && Ember.warn('css path to clear btn not found'));

      throw e;
    }
  }
});