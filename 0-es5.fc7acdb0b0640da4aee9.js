(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
  /***/
  "./node_modules/@angular/cdk/esm2015/a11y.js":
  /*!***************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/a11y.js ***!
    \***************************************************/

  /*! exports provided: ARIA_DESCRIBER_PROVIDER_FACTORY, MESSAGES_CONTAINER_ID, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, AriaDescriber, ARIA_DESCRIBER_PROVIDER, ActiveDescendantKeyManager, FocusKeyManager, ListKeyManager, FocusTrap, FocusTrapFactory, CdkTrapFocus, InteractivityChecker, LIVE_ANNOUNCER_PROVIDER_FACTORY, LiveAnnouncer, CdkAriaLive, LIVE_ANNOUNCER_PROVIDER, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_DEFAULT_OPTIONS, FOCUS_MONITOR_PROVIDER_FACTORY, TOUCH_BUFFER_MS, FocusMonitor, CdkMonitorFocus, FOCUS_MONITOR_PROVIDER, isFakeMousedownFromScreenReader, A11yModule */

  /***/
  function node_modulesAngularCdkEsm2015A11yJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER_FACTORY", function () {
      return ARIA_DESCRIBER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function () {
      return MESSAGES_CONTAINER_ID;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function () {
      return CDK_DESCRIBEDBY_ID_PREFIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function () {
      return CDK_DESCRIBEDBY_HOST_ATTRIBUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AriaDescriber", function () {
      return AriaDescriber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER", function () {
      return ARIA_DESCRIBER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function () {
      return ActiveDescendantKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function () {
      return FocusKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListKeyManager", function () {
      return ListKeyManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrap", function () {
      return FocusTrap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function () {
      return FocusTrapFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function () {
      return CdkTrapFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function () {
      return InteractivityChecker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER_FACTORY", function () {
      return LIVE_ANNOUNCER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function () {
      return LiveAnnouncer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function () {
      return CdkAriaLive;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER", function () {
      return LIVE_ANNOUNCER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function () {
      return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function () {
      return LIVE_ANNOUNCER_ELEMENT_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function () {
      return LIVE_ANNOUNCER_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER_FACTORY", function () {
      return FOCUS_MONITOR_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function () {
      return TOUCH_BUFFER_MS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusMonitor", function () {
      return FocusMonitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function () {
      return CdkMonitorFocus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER", function () {
      return FOCUS_MONITOR_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function () {
      return isFakeMousedownFromScreenReader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A11yModule", function () {
      return A11yModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * IDs are deliminated by an empty space, as per the spec.
     * @type {?}
     */


    const ID_DELIMINATOR = ' ';
    /**
     * Adds the given ID to the specified ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @param {?} id
     * @return {?}
     */

    function addAriaReferencedId(el, attr, id) {
      /** @type {?} */
      const ids = getAriaReferenceIds(el, attr);

      if (ids.some(
      /**
      * @param {?} existingId
      * @return {?}
      */
      existingId => existingId.trim() == id.trim())) {
        return;
      }

      ids.push(id.trim());
      el.setAttribute(attr, ids.join(ID_DELIMINATOR));
    }
    /**
     * Removes the given ID from the specified ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @param {?} id
     * @return {?}
     */


    function removeAriaReferencedId(el, attr, id) {
      /** @type {?} */
      const ids = getAriaReferenceIds(el, attr);
      /** @type {?} */

      const filteredIds = ids.filter(
      /**
      * @param {?} val
      * @return {?}
      */
      val => val != id.trim());

      if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMINATOR));
      } else {
        el.removeAttribute(attr);
      }
    }
    /**
     * Gets the list of IDs referenced by the given ARIA attribute on an element.
     * Used for attributes such as aria-labelledby, aria-owns, etc.
     * @param {?} el
     * @param {?} attr
     * @return {?}
     */


    function getAriaReferenceIds(el, attr) {
      // Get string array of all individual ids (whitespace deliminated) in the attribute value
      return (el.getAttribute(attr) || '').match(/\S+/g) || [];
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * ID used for the body container where all messages are appended.
     * @type {?}
     */


    const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
    /**
     * ID prefix used for each created message element.
     * @type {?}
     */

    const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
    /**
     * Attribute given to each host element that is described by a message element.
     * @type {?}
     */

    const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
    /**
     * Global incremental identifier for each registered message element.
     * @type {?}
     */

    let nextId = 0;
    /**
     * Global map of all registered message elements that have been placed into the document.
     * @type {?}
     */

    const messageRegistry = new Map();
    /**
     * Container for all registered messages.
     * @type {?}
     */

    let messagesContainer = null;
    /**
     * Utility that creates visually hidden elements with a message content. Useful for elements that
     * want to use aria-describedby to further describe themselves without adding additional visual
     * content.
     */

    class AriaDescriber {
      /**
       * @param {?} _document
       */
      constructor(_document) {
        this._document = _document;
      }
      /**
       * Adds to the host element an aria-describedby reference to a hidden element that contains
       * the message. If the same message has already been registered, then it will reuse the created
       * message element.
       * @param {?} hostElement
       * @param {?} message
       * @return {?}
       */


      describe(hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
          return;
        }

        if (typeof message !== 'string') {
          // We need to ensure that the element has an ID.
          this._setMessageId(message);

          messageRegistry.set(message, {
            messageElement: message,
            referenceCount: 0
          });
        } else if (!messageRegistry.has(message)) {
          this._createMessageElement(message);
        }

        if (!this._isElementDescribedByMessage(hostElement, message)) {
          this._addMessageReference(hostElement, message);
        }
      }
      /**
       * Removes the host element's aria-describedby reference to the message element.
       * @param {?} hostElement
       * @param {?} message
       * @return {?}
       */


      removeDescription(hostElement, message) {
        if (!this._isElementNode(hostElement)) {
          return;
        }

        if (this._isElementDescribedByMessage(hostElement, message)) {
          this._removeMessageReference(hostElement, message);
        } // If the message is a string, it means that it's one that we created for the
        // consumer so we can remove it safely, otherwise we should leave it in place.


        if (typeof message === 'string') {
          /** @type {?} */
          const registeredMessage = messageRegistry.get(message);

          if (registeredMessage && registeredMessage.referenceCount === 0) {
            this._deleteMessageElement(message);
          }
        }

        if (messagesContainer && messagesContainer.childNodes.length === 0) {
          this._deleteMessagesContainer();
        }
      }
      /**
       * Unregisters all created message elements and removes the message container.
       * @return {?}
       */


      ngOnDestroy() {
        /** @type {?} */
        const describedElements = this._document.querySelectorAll("[".concat(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

        for (let i = 0; i < describedElements.length; i++) {
          this._removeCdkDescribedByReferenceIds(describedElements[i]);

          describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }

        if (messagesContainer) {
          this._deleteMessagesContainer();
        }

        messageRegistry.clear();
      }
      /**
       * Creates a new element in the visually hidden message container element with the message
       * as its content and adds it to the message registry.
       * @private
       * @param {?} message
       * @return {?}
       */


      _createMessageElement(message) {
        /** @type {?} */
        const messageElement = this._document.createElement('div');

        this._setMessageId(messageElement);

        messageElement.textContent = message;

        this._createMessagesContainer();

        /** @type {?} */
        messagesContainer.appendChild(messageElement);
        messageRegistry.set(message, {
          messageElement,
          referenceCount: 0
        });
      }
      /**
       * Assigns a unique ID to an element, if it doesn't have one already.
       * @private
       * @param {?} element
       * @return {?}
       */


      _setMessageId(element) {
        if (!element.id) {
          element.id = "".concat(CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
        }
      }
      /**
       * Deletes the message element from the global messages container.
       * @private
       * @param {?} message
       * @return {?}
       */


      _deleteMessageElement(message) {
        /** @type {?} */
        const registeredMessage = messageRegistry.get(message);
        /** @type {?} */

        const messageElement = registeredMessage && registeredMessage.messageElement;

        if (messagesContainer && messageElement) {
          messagesContainer.removeChild(messageElement);
        }

        messageRegistry.delete(message);
      }
      /**
       * Creates the global container for all aria-describedby messages.
       * @private
       * @return {?}
       */


      _createMessagesContainer() {
        if (!messagesContainer) {
          /** @type {?} */
          const preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
          // already a container on the page, but we don't have a reference to it. Clear the
          // old container so we don't get duplicates. Doing this, instead of emptying the previous
          // container, should be slightly faster.


          if (preExistingContainer) {
            /** @type {?} */
            preExistingContainer.parentNode.removeChild(preExistingContainer);
          }

          messagesContainer = this._document.createElement('div');
          messagesContainer.id = MESSAGES_CONTAINER_ID;
          messagesContainer.setAttribute('aria-hidden', 'true');
          messagesContainer.style.display = 'none';

          this._document.body.appendChild(messagesContainer);
        }
      }
      /**
       * Deletes the global messages container.
       * @private
       * @return {?}
       */


      _deleteMessagesContainer() {
        if (messagesContainer && messagesContainer.parentNode) {
          messagesContainer.parentNode.removeChild(messagesContainer);
          messagesContainer = null;
        }
      }
      /**
       * Removes all cdk-describedby messages that are hosted through the element.
       * @private
       * @param {?} element
       * @return {?}
       */


      _removeCdkDescribedByReferenceIds(element) {
        // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX

        /** @type {?} */
        const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(
        /**
        * @param {?} id
        * @return {?}
        */
        id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
        element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
      }
      /**
       * Adds a message reference to the element using aria-describedby and increments the registered
       * message's reference count.
       * @private
       * @param {?} element
       * @param {?} message
       * @return {?}
       */


      _addMessageReference(element, message) {
        /** @type {?} */
        const registeredMessage =
        /** @type {?} */
        messageRegistry.get(message); // Add the aria-describedby reference and set the
        // describedby_host attribute to mark the element.

        addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
        registeredMessage.referenceCount++;
      }
      /**
       * Removes a message reference from the element using aria-describedby
       * and decrements the registered message's reference count.
       * @private
       * @param {?} element
       * @param {?} message
       * @return {?}
       */


      _removeMessageReference(element, message) {
        /** @type {?} */
        const registeredMessage =
        /** @type {?} */
        messageRegistry.get(message);
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }
      /**
       * Returns true if the element has been described by the provided message ID.
       * @private
       * @param {?} element
       * @param {?} message
       * @return {?}
       */


      _isElementDescribedByMessage(element, message) {
        /** @type {?} */
        const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
        /** @type {?} */

        const registeredMessage = messageRegistry.get(message);
        /** @type {?} */

        const messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
      }
      /**
       * Determines whether a message can be described on a particular element.
       * @private
       * @param {?} element
       * @param {?} message
       * @return {?}
       */


      _canBeDescribed(element, message) {
        if (!this._isElementNode(element)) {
          return false;
        }

        if (message && typeof message === 'object') {
          // We'd have to make some assumptions about the description element's text, if the consumer
          // passed in an element. Assume that if an element is passed in, the consumer has verified
          // that it can be used as a description.
          return true;
        }
        /** @type {?} */


        const trimmedMessage = message == null ? '' : "".concat(message).trim();
        /** @type {?} */

        const ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
        // element, because screen readers will end up reading out the same text twice in a row.

        return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
      }
      /**
       * Checks whether a node is an Element node.
       * @private
       * @param {?} element
       * @return {?}
       */


      _isElementNode(element) {
        return element.nodeType === this._document.ELEMENT_NODE;
      }

    }

    AriaDescriber.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    AriaDescriber.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
      }]
    }];
    /** @nocollapse */


    AriaDescriber.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AriaDescriber_Factory() {
        return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: AriaDescriber,
      providedIn: "root"
    });
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentDispatcher
     * @param {?} _document
     * @return {?}
     */

    function ARIA_DESCRIBER_PROVIDER_FACTORY(parentDispatcher, _document) {
      return parentDispatcher || new AriaDescriber(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    const ARIA_DESCRIBER_PROVIDER = {
      // If there is already an AriaDescriber available, use that. Otherwise, provide a new one.
      provide: AriaDescriber,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), AriaDescriber],
      /** @type {?} */
      _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]],
      useFactory: ARIA_DESCRIBER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This class manages keyboard events for selectable lists. If you pass it a query list
     * of items, it will set the active item correctly when arrow events occur.
     * @template T
     */

    class ListKeyManager {
      /**
       * @param {?} _items
       */
      constructor(_items) {
        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */

        this._skipPredicateFn =
        /**
        * @param {?} item
        * @return {?}
        */
        item => item.disabled; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */

        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */

        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).

        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
          _items.changes.subscribe(
          /**
          * @param {?} newItems
          * @return {?}
          */
          newItems => {
            if (this._activeItem) {
              /** @type {?} */
              const itemArray = newItems.toArray();
              /** @type {?} */

              const newIndex = itemArray.indexOf(this._activeItem);

              if (newIndex > -1 && newIndex !== this._activeItemIndex) {
                this._activeItemIndex = newIndex;
              }
            }
          });
        }
      }
      /**
       * Sets the predicate function that determines which items should be skipped by the
       * list key manager.
       * @template THIS
       * @this {THIS}
       * @param {?} predicate Function that determines whether the given item should be skipped.
       * @return {THIS}
       */


      skipPredicate(predicate) {
        /** @type {?} */
        this._skipPredicateFn = predicate;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Configures wrapping mode, which determines whether the active item will wrap to
       * the other end of list when there are no more items in the given direction.
       * @template THIS
       * @this {THIS}
       * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
       * @return {THIS}
       */


      withWrap(shouldWrap = true) {
        /** @type {?} */
        this._wrap = shouldWrap;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Configures whether the key manager should be able to move the selection vertically.
       * @template THIS
       * @this {THIS}
       * @param {?=} enabled Whether vertical selection should be enabled.
       * @return {THIS}
       */


      withVerticalOrientation(enabled = true) {
        /** @type {?} */
        this._vertical = enabled;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Configures the key manager to move the selection horizontally.
       * Passing in `null` will disable horizontal movement.
       * @template THIS
       * @this {THIS}
       * @param {?} direction Direction in which the selection can be moved.
       * @return {THIS}
       */


      withHorizontalOrientation(direction) {
        /** @type {?} */
        this._horizontal = direction;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Modifier keys which are allowed to be held down and whose default actions will be prevented
       * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
       * @template THIS
       * @this {THIS}
       * @param {?} keys
       * @return {THIS}
       */


      withAllowedModifierKeys(keys) {
        /** @type {?} */
        this._allowedModifierKeys = keys;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Turns on typeahead mode which allows users to set the active item by typing.
       * @template THIS
       * @this {THIS}
       * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
       * @return {THIS}
       */


      withTypeAhead(debounceInterval = 200) {
        if (
        /** @type {?} */
        this._items.length &&
        /** @type {?} */
        this._items.some(
        /**
        * @param {?} item
        * @return {?}
        */
        item => typeof item.getLabel !== 'function')) {
          throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }

        /** @type {?} */
        this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.


        /** @type {?} */
        this._typeaheadSubscription =
        /** @type {?} */
        this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
        /**
        * @param {?} keyCode
        * @return {?}
        */
        keyCode =>
        /** @type {?} */
        this._pressedLetters.push(keyCode)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
        /**
        * @return {?}
        */
        () =>
        /** @type {?} */
        this._pressedLetters.length > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
        /**
        * @return {?}
        */
        () =>
        /** @type {?} */
        this._pressedLetters.join(''))).subscribe(
        /**
        * @param {?} inputString
        * @return {?}
        */
        inputString => {
          /** @type {?} */
          const items =
          /** @type {?} */
          this._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
          // following the current active item.


          for (let i = 1; i < items.length + 1; i++) {
            /** @type {?} */
            const index = (
            /** @type {?} */
            this._activeItemIndex + i) % items.length;
            /** @type {?} */

            const item = items[index];

            if (!
            /** @type {?} */
            this._skipPredicateFn(item) &&
            /** @type {?} */
            item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
              /** @type {?} */
              this.setActiveItem(index);
              break;
            }
          }

          /** @type {?} */
          this._pressedLetters = [];
        });
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * @param {?} item
       * @return {?}
       */


      setActiveItem(item) {
        /** @type {?} */
        const previousIndex = this._activeItemIndex;
        this.updateActiveItem(item);

        if (this._activeItemIndex !== previousIndex) {
          this.change.next(this._activeItemIndex);
        }
      }
      /**
       * Sets the active item depending on the key event passed in.
       * @param {?} event Keyboard event to be used for determining which element should be active.
       * @return {?}
       */


      onKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */

        const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
        /** @type {?} */

        const isModifierAllowed = modifiers.every(
        /**
        * @param {?} modifier
        * @return {?}
        */
        modifier => {
          return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
        });

        switch (keyCode) {
          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
            this.tabOut.next();
            return;

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
            if (this._vertical && isModifierAllowed) {
              this.setNextItemActive();
              break;
            } else {
              return;
            }

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
            if (this._vertical && isModifierAllowed) {
              this.setPreviousItemActive();
              break;
            } else {
              return;
            }

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
            if (this._horizontal && isModifierAllowed) {
              this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
              break;
            } else {
              return;
            }

          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
            if (this._horizontal && isModifierAllowed) {
              this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
              break;
            } else {
              return;
            }

          default:
            if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
              // Attempt to use the `event.key` which also maps it to the user's keyboard language,
              // otherwise fall back to resolving alphanumeric characters via the keyCode.
              if (event.key && event.key.length === 1) {
                this._letterKeyStream.next(event.key.toLocaleUpperCase());
              } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"] || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"]) {
                this._letterKeyStream.next(String.fromCharCode(keyCode));
              }
            } // Note that we return here, in order to avoid preventing
            // the default action of non-navigational keys.


            return;
        }

        this._pressedLetters = [];
        event.preventDefault();
      }
      /**
       * Index of the currently active item.
       * @return {?}
       */


      get activeItemIndex() {
        return this._activeItemIndex;
      }
      /**
       * The active item.
       * @return {?}
       */


      get activeItem() {
        return this._activeItem;
      }
      /**
       * Sets the active item to the first enabled item in the list.
       * @return {?}
       */


      setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
      }
      /**
       * Sets the active item to the last enabled item in the list.
       * @return {?}
       */


      setLastItemActive() {
        this._setActiveItemByIndex(this._items.length - 1, -1);
      }
      /**
       * Sets the active item to the next enabled item in the list.
       * @return {?}
       */


      setNextItemActive() {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
      }
      /**
       * Sets the active item to a previous enabled item in the list.
       * @return {?}
       */


      setPreviousItemActive() {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
      }
      /**
       * @param {?} item
       * @return {?}
       */


      updateActiveItem(item) {
        /** @type {?} */
        const itemArray = this._getItemsArray();
        /** @type {?} */


        const index = typeof item === 'number' ? item : itemArray.indexOf(item);
        /** @type {?} */

        const activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

        this._activeItem = activeItem == null ? null : activeItem;
        this._activeItemIndex = index;
      }
      /**
       * Allows setting of the activeItemIndex without any other effects.
       * @deprecated Use `updateActiveItem` instead.
       * \@breaking-change 8.0.0
       * @param {?} index The new activeItemIndex.
       * @return {?}
       */


      updateActiveItemIndex(index) {
        this.updateActiveItem(index);
      }
      /**
       * This method sets the active item, given a list of items and the delta between the
       * currently active item and the new active item. It will calculate differently
       * depending on whether wrap mode is turned on.
       * @private
       * @param {?} delta
       * @return {?}
       */


      _setActiveItemByDelta(delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
      }
      /**
       * Sets the active item properly given "wrap" mode. In other words, it will continue to move
       * down the list until it finds an item that is not disabled, and it will wrap if it
       * encounters either end of the list.
       * @private
       * @param {?} delta
       * @return {?}
       */


      _setActiveInWrapMode(delta) {
        /** @type {?} */
        const items = this._getItemsArray();

        for (let i = 1; i <= items.length; i++) {
          /** @type {?} */
          const index = (this._activeItemIndex + delta * i + items.length) % items.length;
          /** @type {?} */

          const item = items[index];

          if (!this._skipPredicateFn(item)) {
            this.setActiveItem(index);
            return;
          }
        }
      }
      /**
       * Sets the active item properly given the default mode. In other words, it will
       * continue to move down the list until it finds an item that is not disabled. If
       * it encounters either end of the list, it will stop and not wrap.
       * @private
       * @param {?} delta
       * @return {?}
       */


      _setActiveInDefaultMode(delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
      }
      /**
       * Sets the active item to the first enabled item starting at the index specified. If the
       * item is disabled, it will move in the fallbackDelta direction until it either
       * finds an enabled item or encounters the end of the list.
       * @private
       * @param {?} index
       * @param {?} fallbackDelta
       * @return {?}
       */


      _setActiveItemByIndex(index, fallbackDelta) {
        /** @type {?} */
        const items = this._getItemsArray();

        if (!items[index]) {
          return;
        }

        while (this._skipPredicateFn(items[index])) {
          index += fallbackDelta;

          if (!items[index]) {
            return;
          }
        }

        this.setActiveItem(index);
      }
      /**
       * Returns the items as an array.
       * @private
       * @return {?}
       */


      _getItemsArray() {
        return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    class ActiveDescendantKeyManager extends ListKeyManager {
      /**
       * @param {?} index
       * @return {?}
       */
      setActiveItem(index) {
        if (this.activeItem) {
          this.activeItem.setInactiveStyles();
        }

        super.setActiveItem(index);

        if (this.activeItem) {
          this.activeItem.setActiveStyles();
        }
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    class FocusKeyManager extends ListKeyManager {
      constructor() {
        super(...arguments);
        this._origin = 'program';
      }
      /**
       * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
       * @template THIS
       * @this {THIS}
       * @param {?} origin Focus origin to be used when focusing items.
       * @return {THIS}
       */


      setFocusOrigin(origin) {
        /** @type {?} */
        this._origin = origin;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * @param {?} item
       * @return {?}
       */


      setActiveItem(item) {
        super.setActiveItem(item);

        if (this.activeItem) {
          this.activeItem.focus(this._origin);
        }
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
    // Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
    // supported.

    /**
     * Utility for checking the interactivity of an element, such as whether is is focusable or
     * tabbable.
     */


    class InteractivityChecker {
      /**
       * @param {?} _platform
       */
      constructor(_platform) {
        this._platform = _platform;
      }
      /**
       * Gets whether an element is disabled.
       *
       * @param {?} element Element to be checked.
       * @return {?} Whether the element is disabled.
       */


      isDisabled(element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
      }
      /**
       * Gets whether an element is visible for the purposes of interactivity.
       *
       * This will capture states like `display: none` and `visibility: hidden`, but not things like
       * being clipped by an `overflow: hidden` parent or being outside the viewport.
       *
       * @param {?} element
       * @return {?} Whether the element is visible.
       */


      isVisible(element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
      }
      /**
       * Gets whether an element can be reached via Tab key.
       * Assumes that the element has already been checked with isFocusable.
       *
       * @param {?} element Element to be checked.
       * @return {?} Whether the element is tabbable.
       */


      isTabbable(element) {
        // Nothing is tabbable on the server 😎
        if (!this._platform.isBrowser) {
          return false;
        }
        /** @type {?} */


        const frameElement = getFrameElement(getWindow(element));

        if (frameElement) {
          /** @type {?} */
          const frameType = frameElement && frameElement.nodeName.toLowerCase(); // Frame elements inherit their tabindex onto all child elements.

          if (getTabIndexValue(frameElement) === -1) {
            return false;
          } // Webkit and Blink consider anything inside of an <object> element as non-tabbable.


          if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
            return false;
          } // Webkit and Blink disable tabbing to an element inside of an invisible frame.


          if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
            return false;
          }
        }
        /** @type {?} */


        let nodeName = element.nodeName.toLowerCase();
        /** @type {?} */

        let tabIndexValue = getTabIndexValue(element);

        if (element.hasAttribute('contenteditable')) {
          return tabIndexValue !== -1;
        }

        if (nodeName === 'iframe') {
          // The frames may be tabbable depending on content, but it's not possibly to reliably
          // investigate the content of the frames.
          return false;
        }

        if (nodeName === 'audio') {
          if (!element.hasAttribute('controls')) {
            // By default an <audio> element without the controls enabled is not tabbable.
            return false;
          } else if (this._platform.BLINK) {
            // In Blink <audio controls> elements are always tabbable.
            return true;
          }
        }

        if (nodeName === 'video') {
          if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
            // In Trident a <video> element without the controls enabled is not tabbable.
            return false;
          } else if (this._platform.BLINK || this._platform.FIREFOX) {
            // In Chrome and Firefox <video controls> elements are always tabbable.
            return true;
          }
        }

        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
          // In all Blink and WebKit based browsers <object> elements are never tabbable.
          return false;
        } // In iOS the browser only considers some specific elements as tabbable.


        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
          return false;
        }

        return element.tabIndex >= 0;
      }
      /**
       * Gets whether an element can be focused by the user.
       *
       * @param {?} element Element to be checked.
       * @return {?} Whether the element is focusable.
       */


      isFocusable(element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
      }

    }

    InteractivityChecker.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    InteractivityChecker.ctorParameters = () => [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
    }];
    /** @nocollapse */


    InteractivityChecker.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function InteractivityChecker_Factory() {
        return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
      },
      token: InteractivityChecker,
      providedIn: "root"
    });
    /**
     * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
     * the frameElement property is being accessed from a different host address, this property
     * should be accessed carefully.
     * @param {?} window
     * @return {?}
     */

    function getFrameElement(window) {
      try {
        return (
          /** @type {?} */
          window.frameElement
        );
      } catch (_a) {
        return null;
      }
    }
    /**
     * Checks whether the specified element has any geometry / rectangles.
     * @param {?} element
     * @return {?}
     */


    function hasGeometry(element) {
      // Use logic from jQuery to check for an invisible element.
      // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
      return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
    }
    /**
     * Gets whether an element's
     * @param {?} element
     * @return {?}
     */


    function isNativeFormElement(element) {
      /** @type {?} */
      let nodeName = element.nodeName.toLowerCase();
      return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
    }
    /**
     * Gets whether an element is an `<input type="hidden">`.
     * @param {?} element
     * @return {?}
     */


    function isHiddenInput(element) {
      return isInputElement(element) && element.type == 'hidden';
    }
    /**
     * Gets whether an element is an anchor that has an href attribute.
     * @param {?} element
     * @return {?}
     */


    function isAnchorWithHref(element) {
      return isAnchorElement(element) && element.hasAttribute('href');
    }
    /**
     * Gets whether an element is an input element.
     * @param {?} element
     * @return {?}
     */


    function isInputElement(element) {
      return element.nodeName.toLowerCase() == 'input';
    }
    /**
     * Gets whether an element is an anchor element.
     * @param {?} element
     * @return {?}
     */


    function isAnchorElement(element) {
      return element.nodeName.toLowerCase() == 'a';
    }
    /**
     * Gets whether an element has a valid tabindex.
     * @param {?} element
     * @return {?}
     */


    function hasValidTabIndex(element) {
      if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
      }
      /** @type {?} */


      let tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

      if (tabIndex == '-32768') {
        return false;
      }

      return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
    }
    /**
     * Returns the parsed tabindex from the element attributes instead of returning the
     * evaluated tabindex from the browsers defaults.
     * @param {?} element
     * @return {?}
     */


    function getTabIndexValue(element) {
      if (!hasValidTabIndex(element)) {
        return null;
      } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054

      /** @type {?} */


      const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
      return isNaN(tabIndex) ? -1 : tabIndex;
    }
    /**
     * Checks whether the specified element is potentially tabbable on iOS
     * @param {?} element
     * @return {?}
     */


    function isPotentiallyTabbableIOS(element) {
      /** @type {?} */
      let nodeName = element.nodeName.toLowerCase();
      /** @type {?} */

      let inputType = nodeName === 'input' &&
      /** @type {?} */
      element.type;
      return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
    }
    /**
     * Gets whether an element is potentially focusable without taking current visible/disabled state
     * into account.
     * @param {?} element
     * @return {?}
     */


    function isPotentiallyFocusable(element) {
      // Inputs are potentially focusable *unless* they're type="hidden".
      if (isHiddenInput(element)) {
        return false;
      }

      return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
    }
    /**
     * Gets the parent window of a DOM node with regards of being inside of an iframe.
     * @param {?} node
     * @return {?}
     */


    function getWindow(node) {
      // ownerDocument is null if `node` itself *is* a document.
      return node.ownerDocument && node.ownerDocument.defaultView || window;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class that allows for trapping focus within a DOM element.
     *
     * This class currently uses a relatively simple approach to focus trapping.
     * It assumes that the tab order is the same as DOM order, which is not necessarily true.
     * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
     */


    class FocusTrap {
      /**
       * @param {?} _element
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?=} deferAnchors
       */
      constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

        this.startAnchorListener =
        /**
        * @return {?}
        */
        () => this.focusLastTabbableElement();

        this.endAnchorListener =
        /**
        * @return {?}
        */
        () => this.focusFirstTabbableElement();

        this._enabled = true;

        if (!deferAnchors) {
          this.attachAnchors();
        }
      }
      /**
       * Whether the focus trap is active.
       * @return {?}
       */


      get enabled() {
        return this._enabled;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set enabled(value) {
        this._enabled = value;

        if (this._startAnchor && this._endAnchor) {
          this._toggleAnchorTabIndex(value, this._startAnchor);

          this._toggleAnchorTabIndex(value, this._endAnchor);
        }
      }
      /**
       * Destroys the focus trap by cleaning up the anchors.
       * @return {?}
       */


      destroy() {
        /** @type {?} */
        const startAnchor = this._startAnchor;
        /** @type {?} */

        const endAnchor = this._endAnchor;

        if (startAnchor) {
          startAnchor.removeEventListener('focus', this.startAnchorListener);

          if (startAnchor.parentNode) {
            startAnchor.parentNode.removeChild(startAnchor);
          }
        }

        if (endAnchor) {
          endAnchor.removeEventListener('focus', this.endAnchorListener);

          if (endAnchor.parentNode) {
            endAnchor.parentNode.removeChild(endAnchor);
          }
        }

        this._startAnchor = this._endAnchor = null;
      }
      /**
       * Inserts the anchors into the DOM. This is usually done automatically
       * in the constructor, but can be deferred for cases like directives with `*ngIf`.
       * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
       * if the target element isn't currently in the DOM.
       */


      attachAnchors() {
        // If we're not on the browser, there can be no focus to trap.
        if (this._hasAttached) {
          return true;
        }

        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          if (!this._startAnchor) {
            this._startAnchor = this._createAnchor();

            /** @type {?} */
            this._startAnchor.addEventListener('focus', this.startAnchorListener);
          }

          if (!this._endAnchor) {
            this._endAnchor = this._createAnchor();

            /** @type {?} */
            this._endAnchor.addEventListener('focus', this.endAnchorListener);
          }
        });

        if (this._element.parentNode) {
          this._element.parentNode.insertBefore(
          /** @type {?} */
          this._startAnchor, this._element);

          this._element.parentNode.insertBefore(
          /** @type {?} */
          this._endAnchor, this._element.nextSibling);

          this._hasAttached = true;
        }

        return this._hasAttached;
      }
      /**
       * Waits for the zone to stabilize, then either focuses the first element that the
       * user specified, or the first tabbable element.
       * @return {?} Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfuly.
       */


      focusInitialElementWhenReady() {
        return new Promise(
        /**
        * @param {?} resolve
        * @return {?}
        */
        resolve => {
          this._executeOnStable(
          /**
          * @return {?}
          */
          () => resolve(this.focusInitialElement()));
        });
      }
      /**
       * Waits for the zone to stabilize, then focuses
       * the first tabbable element within the focus trap region.
       * @return {?} Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfuly.
       */


      focusFirstTabbableElementWhenReady() {
        return new Promise(
        /**
        * @param {?} resolve
        * @return {?}
        */
        resolve => {
          this._executeOnStable(
          /**
          * @return {?}
          */
          () => resolve(this.focusFirstTabbableElement()));
        });
      }
      /**
       * Waits for the zone to stabilize, then focuses
       * the last tabbable element within the focus trap region.
       * @return {?} Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfuly.
       */


      focusLastTabbableElementWhenReady() {
        return new Promise(
        /**
        * @param {?} resolve
        * @return {?}
        */
        resolve => {
          this._executeOnStable(
          /**
          * @return {?}
          */
          () => resolve(this.focusLastTabbableElement()));
        });
      }
      /**
       * Get the specified boundary element of the trapped region.
       * @private
       * @param {?} bound The boundary to get (start or end of trapped region).
       * @return {?} The boundary element.
       */


      _getRegionBoundary(bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.

        /** @type {?} */
        let markers =
        /** @type {?} */
        this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

        for (let i = 0; i < markers.length; i++) {
          // @breaking-change 8.0.0
          if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
            console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
          } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
            console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
          }
        }

        if (bound == 'start') {
          return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }

        return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
      }
      /**
       * Focuses the element that should be focused when the focus trap is initialized.
       * @return {?} Whether focus was moved successfuly.
       */


      focusInitialElement() {
        // Contains the deprecated version of selector, for temporary backwards comparability.

        /** @type {?} */
        const redirectToElement =
        /** @type {?} */
        this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

        if (redirectToElement) {
          // @breaking-change 8.0.0
          if (redirectToElement.hasAttribute("cdk-focus-initial")) {
            console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
          } // Warn the consumer if the element they've pointed to
          // isn't focusable, when not in production mode.


          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !this._checker.isFocusable(redirectToElement)) {
            console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
          }

          redirectToElement.focus();
          return true;
        }

        return this.focusFirstTabbableElement();
      }
      /**
       * Focuses the first tabbable element within the focus trap region.
       * @return {?} Whether focus was moved successfuly.
       */


      focusFirstTabbableElement() {
        /** @type {?} */
        const redirectToElement = this._getRegionBoundary('start');

        if (redirectToElement) {
          redirectToElement.focus();
        }

        return !!redirectToElement;
      }
      /**
       * Focuses the last tabbable element within the focus trap region.
       * @return {?} Whether focus was moved successfuly.
       */


      focusLastTabbableElement() {
        /** @type {?} */
        const redirectToElement = this._getRegionBoundary('end');

        if (redirectToElement) {
          redirectToElement.focus();
        }

        return !!redirectToElement;
      }
      /**
       * Checks whether the focus trap has successfuly been attached.
       * @return {?}
       */


      hasAttached() {
        return this._hasAttached;
      }
      /**
       * Get the first tabbable element from a DOM subtree (inclusive).
       * @private
       * @param {?} root
       * @return {?}
       */


      _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
          return root;
        } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.

        /** @type {?} */


        let children = root.children || root.childNodes;

        for (let i = 0; i < children.length; i++) {
          /** @type {?} */
          let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(
          /** @type {?} */
          children[i]) : null;

          if (tabbableChild) {
            return tabbableChild;
          }
        }

        return null;
      }
      /**
       * Get the last tabbable element from a DOM subtree (inclusive).
       * @private
       * @param {?} root
       * @return {?}
       */


      _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
          return root;
        } // Iterate in reverse DOM order.

        /** @type {?} */


        let children = root.children || root.childNodes;

        for (let i = children.length - 1; i >= 0; i--) {
          /** @type {?} */
          let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(
          /** @type {?} */
          children[i]) : null;

          if (tabbableChild) {
            return tabbableChild;
          }
        }

        return null;
      }
      /**
       * Creates an anchor element.
       * @private
       * @return {?}
       */


      _createAnchor() {
        /** @type {?} */
        const anchor = this._document.createElement('div');

        this._toggleAnchorTabIndex(this._enabled, anchor);

        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        anchor.setAttribute('aria-hidden', 'true');
        return anchor;
      }
      /**
       * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
       * @private
       * @param {?} isEnabled Whether the focus trap is enabled.
       * @param {?} anchor Anchor on which to toggle the tabindex.
       * @return {?}
       */


      _toggleAnchorTabIndex(isEnabled, anchor) {
        // Remove the tabindex completely, rather than setting it to -1, because if the
        // element has a tabindex, the user might still hit it when navigating with the arrow keys.
        isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
      }
      /**
       * Executes a function when the zone is stable.
       * @private
       * @param {?} fn
       * @return {?}
       */


      _executeOnStable(fn) {
        if (this._ngZone.isStable) {
          fn();
        } else {
          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
        }
      }

    }
    /**
     * Factory that allows easy instantiation of focus traps.
     */


    class FocusTrapFactory {
      /**
       * @param {?} _checker
       * @param {?} _ngZone
       * @param {?} _document
       */
      constructor(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
      }
      /**
       * Creates a focus-trapped region around the given element.
       * @param {?} element The element around which focus will be trapped.
       * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
       *     manually by the user.
       * @return {?} The created focus trap instance.
       */


      create(element, deferCaptureElements = false) {
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
      }

    }

    FocusTrapFactory.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FocusTrapFactory.ctorParameters = () => [{
      type: InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
      }]
    }];
    /** @nocollapse */


    FocusTrapFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusTrapFactory_Factory() {
        return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
      },
      token: FocusTrapFactory,
      providedIn: "root"
    });
    /**
     * Directive for trapping focus within a region.
     */

    class CdkTrapFocus {
      /**
       * @param {?} _elementRef
       * @param {?} _focusTrapFactory
       * @param {?} _document
       */
      constructor(_elementRef, _focusTrapFactory, _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */

        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
      }
      /**
       * Whether the focus trap is active.
       * @return {?}
       */


      get enabled() {
        return this.focusTrap.enabled;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set enabled(value) {
        this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
      }
      /**
       * Whether the directive should automatially move focus into the trapped region upon
       * initialization and return focus to the previous activeElement upon destruction.
       * @return {?}
       */


      get autoCapture() {
        return this._autoCapture;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set autoCapture(value) {
        this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.

        if (this._previouslyFocusedElement) {
          this._previouslyFocusedElement.focus();

          this._previouslyFocusedElement = null;
        }
      }
      /**
       * @return {?}
       */


      ngAfterContentInit() {
        this.focusTrap.attachAnchors();

        if (this.autoCapture) {
          this._previouslyFocusedElement =
          /** @type {?} */
          this._document.activeElement;
          this.focusTrap.focusInitialElementWhenReady();
        }
      }
      /**
       * @return {?}
       */


      ngDoCheck() {
        if (!this.focusTrap.hasAttached()) {
          this.focusTrap.attachAnchors();
        }
      }

    }

    CdkTrapFocus.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkTrapFocus]',
        exportAs: 'cdkTrapFocus'
      }]
    }];
    /** @nocollapse */

    CdkTrapFocus.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: FocusTrapFactory
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
      }]
    }];

    CdkTrapFocus.propDecorators = {
      enabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTrapFocus']
      }],
      autoCapture: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTrapFocusAutoCapture']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    const LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
      providedIn: 'root',
      factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
      return null;
    }
    /**
     * Injection token that can be used to configure the default options for the LiveAnnouncer.
     * @type {?}
     */


    const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class LiveAnnouncer {
      /**
       * @param {?} elementToken
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?=} _defaultOptions
       */
      constructor(elementToken, _ngZone, _document, _defaultOptions) {
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.

        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
      }
      /**
       * @param {?} message
       * @param {...?} args
       * @return {?}
       */


      announce(message, ...args) {
        /** @type {?} */
        const defaultOptions = this._defaultOptions;
        /** @type {?} */

        let politeness;
        /** @type {?} */

        let duration;

        if (args.length === 1 && typeof args[0] === 'number') {
          duration = args[0];
        } else {
          [politeness, duration] = args;
        }

        this.clear();
        clearTimeout(this._previousTimeout);

        if (!politeness) {
          politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
        }

        if (duration == null && defaultOptions) {
          duration = defaultOptions.duration;
        } // TODO: ensure changing the politeness works on all environments we support.


        this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).


        return this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          return new Promise(
          /**
          * @param {?} resolve
          * @return {?}
          */
          resolve => {
            clearTimeout(this._previousTimeout);
            this._previousTimeout = setTimeout(
            /**
            * @return {?}
            */
            () => {
              this._liveElement.textContent = message;
              resolve();

              if (typeof duration === 'number') {
                this._previousTimeout = setTimeout(
                /**
                * @return {?}
                */
                () => this.clear(), duration);
              }
            }, 100);
          });
        });
      }
      /**
       * Clears the current text from the announcer element. Can be used to prevent
       * screen readers from reading the text out again while the user is going
       * through the page landmarks.
       * @return {?}
       */


      clear() {
        if (this._liveElement) {
          this._liveElement.textContent = '';
        }
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        clearTimeout(this._previousTimeout);

        if (this._liveElement && this._liveElement.parentNode) {
          this._liveElement.parentNode.removeChild(this._liveElement);

          this._liveElement =
          /** @type {?} */
          null;
        }
      }
      /**
       * @private
       * @return {?}
       */


      _createLiveElement() {
        /** @type {?} */
        const elementClass = 'cdk-live-announcer-element';
        /** @type {?} */

        const previousElements = this._document.getElementsByClassName(elementClass);
        /** @type {?} */


        const liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


        for (let i = 0; i < previousElements.length; i++) {
          /** @type {?} */
          previousElements[i].parentNode.removeChild(previousElements[i]);
        }

        liveEl.classList.add(elementClass);
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');

        this._document.body.appendChild(liveEl);

        return liveEl;
      }

    }

    LiveAnnouncer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    LiveAnnouncer.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
      }]
    }];
    /** @nocollapse */


    LiveAnnouncer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function LiveAnnouncer_Factory() {
        return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      },
      token: LiveAnnouncer,
      providedIn: "root"
    });
    /**
     * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
     * with a wider range of browsers and screen readers.
     */

    class CdkAriaLive {
      /**
       * @param {?} _elementRef
       * @param {?} _liveAnnouncer
       * @param {?} _contentObserver
       * @param {?} _ngZone
       */
      constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'off';
      }
      /**
       * The aria-live politeness level to use when announcing messages.
       * @return {?}
       */


      get politeness() {
        return this._politeness;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set politeness(value) {
        this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';

        if (this._politeness === 'off') {
          if (this._subscription) {
            this._subscription.unsubscribe();

            this._subscription = null;
          }
        } else if (!this._subscription) {
          this._subscription = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          () => {
            return this._contentObserver.observe(this._elementRef).subscribe(
            /**
            * @return {?}
            */
            () => {
              // Note that we use textContent here, rather than innerText, in order to avoid a reflow.

              /** @type {?} */
              const elementText = this._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
              // changes which we don't want to announce.

              if (elementText !== this._previousAnnouncedText) {
                this._liveAnnouncer.announce(elementText, this._politeness);

                this._previousAnnouncedText = elementText;
              }
            });
          });
        }
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        if (this._subscription) {
          this._subscription.unsubscribe();
        }
      }

    }

    CdkAriaLive.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkAriaLive]',
        exportAs: 'cdkAriaLive'
      }]
    }];
    /** @nocollapse */

    CdkAriaLive.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: LiveAnnouncer
    }, {
      type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }];

    CdkAriaLive.propDecorators = {
      politeness: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAriaLive']
      }]
    };
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentAnnouncer
     * @param {?} liveElement
     * @param {?} _document
     * @param {?} ngZone
     * @return {?}
     */

    function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentAnnouncer, liveElement, _document, ngZone) {
      return parentAnnouncer || new LiveAnnouncer(liveElement, ngZone, _document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    const LIVE_ANNOUNCER_PROVIDER = {
      // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
      provide: LiveAnnouncer,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), LiveAnnouncer], [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]],
      useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
    // that a value of around 650ms seems appropriate.

    /** @type {?} */

    const TOUCH_BUFFER_MS = 650;
    /**
     * Event listener options that enable capturing and also
     * mark the listener as passive if the browser supports it.
     * @type {?}
     */

    const captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["normalizePassiveListenerOptions"])({
      passive: true,
      capture: true
    });
    /**
     * Monitors mouse and keyboard events to determine the cause of focus events.
     */

    class FocusMonitor {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       */
      constructor(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */

        this._origin = null;
        /**
         * Whether the window has just been focused.
         */

        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */

        this._elementInfo = new Map();
        /**
         * The number of elements currently being monitored.
         */

        this._monitoredElementCount = 0;
        /**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */

        this._documentKeydownListener =
        /**
        * @return {?}
        */
        () => {
          // On keydown record the origin and clear any touch event that may be in progress.
          this._lastTouchTarget = null;

          this._setOriginForCurrentEventQueue('keyboard');
        };
        /**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._documentMousedownListener =
        /**
        * @return {?}
        */
        () => {
          // On mousedown record the origin only if there is not touch
          // target, since a mousedown can happen as a result of a touch event.
          if (!this._lastTouchTarget) {
            this._setOriginForCurrentEventQueue('mouse');
          }
        };
        /**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._documentTouchstartListener =
        /**
        * @param {?} event
        * @return {?}
        */
        event => {
          // When the touchstart event fires the focus event is not yet in the event queue. This means
          // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
          // see if a focus happens.
          if (this._touchTimeoutId != null) {
            clearTimeout(this._touchTimeoutId);
          } // Since this listener is bound on the `document` level, any events coming from the shadow DOM
          // will have their `target` set to the shadow root. If available, use `composedPath` to
          // figure out the event target.


          this._lastTouchTarget = event.composedPath ? event.composedPath()[0] : event.target;
          this._touchTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          () => this._lastTouchTarget = null, TOUCH_BUFFER_MS);
        };
        /**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */


        this._windowFocusListener =
        /**
        * @return {?}
        */
        () => {
          // Make a note of when the window regains focus, so we can
          // restore the origin info for the focused element.
          this._windowFocused = true;
          this._windowFocusTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          () => this._windowFocused = false);
        };
      }
      /**
       * @param {?} element
       * @param {?=} checkChildren
       * @return {?}
       */


      monitor(element, checkChildren = false) {
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        /** @type {?} */


        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element); // Check if we're already monitoring this element.

        if (this._elementInfo.has(nativeElement)) {
          /** @type {?} */
          let cachedInfo = this._elementInfo.get(nativeElement);

          /** @type {?} */
          cachedInfo.checkChildren = checkChildren;
          return (
            /** @type {?} */
            cachedInfo.subject.asObservable()
          );
        } // Create monitored element info.

        /** @type {?} */


        let info = {
          unlisten:
          /**
          * @return {?}
          */
          () => {},
          checkChildren: checkChildren,
          subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
        };

        this._elementInfo.set(nativeElement, info);

        this._incrementMonitoredElementCount(); // Start listening. We need to listen in capture phase since focus events don't bubble.

        /** @type {?} */


        let focusListener =
        /**
        * @param {?} event
        * @return {?}
        */
        event => this._onFocus(event, nativeElement);
        /** @type {?} */


        let blurListener =
        /**
        * @param {?} event
        * @return {?}
        */
        event => this._onBlur(event, nativeElement);

        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          nativeElement.addEventListener('focus', focusListener, true);
          nativeElement.addEventListener('blur', blurListener, true);
        }); // Create an unlisten function for later.


        info.unlisten =
        /**
        * @return {?}
        */
        () => {
          nativeElement.removeEventListener('focus', focusListener, true);
          nativeElement.removeEventListener('blur', blurListener, true);
        };

        return info.subject.asObservable();
      }
      /**
       * @param {?} element
       * @return {?}
       */


      stopMonitoring(element) {
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);
        /** @type {?} */

        const elementInfo = this._elementInfo.get(nativeElement);

        if (elementInfo) {
          elementInfo.unlisten();
          elementInfo.subject.complete();

          this._setClasses(nativeElement);

          this._elementInfo.delete(nativeElement);

          this._decrementMonitoredElementCount();
        }
      }
      /**
       * @param {?} element
       * @param {?} origin
       * @param {?=} options
       * @return {?}
       */


      focusVia(element, origin, options) {
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);

        this._setOriginForCurrentEventQueue(origin); // `focus` isn't available on the server


        if (typeof nativeElement.focus === 'function') {
          // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.

          /** @type {?} */
          nativeElement.focus(options);
        }
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._elementInfo.forEach(
        /**
        * @param {?} _info
        * @param {?} element
        * @return {?}
        */
        (_info, element) => this.stopMonitoring(element));
      }
      /**
       * @private
       * @param {?} element
       * @param {?} className
       * @param {?} shouldSet
       * @return {?}
       */


      _toggleClass(element, className, shouldSet) {
        if (shouldSet) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      }
      /**
       * Sets the focus classes on the element based on the given focus origin.
       * @private
       * @param {?} element The element to update the classes on.
       * @param {?=} origin The focus origin.
       * @return {?}
       */


      _setClasses(element, origin) {
        /** @type {?} */
        const elementInfo = this._elementInfo.get(element);

        if (elementInfo) {
          this._toggleClass(element, 'cdk-focused', !!origin);

          this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

          this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

          this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

          this._toggleClass(element, 'cdk-program-focused', origin === 'program');
        }
      }
      /**
       * Sets the origin and schedules an async function to clear it at the end of the event queue.
       * @private
       * @param {?} origin The origin to set.
       * @return {?}
       */


      _setOriginForCurrentEventQueue(origin) {
        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          this._origin = origin; // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
          // tick after the interaction event fired. To ensure the focus origin is always correct,
          // the focus origin will be determined at the beginning of the next tick.

          this._originTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          () => this._origin = null, 1);
        });
      }
      /**
       * Checks whether the given focus event was caused by a touchstart event.
       * @private
       * @param {?} event The focus event to check.
       * @return {?} Whether the event was caused by a touch.
       */


      _wasCausedByTouch(event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, 'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.

        /** @type {?} */
        let focusTarget = event.target;
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node && (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
      }
      /**
       * Handles focus events on a registered element.
       * @private
       * @param {?} event The focus event.
       * @param {?} element The monitored element.
       * @return {?}
       */


      _onFocus(event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.

        /** @type {?} */
        const elementInfo = this._elementInfo.get(element);

        if (!elementInfo || !elementInfo.checkChildren && element !== event.target) {
          return;
        } // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.

        /** @type {?} */


        let origin = this._origin;

        if (!origin) {
          if (this._windowFocused && this._lastFocusOrigin) {
            origin = this._lastFocusOrigin;
          } else if (this._wasCausedByTouch(event)) {
            origin = 'touch';
          } else {
            origin = 'program';
          }
        }

        this._setClasses(element, origin);

        this._emitOrigin(elementInfo.subject, origin);

        this._lastFocusOrigin = origin;
      }
      /**
       * Handles blur events on a registered element.
       * @param {?} event The blur event.
       * @param {?} element The monitored element.
       * @return {?}
       */


      _onBlur(event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.

        /** @type {?} */
        const elementInfo = this._elementInfo.get(element);

        if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
          return;
        }

        this._setClasses(element);

        this._emitOrigin(elementInfo.subject, null);
      }
      /**
       * @private
       * @param {?} subject
       * @param {?} origin
       * @return {?}
       */


      _emitOrigin(subject, origin) {
        this._ngZone.run(
        /**
        * @return {?}
        */
        () => subject.next(origin));
      }
      /**
       * @private
       * @return {?}
       */


      _incrementMonitoredElementCount() {
        // Register global listeners when first element is monitored.
        if (++this._monitoredElementCount == 1 && this._platform.isBrowser) {
          // Note: we listen to events in the capture phase so we
          // can detect them even if the user stops propagation.
          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          () => {
            document.addEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
            document.addEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
            document.addEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
            window.addEventListener('focus', this._windowFocusListener);
          });
        }
      }
      /**
       * @private
       * @return {?}
       */


      _decrementMonitoredElementCount() {
        // Unregister global listeners when last element is unmonitored.
        if (! --this._monitoredElementCount) {
          document.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
          document.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
          document.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
          window.removeEventListener('focus', this._windowFocusListener); // Clear timeouts for all potentially pending timeouts to prevent the leaks.

          clearTimeout(this._windowFocusTimeoutId);
          clearTimeout(this._touchTimeoutId);
          clearTimeout(this._originTimeoutId);
        }
      }

    }

    FocusMonitor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FocusMonitor.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
    }];
    /** @nocollapse */


    FocusMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FocusMonitor_Factory() {
        return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
      },
      token: FocusMonitor,
      providedIn: "root"
    });
    /**
     * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
     * programmatically) and adds corresponding classes to the element.
     *
     * There are two variants of this directive:
     * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
     *    focused.
     * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
     */

    class CdkMonitorFocus {
      /**
       * @param {?} _elementRef
       * @param {?} _focusMonitor
       */
      constructor(_elementRef, _focusMonitor) {
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        origin => this.cdkFocusChange.emit(origin));
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);

        this._monitorSubscription.unsubscribe();
      }

    }

    CdkMonitorFocus.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
      }]
    }];
    /** @nocollapse */

    CdkMonitorFocus.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: FocusMonitor
    }];

    CdkMonitorFocus.propDecorators = {
      cdkFocusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentDispatcher
     * @param {?} ngZone
     * @param {?} platform
     * @return {?}
     */

    function FOCUS_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
      return parentDispatcher || new FocusMonitor(ngZone, platform);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    const FOCUS_MONITOR_PROVIDER = {
      // If there is already a FocusMonitor available, use that. Otherwise, provide a new one.
      provide: FocusMonitor,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), FocusMonitor], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]],
      useFactory: FOCUS_MONITOR_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Screenreaders will often fire fake mousedown events when a focusable element
     * is activated using the keyboard. We can typically distinguish between these faked
     * mousedown events and real mousedown events using the "buttons" property. While
     * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
     * the left mouse button), faked mousedowns will usually set the property value to 0.
     * @param {?} event
     * @return {?}
     */

    function isFakeMousedownFromScreenReader(event) {
      return event.buttons === 0;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    class A11yModule {}

    A11yModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
        declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
        exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=a11y.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/bidi.js":
  /*!***************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/bidi.js ***!
    \***************************************************/

  /*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */

  /***/
  function node_modulesAngularCdkEsm2015BidiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Directionality", function () {
      return Directionality;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
      return DIR_DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dir", function () {
      return Dir;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
      return BidiModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DIR_DOCUMENT_FACTORY;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to inject the document into Directionality.
     * This is used so that the value can be faked in tests.
     *
     * We can't use the real document in tests because changing the real `dir` causes geometry-based
     * tests in Safari to fail.
     *
     * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
     * themselves use things like `querySelector` in test code.
     *
     * This token is defined in a separate file from Directionality as a workaround for
     * https://github.com/angular/angular/issues/22559
     *
     * \@docs-private
     * @type {?}
     */


    const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
      providedIn: 'root',
      factory: DIR_DOCUMENT_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function DIR_DOCUMENT_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The directionality (LTR / RTL) context for the application (or a subtree of it).
     * Exposes the current direction and a stream of direction changes.
     */


    class Directionality {
      /**
       * @param {?=} _document
       */
      constructor(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (_document) {
          // TODO: handle 'auto' value -
          // We still need to account for dir="auto".
          // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
          // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now

          /** @type {?} */
          const bodyDir = _document.body ? _document.body.dir : null;
          /** @type {?} */

          const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          /** @type {?} */

          const value = bodyDir || htmlDir;
          this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
        }
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this.change.complete();
      }

    }

    Directionality.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    Directionality.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [DIR_DOCUMENT]
      }]
    }];
    /** @nocollapse */


    Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function Directionality_Factory() {
        return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DIR_DOCUMENT, 8));
      },
      token: Directionality,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to listen for changes of direction of part of the DOM.
     *
     * Provides itself as Directionality such that descendant directives only need to ever inject
     * Directionality to get the closest direction.
     */

    class Dir {
      constructor() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */

        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * \@docs-private
       * @return {?}
       */


      get dir() {
        return this._dir;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set dir(value) {
        /** @type {?} */
        const old = this._dir;
        /** @type {?} */

        const normalizedValue = value ? value.toLowerCase() : value;
        this._rawDir = value;
        this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

        if (old !== this._dir && this._isInitialized) {
          this.change.emit(this._dir);
        }
      }
      /**
       * Current layout direction of the element.
       * @return {?}
       */


      get value() {
        return this.dir;
      }
      /**
       * Initialize once default value has been set.
       * @return {?}
       */


      ngAfterContentInit() {
        this._isInitialized = true;
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this.change.complete();
      }

    }

    Dir.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[dir]',
        providers: [{
          provide: Directionality,
          useExisting: Dir
        }],
        host: {
          '[attr.dir]': '_rawDir'
        },
        exportAs: 'dir'
      }]
    }];
    Dir.propDecorators = {
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['dirChange']
      }],
      dir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class BidiModule {}

    BidiModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        exports: [Dir],
        declarations: [Dir]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=bidi.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/cdk.js":
  /*!**************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/cdk.js ***!
    \**************************************************/

  /*! exports provided: VERSION */

  /***/
  function node_modulesAngularCdkEsm2015CdkJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Current version of the Angular Component Development Kit.
     * @type {?}
     */


    const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=cdk.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/coercion.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/coercion.js ***!
    \*******************************************************/

  /*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */

  /***/
  function node_modulesAngularCdkEsm2015CoercionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
      return coerceBooleanProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
      return coerceNumberProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
      return _isNumberValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
      return coerceArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
      return coerceCssPixelValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
      return coerceElement;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Coerces a data-bound value (typically a string) to a boolean.
     * @param {?} value
     * @return {?}
     */


    function coerceBooleanProperty(value) {
      return value != null && "".concat(value) !== 'false';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @param {?=} fallbackValue
     * @return {?}
     */


    function coerceNumberProperty(value, fallbackValue = 0) {
      return _isNumberValue(value) ? Number(value) : fallbackValue;
    }
    /**
     * Whether the provided value is considered a number.
     * \@docs-private
     * @param {?} value
     * @return {?}
     */


    function _isNumberValue(value) {
      // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
      // and other non-number values as NaN, where Number just uses 0) but it considers the string
      // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
      return !isNaN(parseFloat(
      /** @type {?} */
      value)) && !isNaN(Number(value));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wraps the provided value in an array, unless the provided value is an array.
     * @template T
     * @param {?} value
     * @return {?}
     */


    function coerceArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Coerces a value to a CSS pixel value.
     * @param {?} value
     * @return {?}
     */


    function coerceCssPixelValue(value) {
      if (value == null) {
        return '';
      }

      return typeof value === 'string' ? value : "".concat(value, "px");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Coerces an ElementRef or an Element into an element.
     * Useful for APIs that can accept either a ref or the native element itself.
     * @template T
     * @param {?} elementOrRef
     * @return {?}
     */


    function coerceElement(elementOrRef) {
      return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=coercion.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/esm2015/collections.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/collections.js ***!
    \**********************************************************/

  /*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, isDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */

  /***/
  function node_modulesAngularCdkEsm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
      return UniqueSelectionDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
      return ArrayDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
      return isDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return DataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
      return getMultipleValuesInSingleSelectionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
      return SelectionModel;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     * @template T
     */


    class DataSource {}
    /**
     * Checks whether an object is a data source.
     * @param {?} value
     * @return {?}
     */


    function isDataSource(value) {
      // Check if the value is a DataSource by observing if it has a connect function. Cannot
      // be checked as an `instanceof DataSource` since people could create their own sources
      // that match the interface, but don't extend DataSource.
      return value && typeof value.connect === 'function';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * DataSource wrapper for a native array.
     * @template T
     */


    class ArrayDataSource extends DataSource {
      /**
       * @param {?} _data
       */
      constructor(_data) {
        super();
        this._data = _data;
      }
      /**
       * @return {?}
       */


      connect() {
        return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
      }
      /**
       * @return {?}
       */


      disconnect() {}

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to be used to power selecting one or more options from a list.
     * @template T
     */


    class SelectionModel {
      /**
       * @param {?=} _multiple
       * @param {?=} initiallySelectedValues
       * @param {?=} _emitChanges
       */
      constructor(_multiple = false, initiallySelectedValues, _emitChanges = true) {
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */

        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */

        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */

        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */

        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * Event emitted when the value has changed.
         * @deprecated Use `changed` instead.
         * \@breaking-change 8.0.0 To be changed to `changed`
         */

        this.onChange = this.changed;

        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            value => this._markSelected(value));
          } else {
            this._markSelected(initiallySelectedValues[0]);
          } // Clear the array in order to avoid firing the change event for preselected values.


          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selected values.
       * @return {?}
       */


      get selected() {
        if (!this._selected) {
          this._selected = Array.from(this._selection.values());
        }

        return this._selected;
      }
      /**
       * Selects a value or an array of values.
       * @param {...?} values
       * @return {?}
       */


      select(...values) {
        this._verifyValueAssignment(values);

        values.forEach(
        /**
        * @param {?} value
        * @return {?}
        */
        value => this._markSelected(value));

        this._emitChangeEvent();
      }
      /**
       * Deselects a value or an array of values.
       * @param {...?} values
       * @return {?}
       */


      deselect(...values) {
        this._verifyValueAssignment(values);

        values.forEach(
        /**
        * @param {?} value
        * @return {?}
        */
        value => this._unmarkSelected(value));

        this._emitChangeEvent();
      }
      /**
       * Toggles a value between selected and deselected.
       * @param {?} value
       * @return {?}
       */


      toggle(value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
      }
      /**
       * Clears all of the selected values.
       * @return {?}
       */


      clear() {
        this._unmarkAll();

        this._emitChangeEvent();
      }
      /**
       * Determines whether a value is selected.
       * @param {?} value
       * @return {?}
       */


      isSelected(value) {
        return this._selection.has(value);
      }
      /**
       * Determines whether the model does not have a value.
       * @return {?}
       */


      isEmpty() {
        return this._selection.size === 0;
      }
      /**
       * Determines whether the model has a value.
       * @return {?}
       */


      hasValue() {
        return !this.isEmpty();
      }
      /**
       * Sorts the selected values based on a predicate function.
       * @param {?=} predicate
       * @return {?}
       */


      sort(predicate) {
        if (this._multiple && this.selected) {
          /** @type {?} */
          this._selected.sort(predicate);
        }
      }
      /**
       * Gets whether multiple values can be selected.
       * @return {?}
       */


      isMultipleSelection() {
        return this._multiple;
      }
      /**
       * Emits a change event and clears the records of selected and deselected values.
       * @private
       * @return {?}
       */


      _emitChangeEvent() {
        // Clear the selected values so they can be re-cached.
        this._selected = null;

        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
          this.changed.next({
            source: this,
            added: this._selectedToEmit,
            removed: this._deselectedToEmit
          });
          this._deselectedToEmit = [];
          this._selectedToEmit = [];
        }
      }
      /**
       * Selects a value.
       * @private
       * @param {?} value
       * @return {?}
       */


      _markSelected(value) {
        if (!this.isSelected(value)) {
          if (!this._multiple) {
            this._unmarkAll();
          }

          this._selection.add(value);

          if (this._emitChanges) {
            this._selectedToEmit.push(value);
          }
        }
      }
      /**
       * Deselects a value.
       * @private
       * @param {?} value
       * @return {?}
       */


      _unmarkSelected(value) {
        if (this.isSelected(value)) {
          this._selection.delete(value);

          if (this._emitChanges) {
            this._deselectedToEmit.push(value);
          }
        }
      }
      /**
       * Clears out the selected values.
       * @private
       * @return {?}
       */


      _unmarkAll() {
        if (!this.isEmpty()) {
          this._selection.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          value => this._unmarkSelected(value));
        }
      }
      /**
       * Verifies the value assignment and throws an error if the specified value array is
       * including multiple values while the selection model is not supporting multiple values.
       * @private
       * @param {?} values
       * @return {?}
       */


      _verifyValueAssignment(values) {
        if (values.length > 1 && !this._multiple) {
          throw getMultipleValuesInSingleSelectionError();
        }
      }

    }
    /**
     * Returns an error that reports that multiple values are passed into a selection model
     * with a single value.
     * \@docs-private
     * @return {?}
     */


    function getMultipleValuesInSingleSelectionError() {
      return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to coordinate unique selection based on name.
     * Intended to be consumed as an Angular service.
     * This service is needed because native radio change events are only fired on the item currently
     * being selected, and we still need to uncheck the previous selection.
     *
     * This service does not *store* any IDs and names because they may change at any time, so it is
     * less error-prone if they are simply passed through when the events occur.
     */


    class UniqueSelectionDispatcher {
      constructor() {
        this._listeners = [];
      }
      /**
       * Notify other items that selection for the given name has been set.
       * @param {?} id ID of the item.
       * @param {?} name Name of the item.
       * @return {?}
       */


      notify(id, name) {
        for (let listener of this._listeners) {
          listener(id, name);
        }
      }
      /**
       * Listen for future changes to item selection.
       * @param {?} listener
       * @return {?} Function used to deregister listener
       */


      listen(listener) {
        this._listeners.push(listener);

        return (
          /**
          * @return {?}
          */
          () => {
            this._listeners = this._listeners.filter(
            /**
            * @param {?} registered
            * @return {?}
            */
            registered => {
              return listener !== registered;
            });
          }
        );
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._listeners = [];
      }

    }

    UniqueSelectionDispatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function UniqueSelectionDispatcher_Factory() {
        return new UniqueSelectionDispatcher();
      },
      token: UniqueSelectionDispatcher,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=collections.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/keycodes.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/keycodes.js ***!
    \*******************************************************/

  /*! exports provided: MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CONTROL, ALT, PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, PLUS_SIGN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, QUESTION_MARK, AT_SIGN, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, CONTEXT_MENU, NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_MULTIPLY, NUMPAD_PLUS, NUMPAD_MINUS, NUMPAD_PERIOD, NUMPAD_DIVIDE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUM_LOCK, SCROLL_LOCK, FIRST_MEDIA, FF_MINUS, MUTE, VOLUME_DOWN, VOLUME_UP, FF_MUTE, FF_VOLUME_DOWN, LAST_MEDIA, FF_VOLUME_UP, SEMICOLON, EQUALS, COMMA, DASH, SLASH, APOSTROPHE, TILDE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, SINGLE_QUOTE, MAC_META, hasModifierKey */

  /***/
  function node_modulesAngularCdkEsm2015KeycodesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function () {
      return MAC_ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSPACE", function () {
      return BACKSPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TAB", function () {
      return TAB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function () {
      return NUM_CENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENTER", function () {
      return ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHIFT", function () {
      return SHIFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTROL", function () {
      return CONTROL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALT", function () {
      return ALT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
      return PAUSE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function () {
      return CAPS_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ESCAPE", function () {
      return ESCAPE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPACE", function () {
      return SPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_UP", function () {
      return PAGE_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function () {
      return PAGE_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "END", function () {
      return END;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOME", function () {
      return HOME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function () {
      return LEFT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UP_ARROW", function () {
      return UP_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function () {
      return RIGHT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function () {
      return DOWN_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function () {
      return PLUS_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function () {
      return PRINT_SCREEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INSERT", function () {
      return INSERT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE", function () {
      return DELETE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZERO", function () {
      return ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ONE", function () {
      return ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TWO", function () {
      return TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "THREE", function () {
      return THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOUR", function () {
      return FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIVE", function () {
      return FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIX", function () {
      return SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEVEN", function () {
      return SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EIGHT", function () {
      return EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NINE", function () {
      return NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function () {
      return FF_SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function () {
      return FF_EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function () {
      return QUESTION_MARK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AT_SIGN", function () {
      return AT_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A", function () {
      return A;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "B", function () {
      return B;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C", function () {
      return C;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "D", function () {
      return D;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "E", function () {
      return E;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F", function () {
      return F;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "G", function () {
      return G;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "H", function () {
      return H;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "I", function () {
      return I;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "J", function () {
      return J;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "K", function () {
      return K;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "L", function () {
      return L;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "M", function () {
      return M;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "N", function () {
      return N;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "O", function () {
      return O;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P", function () {
      return P;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Q", function () {
      return Q;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "R", function () {
      return R;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return S;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "T", function () {
      return T;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "U", function () {
      return U;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "V", function () {
      return V;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "W", function () {
      return W;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "X", function () {
      return X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Y", function () {
      return Y;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Z", function () {
      return Z;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "META", function () {
      return META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function () {
      return MAC_WK_CMD_LEFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function () {
      return MAC_WK_CMD_RIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function () {
      return CONTEXT_MENU;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function () {
      return NUMPAD_ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function () {
      return NUMPAD_ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function () {
      return NUMPAD_TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function () {
      return NUMPAD_THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function () {
      return NUMPAD_FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function () {
      return NUMPAD_FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function () {
      return NUMPAD_SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function () {
      return NUMPAD_SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function () {
      return NUMPAD_EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function () {
      return NUMPAD_NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function () {
      return NUMPAD_MULTIPLY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function () {
      return NUMPAD_PLUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function () {
      return NUMPAD_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function () {
      return NUMPAD_PERIOD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function () {
      return NUMPAD_DIVIDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F1", function () {
      return F1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F2", function () {
      return F2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F3", function () {
      return F3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F4", function () {
      return F4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F5", function () {
      return F5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F6", function () {
      return F6;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F7", function () {
      return F7;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F8", function () {
      return F8;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F9", function () {
      return F9;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F10", function () {
      return F10;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F11", function () {
      return F11;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F12", function () {
      return F12;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function () {
      return NUM_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function () {
      return SCROLL_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function () {
      return FIRST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MINUS", function () {
      return FF_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MUTE", function () {
      return MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function () {
      return VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function () {
      return VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MUTE", function () {
      return FF_MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function () {
      return FF_VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function () {
      return LAST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function () {
      return FF_VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEMICOLON", function () {
      return SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EQUALS", function () {
      return EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMMA", function () {
      return COMMA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DASH", function () {
      return DASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SLASH", function () {
      return SLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function () {
      return APOSTROPHE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TILDE", function () {
      return TILDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function () {
      return OPEN_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSLASH", function () {
      return BACKSLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function () {
      return CLOSE_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function () {
      return SINGLE_QUOTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_META", function () {
      return MAC_META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasModifierKey", function () {
      return hasModifierKey;
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    const MAC_ENTER = 3;
    /** @type {?} */

    const BACKSPACE = 8;
    /** @type {?} */

    const TAB = 9;
    /** @type {?} */

    const NUM_CENTER = 12;
    /** @type {?} */

    const ENTER = 13;
    /** @type {?} */

    const SHIFT = 16;
    /** @type {?} */

    const CONTROL = 17;
    /** @type {?} */

    const ALT = 18;
    /** @type {?} */

    const PAUSE = 19;
    /** @type {?} */

    const CAPS_LOCK = 20;
    /** @type {?} */

    const ESCAPE = 27;
    /** @type {?} */

    const SPACE = 32;
    /** @type {?} */

    const PAGE_UP = 33;
    /** @type {?} */

    const PAGE_DOWN = 34;
    /** @type {?} */

    const END = 35;
    /** @type {?} */

    const HOME = 36;
    /** @type {?} */

    const LEFT_ARROW = 37;
    /** @type {?} */

    const UP_ARROW = 38;
    /** @type {?} */

    const RIGHT_ARROW = 39;
    /** @type {?} */

    const DOWN_ARROW = 40;
    /** @type {?} */

    const PLUS_SIGN = 43;
    /** @type {?} */

    const PRINT_SCREEN = 44;
    /** @type {?} */

    const INSERT = 45;
    /** @type {?} */

    const DELETE = 46;
    /** @type {?} */

    const ZERO = 48;
    /** @type {?} */

    const ONE = 49;
    /** @type {?} */

    const TWO = 50;
    /** @type {?} */

    const THREE = 51;
    /** @type {?} */

    const FOUR = 52;
    /** @type {?} */

    const FIVE = 53;
    /** @type {?} */

    const SIX = 54;
    /** @type {?} */

    const SEVEN = 55;
    /** @type {?} */

    const EIGHT = 56;
    /** @type {?} */

    const NINE = 57;
    /** @type {?} */

    const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

    /** @type {?} */

    const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

    /** @type {?} */

    const QUESTION_MARK = 63;
    /** @type {?} */

    const AT_SIGN = 64;
    /** @type {?} */

    const A = 65;
    /** @type {?} */

    const B = 66;
    /** @type {?} */

    const C = 67;
    /** @type {?} */

    const D = 68;
    /** @type {?} */

    const E = 69;
    /** @type {?} */

    const F = 70;
    /** @type {?} */

    const G = 71;
    /** @type {?} */

    const H = 72;
    /** @type {?} */

    const I = 73;
    /** @type {?} */

    const J = 74;
    /** @type {?} */

    const K = 75;
    /** @type {?} */

    const L = 76;
    /** @type {?} */

    const M = 77;
    /** @type {?} */

    const N = 78;
    /** @type {?} */

    const O = 79;
    /** @type {?} */

    const P = 80;
    /** @type {?} */

    const Q = 81;
    /** @type {?} */

    const R = 82;
    /** @type {?} */

    const S = 83;
    /** @type {?} */

    const T = 84;
    /** @type {?} */

    const U = 85;
    /** @type {?} */

    const V = 86;
    /** @type {?} */

    const W = 87;
    /** @type {?} */

    const X = 88;
    /** @type {?} */

    const Y = 89;
    /** @type {?} */

    const Z = 90;
    /** @type {?} */

    const META = 91; // WIN_KEY_LEFT

    /** @type {?} */

    const MAC_WK_CMD_LEFT = 91;
    /** @type {?} */

    const MAC_WK_CMD_RIGHT = 93;
    /** @type {?} */

    const CONTEXT_MENU = 93;
    /** @type {?} */

    const NUMPAD_ZERO = 96;
    /** @type {?} */

    const NUMPAD_ONE = 97;
    /** @type {?} */

    const NUMPAD_TWO = 98;
    /** @type {?} */

    const NUMPAD_THREE = 99;
    /** @type {?} */

    const NUMPAD_FOUR = 100;
    /** @type {?} */

    const NUMPAD_FIVE = 101;
    /** @type {?} */

    const NUMPAD_SIX = 102;
    /** @type {?} */

    const NUMPAD_SEVEN = 103;
    /** @type {?} */

    const NUMPAD_EIGHT = 104;
    /** @type {?} */

    const NUMPAD_NINE = 105;
    /** @type {?} */

    const NUMPAD_MULTIPLY = 106;
    /** @type {?} */

    const NUMPAD_PLUS = 107;
    /** @type {?} */

    const NUMPAD_MINUS = 109;
    /** @type {?} */

    const NUMPAD_PERIOD = 110;
    /** @type {?} */

    const NUMPAD_DIVIDE = 111;
    /** @type {?} */

    const F1 = 112;
    /** @type {?} */

    const F2 = 113;
    /** @type {?} */

    const F3 = 114;
    /** @type {?} */

    const F4 = 115;
    /** @type {?} */

    const F5 = 116;
    /** @type {?} */

    const F6 = 117;
    /** @type {?} */

    const F7 = 118;
    /** @type {?} */

    const F8 = 119;
    /** @type {?} */

    const F9 = 120;
    /** @type {?} */

    const F10 = 121;
    /** @type {?} */

    const F11 = 122;
    /** @type {?} */

    const F12 = 123;
    /** @type {?} */

    const NUM_LOCK = 144;
    /** @type {?} */

    const SCROLL_LOCK = 145;
    /** @type {?} */

    const FIRST_MEDIA = 166;
    /** @type {?} */

    const FF_MINUS = 173;
    /** @type {?} */

    const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

    /** @type {?} */

    const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

    /** @type {?} */

    const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

    /** @type {?} */

    const FF_MUTE = 181;
    /** @type {?} */

    const FF_VOLUME_DOWN = 182;
    /** @type {?} */

    const LAST_MEDIA = 183;
    /** @type {?} */

    const FF_VOLUME_UP = 183;
    /** @type {?} */

    const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

    /** @type {?} */

    const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

    /** @type {?} */

    const COMMA = 188;
    /** @type {?} */

    const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

    /** @type {?} */

    const SLASH = 191;
    /** @type {?} */

    const APOSTROPHE = 192;
    /** @type {?} */

    const TILDE = 192;
    /** @type {?} */

    const OPEN_SQUARE_BRACKET = 219;
    /** @type {?} */

    const BACKSLASH = 220;
    /** @type {?} */

    const CLOSE_SQUARE_BRACKET = 221;
    /** @type {?} */

    const SINGLE_QUOTE = 222;
    /** @type {?} */

    const MAC_META = 224;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks whether a modifier key is pressed.
     * @param {?} event Event to be checked.
     * @param {...?} modifiers
     * @return {?}
     */

    function hasModifierKey(event, ...modifiers) {
      if (modifiers.length) {
        return modifiers.some(
        /**
        * @param {?} modifier
        * @return {?}
        */
        modifier => event[modifier]);
      }

      return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=keycodes.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/esm2015/observers.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/observers.js ***!
    \********************************************************/

  /*! exports provided: MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule */

  /***/
  function node_modulesAngularCdkEsm2015ObserversJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function () {
      return MutationObserverFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentObserver", function () {
      return ContentObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function () {
      return CdkObserveContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObserversModule", function () {
      return ObserversModule;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
     * \@docs-private
     */


    class MutationObserverFactory {
      /**
       * @param {?} callback
       * @return {?}
       */
      create(callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
      }

    }

    MutationObserverFactory.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MutationObserverFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MutationObserverFactory_Factory() {
        return new MutationObserverFactory();
      },
      token: MutationObserverFactory,
      providedIn: "root"
    });
    /**
     * An injectable service that allows watching elements for changes to their content.
     */

    class ContentObserver {
      /**
       * @param {?} _mutationObserverFactory
       */
      constructor(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */

        this._observedElements = new Map();
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._observedElements.forEach(
        /**
        * @param {?} _
        * @param {?} element
        * @return {?}
        */
        (_, element) => this._cleanupObserver(element));
      }
      /**
       * @param {?} elementOrRef
       * @return {?}
       */


      observe(elementOrRef) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        observer => {
          /** @type {?} */
          const stream = this._observeElement(element);
          /** @type {?} */


          const subscription = stream.subscribe(observer);
          return (
            /**
            * @return {?}
            */
            () => {
              subscription.unsubscribe();

              this._unobserveElement(element);
            }
          );
        });
      }
      /**
       * Observes the given element by using the existing MutationObserver if available, or creating a
       * new one if not.
       * @private
       * @param {?} element
       * @return {?}
       */


      _observeElement(element) {
        if (!this._observedElements.has(element)) {
          /** @type {?} */
          const stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** @type {?} */

          const observer = this._mutationObserverFactory.create(
          /**
          * @param {?} mutations
          * @return {?}
          */
          mutations => stream.next(mutations));

          if (observer) {
            observer.observe(element, {
              characterData: true,
              childList: true,
              subtree: true
            });
          }

          this._observedElements.set(element, {
            observer,
            stream,
            count: 1
          });
        } else {
          /** @type {?} */this._observedElements.get(element).count++;
        }

        return (
          /** @type {?} */
          this._observedElements.get(element).stream
        );
      }
      /**
       * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
       * observing this element.
       * @private
       * @param {?} element
       * @return {?}
       */


      _unobserveElement(element) {
        if (this._observedElements.has(element)) {
          /** @type {?} */this._observedElements.get(element).count--;

          if (!
          /** @type {?} */
          this._observedElements.get(element).count) {
            this._cleanupObserver(element);
          }
        }
      }
      /**
       * Clean up the underlying MutationObserver for the specified element.
       * @private
       * @param {?} element
       * @return {?}
       */


      _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
          const {
            observer,
            stream
          } =
          /** @type {?} */
          this._observedElements.get(element);

          if (observer) {
            observer.disconnect();
          }

          stream.complete();

          this._observedElements.delete(element);
        }
      }

    }

    ContentObserver.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ContentObserver.ctorParameters = () => [{
      type: MutationObserverFactory
    }];
    /** @nocollapse */


    ContentObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ContentObserver_Factory() {
        return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory));
      },
      token: ContentObserver,
      providedIn: "root"
    });
    /**
     * Directive that triggers a callback whenever the content of
     * its associated element has changed.
     */

    class CdkObserveContent {
      /**
       * @param {?} _contentObserver
       * @param {?} _elementRef
       * @param {?} _ngZone
       */
      constructor(_contentObserver, _elementRef, _ngZone) {
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */

        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._disabled = false;
        this._currentSubscription = null;
      }
      /**
       * Whether observing content is disabled. This option can be used
       * to disconnect the underlying MutationObserver until it is needed.
       * @return {?}
       */


      get disabled() {
        return this._disabled;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        this._disabled ? this._unsubscribe() : this._subscribe();
      }
      /**
       * Debounce interval for emitting the changes.
       * @return {?}
       */


      get debounce() {
        return this._debounce;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set debounce(value) {
        this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);

        this._subscribe();
      }
      /**
       * @return {?}
       */


      ngAfterContentInit() {
        if (!this._currentSubscription && !this.disabled) {
          this._subscribe();
        }
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._unsubscribe();
      }
      /**
       * @private
       * @return {?}
       */


      _subscribe() {
        this._unsubscribe();
        /** @type {?} */


        const stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
        // Consider brining it back inside the zone next time we're making breaking changes.
        // Bringing it back inside can cause things like infinite change detection loops and changed
        // after checked errors if people's code isn't handling it properly.


        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          this._currentSubscription = (this.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounce)) : stream).subscribe(this.event);
        });
      }
      /**
       * @private
       * @return {?}
       */


      _unsubscribe() {
        if (this._currentSubscription) {
          this._currentSubscription.unsubscribe();
        }
      }

    }

    CdkObserveContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkObserveContent]',
        exportAs: 'cdkObserveContent'
      }]
    }];
    /** @nocollapse */

    CdkObserveContent.ctorParameters = () => [{
      type: ContentObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }];

    CdkObserveContent.propDecorators = {
      event: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
        args: ['cdkObserveContent']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkObserveContentDisabled']
      }],
      debounce: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };

    class ObserversModule {}

    ObserversModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        exports: [CdkObserveContent],
        declarations: [CdkObserveContent],
        providers: [MutationObserverFactory]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=observers.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/overlay.js":
  /*!******************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/overlay.js ***!
    \******************************************************/

  /*! exports provided: ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkScrollable, ScrollDispatcher, Overlay, OverlayContainer, CdkOverlayOrigin, CdkConnectedOverlay, FullscreenOverlayContainer, OverlayRef, OverlayKeyboardDispatcher, OverlayPositionBuilder, GlobalPositionStrategy, ConnectedPositionStrategy, FlexibleConnectedPositionStrategy, OverlayConfig, validateVerticalPosition, validateHorizontalPosition, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, OverlayModule, OVERLAY_PROVIDERS, ɵg, ɵf, ɵb, ɵa, ɵc, ɵe, ɵd */

  /***/
  function node_modulesAngularCdkEsm2015OverlayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Overlay", function () {
      return Overlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
      return OverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
      return CdkOverlayOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
      return CdkConnectedOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
      return FullscreenOverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
      return OverlayRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
      return OverlayKeyboardDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
      return OverlayPositionBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
      return GlobalPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
      return ConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
      return FlexibleConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
      return OverlayConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
      return validateVerticalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
      return validateHorizontalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
      return ConnectionPositionPair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
      return ScrollingVisibility;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
      return ConnectedOverlayPositionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
      return ScrollStrategyOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
      return RepositionScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
      return CloseScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
      return NoopScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
      return BlockScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
      return OverlayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () {
      return OVERLAY_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return OVERLAY_CONTAINER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return OVERLAY_CONTAINER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"];
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Strategy that will prevent the user from scrolling while the overlay is visible.
     */


    class BlockScrollStrategy {
      /**
       * @param {?} _viewportRuler
       * @param {?} document
       */
      constructor(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = {
          top: '',
          left: ''
        };
        this._isEnabled = false;
        this._document = document;
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @return {?}
       */


      attach() {}
      /**
       * Blocks page-level scroll while the attached overlay is open.
       * @return {?}
       */


      enable() {
        if (this._canBeEnabled()) {
          /** @type {?} */
          const root =
          /** @type {?} */
          this._document.documentElement;
          this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

          this._previousHTMLStyles.left = root.style.left || '';
          this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
          // have the user agent margin, whereas the `html` is guaranteed not to have one.

          root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
          root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
          root.classList.add('cdk-global-scrollblock');
          this._isEnabled = true;
        }
      }
      /**
       * Unblocks page-level scroll while the attached overlay is open.
       * @return {?}
       */


      disable() {
        if (this._isEnabled) {
          /** @type {?} */
          const html =
          /** @type {?} */
          this._document.documentElement;
          /** @type {?} */

          const body =
          /** @type {?} */
          this._document.body;
          /** @type {?} */

          const htmlStyle =
          /** @type {?} */
          html.style;
          /** @type {?} */

          const bodyStyle =
          /** @type {?} */
          body.style;
          /** @type {?} */

          const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
          /** @type {?} */

          const previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
          this._isEnabled = false;
          htmlStyle.left = this._previousHTMLStyles.left;
          htmlStyle.top = this._previousHTMLStyles.top;
          html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
          // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

          htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
          window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
          htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
          bodyStyle.scrollBehavior = previousBodyScrollBehavior;
        }
      }
      /**
       * @private
       * @return {?}
       */


      _canBeEnabled() {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.

        /** @type {?} */
        const html =
        /** @type {?} */
        this._document.documentElement;

        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
          return false;
        }
        /** @type {?} */


        const body = this._document.body;
        /** @type {?} */

        const viewport = this._viewportRuler.getViewportSize();

        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
     * @return {?}
     */


    function getMatScrollStrategyAlreadyAttachedError() {
      return Error("Scroll strategy has already been attached.");
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Strategy that will close the overlay as soon as the user starts scrolling.
     */


    class CloseScrollStrategy {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?=} _config
       */
      constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */

        this._detach =
        /**
        * @return {?}
        */
        () => {
          this.disable();

          if (this._overlayRef.hasAttached()) {
            this._ngZone.run(
            /**
            * @return {?}
            */
            () => this._overlayRef.detach());
          }
        };
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      attach(overlayRef) {
        if (this._overlayRef) {
          throw getMatScrollStrategyAlreadyAttachedError();
        }

        this._overlayRef = overlayRef;
      }
      /**
       * Enables the closing of the attached overlay on scroll.
       * @return {?}
       */


      enable() {
        if (this._scrollSubscription) {
          return;
        }
        /** @type {?} */


        const stream = this._scrollDispatcher.scrolled(0);

        if (this._config && this._config.threshold && this._config.threshold > 1) {
          this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
          this._scrollSubscription = stream.subscribe(
          /**
          * @return {?}
          */
          () => {
            /** @type {?} */
            const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;

            if (Math.abs(scrollPosition - this._initialScrollPosition) >
            /** @type {?} */

            /** @type {?} */
            this._config.threshold) {
              this._detach();
            } else {
              this._overlayRef.updatePosition();
            }
          });
        } else {
          this._scrollSubscription = stream.subscribe(this._detach);
        }
      }
      /**
       * Disables the closing the attached overlay on scroll.
       * @return {?}
       */


      disable() {
        if (this._scrollSubscription) {
          this._scrollSubscription.unsubscribe();

          this._scrollSubscription = null;
        }
      }
      /**
       * @return {?}
       */


      detach() {
        this.disable();
        this._overlayRef =
        /** @type {?} */
        null;
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Scroll strategy that doesn't do anything.
     */


    class NoopScrollStrategy {
      /**
       * Does nothing, as this scroll strategy is a no-op.
       * @return {?}
       */
      enable() {}
      /**
       * Does nothing, as this scroll strategy is a no-op.
       * @return {?}
       */


      disable() {}
      /**
       * Does nothing, as this scroll strategy is a no-op.
       * @return {?}
       */


      attach() {}

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(jelbourn): move this to live with the rest of the scrolling code
    // TODO(jelbourn): someday replace this with IntersectionObservers

    /**
     * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
     * \@docs-private
     * @param {?} element Dimensions of the element (from getBoundingClientRect)
     * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @return {?} Whether the element is scrolled out of view
     */


    function isElementScrolledOutsideView(element, scrollContainers) {
      return scrollContainers.some(
      /**
      * @param {?} containerBounds
      * @return {?}
      */
      containerBounds => {
        /** @type {?} */
        const outsideAbove = element.bottom < containerBounds.top;
        /** @type {?} */

        const outsideBelow = element.top > containerBounds.bottom;
        /** @type {?} */

        const outsideLeft = element.right < containerBounds.left;
        /** @type {?} */

        const outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
      });
    }
    /**
     * Gets whether an element is clipped by any of its scrolling containers.
     * \@docs-private
     * @param {?} element Dimensions of the element (from getBoundingClientRect)
     * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @return {?} Whether the element is clipped
     */


    function isElementClippedByScrolling(element, scrollContainers) {
      return scrollContainers.some(
      /**
      * @param {?} scrollContainerRect
      * @return {?}
      */
      scrollContainerRect => {
        /** @type {?} */
        const clippedAbove = element.top < scrollContainerRect.top;
        /** @type {?} */

        const clippedBelow = element.bottom > scrollContainerRect.bottom;
        /** @type {?} */

        const clippedLeft = element.left < scrollContainerRect.left;
        /** @type {?} */

        const clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Strategy that will update the element position as the user is scrolling.
     */


    class RepositionScrollStrategy {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _viewportRuler
       * @param {?} _ngZone
       * @param {?=} _config
       */
      constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      attach(overlayRef) {
        if (this._overlayRef) {
          throw getMatScrollStrategyAlreadyAttachedError();
        }

        this._overlayRef = overlayRef;
      }
      /**
       * Enables repositioning of the attached overlay on scroll.
       * @return {?}
       */


      enable() {
        if (!this._scrollSubscription) {
          /** @type {?} */
          const throttle = this._config ? this._config.scrollThrottle : 0;
          this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(
          /**
          * @return {?}
          */
          () => {
            this._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


            if (this._config && this._config.autoClose) {
              /** @type {?} */
              const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();

              const {
                width,
                height
              } = this._viewportRuler.getViewportSize(); // TODO(crisbeto): include all ancestor scroll containers here once
              // we have a way of exposing the trigger element to the scroll strategy.

              /** @type {?} */


              const parentRects = [{
                width,
                height,
                bottom: height,
                right: width,
                top: 0,
                left: 0
              }];

              if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                this.disable();

                this._ngZone.run(
                /**
                * @return {?}
                */
                () => this._overlayRef.detach());
              }
            }
          });
        }
      }
      /**
       * Disables repositioning of the attached overlay on scroll.
       * @return {?}
       */


      disable() {
        if (this._scrollSubscription) {
          this._scrollSubscription.unsubscribe();

          this._scrollSubscription = null;
        }
      }
      /**
       * @return {?}
       */


      detach() {
        this.disable();
        this._overlayRef =
        /** @type {?} */
        null;
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Options for how an overlay will handle scrolling.
     *
     * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
     * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
     */


    class ScrollStrategyOptions {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _viewportRuler
       * @param {?} _ngZone
       * @param {?} document
       */
      constructor(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /**
         * Do nothing on scroll.
         */

        this.noop =
        /**
        * @return {?}
        */
        () => new NoopScrollStrategy();
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */


        this.close =
        /**
        * @param {?=} config
        * @return {?}
        */
        config => new CloseScrollStrategy(this._scrollDispatcher, this._ngZone, this._viewportRuler, config);
        /**
         * Block scrolling.
         */


        this.block =
        /**
        * @return {?}
        */
        () => new BlockScrollStrategy(this._viewportRuler, this._document);
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */


        this.reposition =
        /**
        * @param {?=} config
        * @return {?}
        */
        config => new RepositionScrollStrategy(this._scrollDispatcher, this._viewportRuler, this._ngZone, config);

        this._document = document;
      }

    }

    ScrollStrategyOptions.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ScrollStrategyOptions.ctorParameters = () => [{
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];
    /** @nocollapse */


    ScrollStrategyOptions.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function ScrollStrategyOptions_Factory() {
        return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      },
      token: ScrollStrategyOptions,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Initial configuration used when creating an overlay.
     */

    class OverlayConfig {
      /**
       * @param {?=} config
       */
      constructor(config) {
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = new NoopScrollStrategy();
        /**
         * Custom class to add to the overlay pane.
         */

        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */

        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */

        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.disposeOnNavigation = false;

        if (config) {
          /** @type {?} */
          const configKeys =
          /** @type {?} */
          Object.keys(config);

          for (const key of configKeys) {
            if (config[key] !== undefined) {
              // TypeScript, as of version 3.5, sees the left-hand-side of this expression
              // as "I don't know *which* key this is, so the only valid value is the intersection
              // of all the posible values." In this case, that happens to be `undefined`. TypeScript
              // is not smart enough to see that the right-hand-side is actually an access of the same
              // exact type with the same exact key, meaning that the value type must be identical.
              // So we use `any` to work around this.
              this[key] =
              /** @type {?} */
              config[key];
            }
          }
        }
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The points of the origin element and the overlay element to connect.
     */


    class ConnectionPositionPair {
      /**
       * @param {?} origin
       * @param {?} overlay
       * @param {?=} offsetX
       * @param {?=} offsetY
       * @param {?=} panelClass
       */
      constructor(origin, overlay, offsetX, offsetY, panelClass) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
      }

    }
    /**
     * Set of properties regarding the position of the origin and overlay relative to the viewport
     * with respect to the containing Scrollable elements.
     *
     * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
     * bounds of any one of the strategy's Scrollable's bounding client rectangle.
     *
     * The overlay and origin are outside view if there is no overlap between their bounding client
     * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
     *
     *       -----------                    -----------
     *       | outside |                    | clipped |
     *       |  view   |              --------------------------
     *       |         |              |     |         |        |
     *       ----------               |     -----------        |
     *  --------------------------    |                        |
     *  |                        |    |      Scrollable        |
     *  |                        |    |                        |
     *  |                        |     --------------------------
     *  |      Scrollable        |
     *  |                        |
     *  --------------------------
     *
     * \@docs-private
     */


    class ScrollingVisibility {}
    /**
     * The change event emitted by the strategy when a fallback position is used.
     */


    class ConnectedOverlayPositionChange {
      /**
       * @param {?} connectionPair
       * @param {?} scrollableViewProperties
       */
      constructor(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
      }

    }
    /** @nocollapse */


    ConnectedOverlayPositionChange.ctorParameters = () => [{
      type: ConnectionPositionPair
    }, {
      type: ScrollingVisibility,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }]
    }];
    /**
     * Validates whether a vertical position property matches the expected values.
     * \@docs-private
     * @param {?} property Name of the property being validated.
     * @param {?} value Value of the property being validated.
     * @return {?}
     */


    function validateVerticalPosition(property, value) {
      if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
      }
    }
    /**
     * Validates whether a horizontal position property matches the expected values.
     * \@docs-private
     * @param {?} property Name of the property being validated.
     * @param {?} value Value of the property being validated.
     * @return {?}
     */


    function validateHorizontalPosition(property, value) {
      if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
     * if any. It maintains a list of attached overlays to determine best suited overlay based
     * on event target and order of overlay opens.
     */


    class OverlayKeyboardDispatcher {
      /**
       * @param {?} document
       */
      constructor(document) {
        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */

        this._keydownListener =
        /**
        * @param {?} event
        * @return {?}
        */
        event => {
          /** @type {?} */
          const overlays = this._attachedOverlays;

          for (let i = overlays.length - 1; i > -1; i--) {
            // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
            // We want to target the most recent overlay, rather than trying to match where the event came
            // from, because some components might open an overlay, but keep focus on a trigger element
            // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
            // because we don't want overlays that don't handle keyboard events to block the ones below
            // them that do.
            if (overlays[i]._keydownEventSubscriptions > 0) {
              overlays[i]._keydownEvents.next(event);

              break;
            }
          }
        };

        this._document = document;
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._detach();
      }
      /**
       * Add a new overlay to the list of attached overlay refs.
       * @param {?} overlayRef
       * @return {?}
       */


      add(overlayRef) {
        // Ensure that we don't get the same overlay multiple times.
        this.remove(overlayRef); // Lazily start dispatcher once first overlay is added

        if (!this._isAttached) {
          this._document.body.addEventListener('keydown', this._keydownListener);

          this._isAttached = true;
        }

        this._attachedOverlays.push(overlayRef);
      }
      /**
       * Remove an overlay from the list of attached overlay refs.
       * @param {?} overlayRef
       * @return {?}
       */


      remove(overlayRef) {
        /** @type {?} */
        const index = this._attachedOverlays.indexOf(overlayRef);

        if (index > -1) {
          this._attachedOverlays.splice(index, 1);
        } // Remove the global listener once there are no more overlays.


        if (this._attachedOverlays.length === 0) {
          this._detach();
        }
      }
      /**
       * Detaches the global keyboard event listener.
       * @private
       * @return {?}
       */


      _detach() {
        if (this._isAttached) {
          this._document.body.removeEventListener('keydown', this._keydownListener);

          this._isAttached = false;
        }
      }

    }

    OverlayKeyboardDispatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    OverlayKeyboardDispatcher.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];
    /** @nocollapse */


    OverlayKeyboardDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function OverlayKeyboardDispatcher_Factory() {
        return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      },
      token: OverlayKeyboardDispatcher,
      providedIn: "root"
    });
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} dispatcher
     * @param {?} _document
     * @return {?}
     */

    function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
      return dispatcher || new OverlayKeyboardDispatcher(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    const OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
      // If there is already an OverlayKeyboardDispatcher available, use that.
      // Otherwise, provide a new one.
      provide: OverlayKeyboardDispatcher,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayKeyboardDispatcher],
      /** @type {?} */
      // Coerce to `InjectionToken` so that the `deps` match the "shape"
      // of the type expected by Angular
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]],
      useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Container inside which all overlays will render.
     */

    class OverlayContainer {
      /**
       * @param {?} document
       */
      constructor(document) {
        this._document = document;
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        if (this._containerElement && this._containerElement.parentNode) {
          this._containerElement.parentNode.removeChild(this._containerElement);
        }
      }
      /**
       * This method returns the overlay container element. It will lazily
       * create the element the first time  it is called to facilitate using
       * the container in non-browser environments.
       * @return {?} the container element
       */


      getContainerElement() {
        if (!this._containerElement) {
          this._createContainer();
        }

        return this._containerElement;
      }
      /**
       * Create the overlay container element, which is simply a div
       * with the 'cdk-overlay-container' class on the document body.
       * @protected
       * @return {?}
       */


      _createContainer() {
        /** @type {?} */
        const containerClass = 'cdk-overlay-container';
        /** @type {?} */

        const previousContainers = this._document.getElementsByClassName(containerClass); // Remove any old containers. This can happen when transitioning from the server to the client.


        for (let i = 0; i < previousContainers.length; i++) {
          /** @type {?} */
          previousContainers[i].parentNode.removeChild(previousContainers[i]);
        }
        /** @type {?} */


        const container = this._document.createElement('div');

        container.classList.add(containerClass);

        this._document.body.appendChild(container);

        this._containerElement = container;
      }

    }

    OverlayContainer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    OverlayContainer.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];
    /** @nocollapse */


    OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function OverlayContainer_Factory() {
        return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      },
      token: OverlayContainer,
      providedIn: "root"
    });
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentContainer
     * @param {?} _document
     * @return {?}
     */

    function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
      return parentContainer || new OverlayContainer(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    const OVERLAY_CONTAINER_PROVIDER = {
      // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
      provide: OverlayContainer,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"](), OverlayContainer],
      /** @type {?} */
      _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]],
      useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */

    class OverlayRef {
      /**
       * @param {?} _portalOutlet
       * @param {?} _host
       * @param {?} _pane
       * @param {?} _config
       * @param {?} _ngZone
       * @param {?} _keyboardDispatcher
       * @param {?} _document
       * @param {?=} _location
       */
      constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;

        this._backdropClickHandler =
        /**
        * @param {?} event
        * @return {?}
        */
        event => this._backdropClick.next(event);

        this._keydownEventsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        observer => {
          /** @type {?} */
          const subscription = this._keydownEvents.subscribe(observer);

          this._keydownEventSubscriptions++;
          return (
            /**
            * @return {?}
            */
            () => {
              subscription.unsubscribe();
              this._keydownEventSubscriptions--;
            }
          );
        });
        /**
         * Stream of keydown events dispatched to this overlay.
         */

        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Amount of subscriptions to the keydown events.
         */

        this._keydownEventSubscriptions = 0;

        if (_config.scrollStrategy) {
          this._scrollStrategy = _config.scrollStrategy;

          this._scrollStrategy.attach(this);
        }

        this._positionStrategy = _config.positionStrategy;
      }
      /**
       * The overlay's HTML element
       * @return {?}
       */


      get overlayElement() {
        return this._pane;
      }
      /**
       * The overlay's backdrop HTML element.
       * @return {?}
       */


      get backdropElement() {
        return this._backdropElement;
      }
      /**
       * Wrapper around the panel element. Can be used for advanced
       * positioning where a wrapper with specific styling is
       * required around the overlay pane.
       * @return {?}
       */


      get hostElement() {
        return this._host;
      }
      /**
       * Attaches content, given via a Portal, to the overlay.
       * If the overlay is configured to have a backdrop, it will be created.
       *
       * @param {?} portal Portal instance to which to attach the overlay.
       * @return {?} The portal attachment result.
       */


      attach(portal) {
        /** @type {?} */
        let attachResult = this._portalOutlet.attach(portal);

        if (this._positionStrategy) {
          this._positionStrategy.attach(this);
        } // Update the pane element with the given configuration.


        if (!this._host.parentElement && this._previousHostParent) {
          this._previousHostParent.appendChild(this._host);
        }

        this._updateStackingOrder();

        this._updateElementSize();

        this._updateElementDirection();

        if (this._scrollStrategy) {
          this._scrollStrategy.enable();
        } // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.


        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        () => {
          // The overlay could've been detached before the zone has stabilized.
          if (this.hasAttached()) {
            this.updatePosition();
          }
        }); // Enable pointer events for the overlay pane element.


        this._togglePointerEvents(true);

        if (this._config.hasBackdrop) {
          this._attachBackdrop();
        }

        if (this._config.panelClass) {
          this._toggleClasses(this._pane, this._config.panelClass, true);
        } // Only emit the `attachments` event once all other setup is done.


        this._attachments.next(); // Track this overlay by the keyboard dispatcher


        this._keyboardDispatcher.add(this); // @breaking-change 8.0.0 remove the null check for `_location`
        // once the constructor parameter is made required.


        if (this._config.disposeOnNavigation && this._location) {
          this._locationChanges = this._location.subscribe(
          /**
          * @return {?}
          */
          () => this.dispose());
        }

        return attachResult;
      }
      /**
       * Detaches an overlay from a portal.
       * @return {?} The portal detachment result.
       */


      detach() {
        if (!this.hasAttached()) {
          return;
        }

        this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

        this._togglePointerEvents(false);

        if (this._positionStrategy && this._positionStrategy.detach) {
          this._positionStrategy.detach();
        }

        if (this._scrollStrategy) {
          this._scrollStrategy.disable();
        }
        /** @type {?} */


        const detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


        this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


        this._keyboardDispatcher.remove(this); // Keeping the host element in DOM the can cause scroll jank, because it still gets
        // rendered, even though it's transparent and unclickable which is why we remove it.


        this._detachContentWhenStable(); // Stop listening for location changes.


        this._locationChanges.unsubscribe();

        return detachmentResult;
      }
      /**
       * Cleans up the overlay from the DOM.
       * @return {?}
       */


      dispose() {
        /** @type {?} */
        const isAttached = this.hasAttached();

        if (this._positionStrategy) {
          this._positionStrategy.dispose();
        }

        this._disposeScrollStrategy();

        this.detachBackdrop();

        this._locationChanges.unsubscribe();

        this._keyboardDispatcher.remove(this);

        this._portalOutlet.dispose();

        this._attachments.complete();

        this._backdropClick.complete();

        this._keydownEvents.complete();

        if (this._host && this._host.parentNode) {
          this._host.parentNode.removeChild(this._host);

          this._host =
          /** @type {?} */
          null;
        }

        this._previousHostParent = this._pane =
        /** @type {?} */
        null;

        if (isAttached) {
          this._detachments.next();
        }

        this._detachments.complete();
      }
      /**
       * Whether the overlay has attached content.
       * @return {?}
       */


      hasAttached() {
        return this._portalOutlet.hasAttached();
      }
      /**
       * Gets an observable that emits when the backdrop has been clicked.
       * @return {?}
       */


      backdropClick() {
        return this._backdropClick.asObservable();
      }
      /**
       * Gets an observable that emits when the overlay has been attached.
       * @return {?}
       */


      attachments() {
        return this._attachments.asObservable();
      }
      /**
       * Gets an observable that emits when the overlay has been detached.
       * @return {?}
       */


      detachments() {
        return this._detachments.asObservable();
      }
      /**
       * Gets an observable of keydown events targeted to this overlay.
       * @return {?}
       */


      keydownEvents() {
        return this._keydownEventsObservable;
      }
      /**
       * Gets the current overlay configuration, which is immutable.
       * @return {?}
       */


      getConfig() {
        return this._config;
      }
      /**
       * Updates the position of the overlay based on the position strategy.
       * @return {?}
       */


      updatePosition() {
        if (this._positionStrategy) {
          this._positionStrategy.apply();
        }
      }
      /**
       * Switches to a new position strategy and updates the overlay position.
       * @param {?} strategy
       * @return {?}
       */


      updatePositionStrategy(strategy) {
        if (strategy === this._positionStrategy) {
          return;
        }

        if (this._positionStrategy) {
          this._positionStrategy.dispose();
        }

        this._positionStrategy = strategy;

        if (this.hasAttached()) {
          strategy.attach(this);
          this.updatePosition();
        }
      }
      /**
       * Update the size properties of the overlay.
       * @param {?} sizeConfig
       * @return {?}
       */


      updateSize(sizeConfig) {
        this._config = Object.assign({}, this._config, sizeConfig);

        this._updateElementSize();
      }
      /**
       * Sets the LTR/RTL direction for the overlay.
       * @param {?} dir
       * @return {?}
       */


      setDirection(dir) {
        this._config = Object.assign({}, this._config, {
          direction: dir
        });

        this._updateElementDirection();
      }
      /**
       * Add a CSS class or an array of classes to the overlay pane.
       * @param {?} classes
       * @return {?}
       */


      addPanelClass(classes) {
        if (this._pane) {
          this._toggleClasses(this._pane, classes, true);
        }
      }
      /**
       * Remove a CSS class or an array of classes from the overlay pane.
       * @param {?} classes
       * @return {?}
       */


      removePanelClass(classes) {
        if (this._pane) {
          this._toggleClasses(this._pane, classes, false);
        }
      }
      /**
       * Returns the layout direction of the overlay panel.
       * @return {?}
       */


      getDirection() {
        /** @type {?} */
        const direction = this._config.direction;

        if (!direction) {
          return 'ltr';
        }

        return typeof direction === 'string' ? direction : direction.value;
      }
      /**
       * Switches to a new scroll strategy.
       * @param {?} strategy
       * @return {?}
       */


      updateScrollStrategy(strategy) {
        if (strategy === this._scrollStrategy) {
          return;
        }

        this._disposeScrollStrategy();

        this._scrollStrategy = strategy;

        if (this.hasAttached()) {
          strategy.attach(this);
          strategy.enable();
        }
      }
      /**
       * Updates the text direction of the overlay panel.
       * @private
       * @return {?}
       */


      _updateElementDirection() {
        this._host.setAttribute('dir', this.getDirection());
      }
      /**
       * Updates the size of the overlay element based on the overlay config.
       * @private
       * @return {?}
       */


      _updateElementSize() {
        if (!this._pane) {
          return;
        }
        /** @type {?} */


        const style = this._pane.style;
        style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.width);
        style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.height);
        style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minWidth);
        style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.minHeight);
        style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxWidth);
        style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(this._config.maxHeight);
      }
      /**
       * Toggles the pointer events for the overlay pane element.
       * @private
       * @param {?} enablePointer
       * @return {?}
       */


      _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
      }
      /**
       * Attaches a backdrop for this overlay.
       * @private
       * @return {?}
       */


      _attachBackdrop() {
        /** @type {?} */
        const showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');

        this._backdropElement.classList.add('cdk-overlay-backdrop');

        if (this._config.backdropClass) {
          this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
        } // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.


        /** @type {?} */
        this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).


        this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


        if (typeof requestAnimationFrame !== 'undefined') {
          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          () => {
            requestAnimationFrame(
            /**
            * @return {?}
            */
            () => {
              if (this._backdropElement) {
                this._backdropElement.classList.add(showingClass);
              }
            });
          });
        } else {
          this._backdropElement.classList.add(showingClass);
        }
      }
      /**
       * Updates the stacking order of the element, moving it to the top if necessary.
       * This is required in cases where one overlay was detached, while another one,
       * that should be behind it, was destroyed. The next time both of them are opened,
       * the stacking will be wrong, because the detached element's pane will still be
       * in its original DOM position.
       * @private
       * @return {?}
       */


      _updateStackingOrder() {
        if (this._host.nextSibling) {
          /** @type {?} */
          this._host.parentNode.appendChild(this._host);
        }
      }
      /**
       * Detaches the backdrop (if any) associated with the overlay.
       * @return {?}
       */


      detachBackdrop() {
        /** @type {?} */
        let backdropToDetach = this._backdropElement;

        if (!backdropToDetach) {
          return;
        }
        /** @type {?} */


        let timeoutId;
        /** @type {?} */

        let finishDetach =
        /**
        * @return {?}
        */
        () => {
          // It may not be attached to anything in certain cases (e.g. unit tests).
          if (backdropToDetach) {
            backdropToDetach.removeEventListener('click', this._backdropClickHandler);
            backdropToDetach.removeEventListener('transitionend', finishDetach);

            if (backdropToDetach.parentNode) {
              backdropToDetach.parentNode.removeChild(backdropToDetach);
            }
          } // It is possible that a new portal has been attached to this overlay since we started
          // removing the backdrop. If that is the case, only clear the backdrop reference if it
          // is still the same instance that we started to remove.


          if (this._backdropElement == backdropToDetach) {
            this._backdropElement = null;
          }

          if (this._config.backdropClass) {
            this._toggleClasses(
            /** @type {?} */
            backdropToDetach, this._config.backdropClass, false);
          }

          clearTimeout(timeoutId);
        };

        backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          /** @type {?} */
          backdropToDetach.addEventListener('transitionend', finishDetach);
        }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
        // In this case we make it unclickable and we try to remove it after a delay.


        backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
        // If it were to run inside the Angular zone, every test that used Overlay would have to be
        // either async or fakeAsync.

        timeoutId = this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => setTimeout(finishDetach, 500));
      }
      /**
       * Toggles a single CSS class or an array of classes on an element.
       * @private
       * @param {?} element
       * @param {?} cssClasses
       * @param {?} isAdd
       * @return {?}
       */


      _toggleClasses(element, cssClasses, isAdd) {
        /** @type {?} */
        const classList = element.classList;
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(
        /**
        * @param {?} cssClass
        * @return {?}
        */
        cssClass => {
          // We can't do a spread here, because IE doesn't support setting multiple classes.
          // Also trying to add an empty string to a DOMTokenList will throw.
          if (cssClass) {
            isAdd ? classList.add(cssClass) : classList.remove(cssClass);
          }
        });
      }
      /**
       * Detaches the overlay content next time the zone stabilizes.
       * @private
       * @return {?}
       */


      _detachContentWhenStable() {
        // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
        // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
        // be patched to run inside the zone, which will throw us into an infinite loop.
        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          // We can't remove the host here immediately, because the overlay pane's content
          // might still be animating. This stream helps us avoid interrupting the animation
          // by waiting for the pane to become empty.

          /** @type {?} */
          const subscription = this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._attachments, this._detachments))).subscribe(
          /**
          * @return {?}
          */
          () => {
            // Needs a couple of checks for the pane and host, because
            // they may have been removed by the time the zone stabilizes.
            if (!this._pane || !this._host || this._pane.children.length === 0) {
              if (this._pane && this._config.panelClass) {
                this._toggleClasses(this._pane, this._config.panelClass, false);
              }

              if (this._host && this._host.parentElement) {
                this._previousHostParent = this._host.parentElement;

                this._previousHostParent.removeChild(this._host);
              }

              subscription.unsubscribe();
            }
          });
        });
      }
      /**
       * Disposes of a scroll strategy.
       * @private
       * @return {?}
       */


      _disposeScrollStrategy() {
        /** @type {?} */
        const scrollStrategy = this._scrollStrategy;

        if (scrollStrategy) {
          scrollStrategy.disable();

          if (scrollStrategy.detach) {
            scrollStrategy.detach();
          }
        }
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: refactor clipping detection into a separate thing (part of scrolling module)
    // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

    /**
     * Class to be added to the overlay bounding box.
     * @type {?}
     */


    const boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     */

    class FlexibleConnectedPositionStrategy {
      /**
       * @param {?} connectedTo
       * @param {?} _viewportRuler
       * @param {?} _document
       * @param {?} _platform
       * @param {?} _overlayContainer
       */
      constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /**
         * Last size used for the bounding box. Used to avoid resizing the overlay after open.
         */

        this._lastBoundingBoxSize = {
          width: 0,
          height: 0
        };
        /**
         * Whether the overlay was pushed in a previous positioning.
         */

        this._isPushed = false;
        /**
         * Whether the overlay can be pushed on-screen on the initial open.
         */

        this._canPush = true;
        /**
         * Whether the overlay can grow via flexible width/height after the initial open.
         */

        this._growAfterOpen = false;
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         */

        this._hasFlexibleDimensions = true;
        /**
         * Whether the overlay position is locked.
         */

        this._positionLocked = false;
        /**
         * Amount of space that must be maintained between the overlay and the edge of the viewport.
         */

        this._viewportMargin = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */

        this._scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */

        this._preferredPositions = [];
        /**
         * Subject that emits whenever the position changes.
         */

        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Subscription to viewport size changes.
         */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Default offset for the overlay along the x axis.
         */

        this._offsetX = 0;
        /**
         * Default offset for the overlay along the y axis.
         */

        this._offsetY = 0;
        /**
         * Keeps track of the CSS classes that the position strategy has applied on the overlay panel.
         */

        this._appliedPanelClasses = [];
        /**
         * Observable sequence of position changes.
         */

        this.positionChanges = this._positionChanges.asObservable();
        this.setOrigin(connectedTo);
      }
      /**
       * Ordered list of preferred positions, from most to least desirable.
       * @return {?}
       */


      get positions() {
        return this._preferredPositions;
      }
      /**
       * Attaches this position strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      attach(overlayRef) {
        if (this._overlayRef && overlayRef !== this._overlayRef) {
          throw Error('This position strategy is already attached to an overlay');
        }

        this._validatePositions();

        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;

        this._resizeSubscription.unsubscribe();

        this._resizeSubscription = this._viewportRuler.change().subscribe(
        /**
        * @return {?}
        */
        () => {
          // When the window is resized, we want to trigger the next reposition as if it
          // was an initial render, in order for the strategy to pick a new optimal position,
          // otherwise position locking will cause it to stay at the old one.
          this._isInitialRender = true;
          this.apply();
        });
      }
      /**
       * Updates the position of the overlay element, using whichever preferred position relative
       * to the origin best fits on-screen.
       *
       * The selection of a position goes as follows:
       *  - If any positions fit completely within the viewport as-is,
       *      choose the first position that does so.
       *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
       *      choose the position with the greatest available size modified by the positions' weight.
       *  - If pushing is enabled, take the position that went off-screen the least and push it
       *      on-screen.
       *  - If none of the previous criteria were met, use the position that goes off-screen the least.
       * \@docs-private
       * @return {?}
       */


      apply() {
        // We shouldn't do anything if the strategy was disposed or we're on the server.
        if (this._isDisposed || !this._platform.isBrowser) {
          return;
        } // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the old position, in order to
        // prevent the overlay from jumping around.


        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
          this.reapplyLastPosition();
          return;
        }

        this._clearPanelClasses();

        this._resetOverlayElementStyles();

        this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        // We use the viewport rect to determine whether a position would go off-screen.


        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._getOriginRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        /** @type {?} */

        const originRect = this._originRect;
        /** @type {?} */

        const overlayRect = this._overlayRect;
        /** @type {?} */

        const viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

        /** @type {?} */

        const flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

        /** @type {?} */

        let fallback; // Go through each of the preferred positions looking for a good fit.
        // If a good fit is found, it will be applied immediately.

        for (let pos of this._preferredPositions) {
          // Get the exact (x, y) coordinate for the point-of-origin on the origin element.

          /** @type {?} */
          let originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
          // overlay in this position. We use the top-left corner for calculations and later translate
          // this into an appropriate (top, left, bottom, right) style.

          /** @type {?} */


          let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.

          /** @type {?} */


          let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


          if (overlayFit.isCompletelyWithinViewport) {
            this._isPushed = false;

            this._applyPosition(pos, originPoint);

            return;
          } // If the overlay has flexible dimensions, we can use this position
          // so long as there's enough space for the minimum dimensions.


          if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
            // Save positions where the overlay will fit with flexible dimensions. We will use these
            // if none of the positions fit *without* flexible dimensions.
            flexibleFits.push({
              position: pos,
              origin: originPoint,
              overlayRect,
              boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
            });
            continue;
          } // If the current preferred position does not fit on the screen, remember the position
          // if it has more visible area on-screen than we've seen and move onto the next preferred
          // position.


          if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
            fallback = {
              overlayFit,
              overlayPoint,
              originPoint,
              position: pos,
              overlayRect
            };
          }
        } // If there are any positions where the overlay would fit with flexible dimensions, choose the
        // one that has the greatest area available modified by the position's weight


        if (flexibleFits.length) {
          /** @type {?} */
          let bestFit = null;
          /** @type {?} */

          let bestScore = -1;

          for (const fit of flexibleFits) {
            /** @type {?} */
            const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

            if (score > bestScore) {
              bestScore = score;
              bestFit = fit;
            }
          }

          this._isPushed = false;

          this._applyPosition(
          /** @type {?} */
          bestFit.position,
          /** @type {?} */
          bestFit.origin);

          return;
        } // When none of the preferred positions fit within the viewport, take the position
        // that went off-screen the least and attempt to push it on-screen.


        if (this._canPush) {
          // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
          this._isPushed = true;

          this._applyPosition(
          /** @type {?} */
          fallback.position,
          /** @type {?} */
          fallback.originPoint);

          return;
        } // All options for getting the overlay within the viewport have been exhausted, so go with the
        // position that went off-screen the least.


        this._applyPosition(
        /** @type {?} */
        fallback.position,
        /** @type {?} */
        fallback.originPoint);
      }
      /**
       * @return {?}
       */


      detach() {
        this._clearPanelClasses();

        this._lastPosition = null;
        this._previousPushAmount = null;

        this._resizeSubscription.unsubscribe();
      }
      /**
       * Cleanup after the element gets destroyed.
       * @return {?}
       */


      dispose() {
        if (this._isDisposed) {
          return;
        } // We can't use `_resetBoundingBoxStyles` here, because it resets
        // some properties to zero, rather than removing them.


        if (this._boundingBox) {
          extendStyles(this._boundingBox.style,
          /** @type {?} */
          {
            top: '',
            left: '',
            right: '',
            bottom: '',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: ''
          });
        }

        if (this._pane) {
          this._resetOverlayElementStyles();
        }

        if (this._overlayRef) {
          this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }

        this.detach();

        this._positionChanges.complete();

        this._overlayRef = this._boundingBox =
        /** @type {?} */
        null;
        this._isDisposed = true;
      }
      /**
       * This re-aligns the overlay element with the trigger in its last calculated position,
       * even if a position higher in the "preferred positions" list would now fit. This
       * allows one to re-align the panel without changing the orientation of the panel.
       * @return {?}
       */


      reapplyLastPosition() {
        if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
          this._originRect = this._getOriginRect();
          this._overlayRect = this._pane.getBoundingClientRect();
          this._viewportRect = this._getNarrowedViewportRect();
          /** @type {?} */

          const lastPosition = this._lastPosition || this._preferredPositions[0];
          /** @type {?} */

          const originPoint = this._getOriginPoint(this._originRect, lastPosition);

          this._applyPosition(lastPosition, originPoint);
        }
      }
      /**
       * Sets the list of Scrollable containers that host the origin element so that
       * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
       * Scrollable must be an ancestor element of the strategy's origin element.
       * @template THIS
       * @this {THIS}
       * @param {?} scrollables
       * @return {THIS}
       */


      withScrollableContainers(scrollables) {
        /** @type {?} */
        this._scrollables = scrollables;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Adds new preferred positions.
       * @template THIS
       * @this {THIS}
       * @param {?} positions List of positions options for this overlay.
       * @return {THIS}
       */


      withPositions(positions) {
        /** @type {?} */
        this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
        // it in order to avoid it being picked up if the consumer tries to re-apply.

        if (positions.indexOf(
        /** @type {?} */

        /** @type {?} */
        this._lastPosition) === -1) {
          /** @type {?} */
          this._lastPosition = null;
        }

        /** @type {?} */
        this._validatePositions();

        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
       * @template THIS
       * @this {THIS}
       * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
       * @return {THIS}
       */


      withViewportMargin(margin) {
        /** @type {?} */
        this._viewportMargin = margin;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets whether the overlay's width and height can be constrained to fit within the viewport.
       * @template THIS
       * @this {THIS}
       * @param {?=} flexibleDimensions
       * @return {THIS}
       */


      withFlexibleDimensions(flexibleDimensions = true) {
        /** @type {?} */
        this._hasFlexibleDimensions = flexibleDimensions;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets whether the overlay can grow after the initial open via flexible width/height.
       * @template THIS
       * @this {THIS}
       * @param {?=} growAfterOpen
       * @return {THIS}
       */


      withGrowAfterOpen(growAfterOpen = true) {
        /** @type {?} */
        this._growAfterOpen = growAfterOpen;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
       * @template THIS
       * @this {THIS}
       * @param {?=} canPush
       * @return {THIS}
       */


      withPush(canPush = true) {
        /** @type {?} */
        this._canPush = canPush;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets whether the overlay's position should be locked in after it is positioned
       * initially. When an overlay is locked in, it won't attempt to reposition itself
       * when the position is re-applied (e.g. when the user scrolls away).
       * @template THIS
       * @this {THIS}
       * @param {?=} isLocked Whether the overlay should locked in.
       * @return {THIS}
       */


      withLockedPosition(isLocked = true) {
        /** @type {?} */
        this._positionLocked = isLocked;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets the origin, relative to which to position the overlay.
       * Using an element origin is useful for building components that need to be positioned
       * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
       * used for cases like contextual menus which open relative to the user's pointer.
       * @template THIS
       * @this {THIS}
       * @param {?} origin Reference to the new origin.
       * @return {THIS}
       */


      setOrigin(origin) {
        /** @type {?} */
        this._origin = origin;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets the default offset for the overlay's connection point on the x-axis.
       * @template THIS
       * @this {THIS}
       * @param {?} offset New offset in the X axis.
       * @return {THIS}
       */


      withDefaultOffsetX(offset) {
        /** @type {?} */
        this._offsetX = offset;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets the default offset for the overlay's connection point on the y-axis.
       * @template THIS
       * @this {THIS}
       * @param {?} offset New offset in the Y axis.
       * @return {THIS}
       */


      withDefaultOffsetY(offset) {
        /** @type {?} */
        this._offsetY = offset;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Configures that the position strategy should set a `transform-origin` on some elements
       * inside the overlay, depending on the current position that is being applied. This is
       * useful for the cases where the origin of an animation can change depending on the
       * alignment of the overlay.
       * @template THIS
       * @this {THIS}
       * @param {?} selector CSS selector that will be used to find the target
       *    elements onto which to set the transform origin.
       * @return {THIS}
       */


      withTransformOriginOn(selector) {
        /** @type {?} */
        this._transformOriginSelector = selector;
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
       * @private
       * @param {?} originRect
       * @param {?} pos
       * @return {?}
       */


      _getOriginPoint(originRect, pos) {
        /** @type {?} */
        let x;

        if (pos.originX == 'center') {
          // Note: when centering we should always use the `left`
          // offset, otherwise the position will be wrong in RTL.
          x = originRect.left + originRect.width / 2;
        } else {
          /** @type {?} */
          const startX = this._isRtl() ? originRect.right : originRect.left;
          /** @type {?} */

          const endX = this._isRtl() ? originRect.left : originRect.right;
          x = pos.originX == 'start' ? startX : endX;
        }
        /** @type {?} */


        let y;

        if (pos.originY == 'center') {
          y = originRect.top + originRect.height / 2;
        } else {
          y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }

        return {
          x,
          y
        };
      }
      /**
       * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
       * origin point to which the overlay should be connected.
       * @private
       * @param {?} originPoint
       * @param {?} overlayRect
       * @param {?} pos
       * @return {?}
       */


      _getOverlayPoint(originPoint, overlayRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the
        // potential overlay position relative to the origin point.

        /** @type {?} */
        let overlayStartX;

        if (pos.overlayX == 'center') {
          overlayStartX = -overlayRect.width / 2;
        } else if (pos.overlayX === 'start') {
          overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        } else {
          overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        /** @type {?} */


        let overlayStartY;

        if (pos.overlayY == 'center') {
          overlayStartY = -overlayRect.height / 2;
        } else {
          overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        } // The (x, y) coordinates of the overlay.


        return {
          x: originPoint.x + overlayStartX,
          y: originPoint.y + overlayStartY
        };
      }
      /**
       * Gets how well an overlay at the given point will fit within the viewport.
       * @private
       * @param {?} point
       * @param {?} overlay
       * @param {?} viewport
       * @param {?} position
       * @return {?}
       */


      _getOverlayFit(point, overlay, viewport, position) {
        let {
          x,
          y
        } = point;
        /** @type {?} */

        let offsetX = this._getOffset(position, 'x');
        /** @type {?} */


        let offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


        if (offsetX) {
          x += offsetX;
        }

        if (offsetY) {
          y += offsetY;
        } // How much the overlay would overflow at this position, on each side.

        /** @type {?} */


        let leftOverflow = 0 - x;
        /** @type {?} */

        let rightOverflow = x + overlay.width - viewport.width;
        /** @type {?} */

        let topOverflow = 0 - y;
        /** @type {?} */

        let bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

        /** @type {?} */

        let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        /** @type {?} */


        let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        /** @type {?} */


        let visibleArea = visibleWidth * visibleHeight;
        return {
          visibleArea,
          isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
          fitsInViewportVertically: visibleHeight === overlay.height,
          fitsInViewportHorizontally: visibleWidth == overlay.width
        };
      }
      /**
       * Whether the overlay can fit within the viewport when it may resize either its width or height.
       * @private
       * @param {?} fit How well the overlay fits in the viewport at some position.
       * @param {?} point The (x, y) coordinates of the overlat at some position.
       * @param {?} viewport The geometry of the viewport.
       * @return {?}
       */


      _canFitWithFlexibleDimensions(fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
          /** @type {?} */
          const availableHeight = viewport.bottom - point.y;
          /** @type {?} */

          const availableWidth = viewport.right - point.x;
          /** @type {?} */

          const minHeight = this._overlayRef.getConfig().minHeight;
          /** @type {?} */


          const minWidth = this._overlayRef.getConfig().minWidth;
          /** @type {?} */


          const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
          /** @type {?} */

          const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
          return verticalFit && horizontalFit;
        }

        return false;
      }
      /**
       * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
       * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
       * right and bottom).
       *
       * @private
       * @param {?} start Starting point from which the overlay is pushed.
       * @param {?} overlay Dimensions of the overlay.
       * @param {?} scrollPosition Current viewport scroll position.
       * @return {?} The point at which to position the overlay after pushing. This is effectively a new
       *     originPoint.
       */


      _pushOverlayOnScreen(start, overlay, scrollPosition) {
        // If the position is locked and we've pushed the overlay already, reuse the previous push
        // amount, rather than pushing it again. If we were to continue pushing, the element would
        // remain in the viewport, which goes against the expectations when position locking is enabled.
        if (this._previousPushAmount && this._positionLocked) {
          return {
            x: start.x + this._previousPushAmount.x,
            y: start.y + this._previousPushAmount.y
          };
        }
        /** @type {?} */


        const viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
        // side, which we'll use to decide which direction to push it.

        /** @type {?} */

        const overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
        /** @type {?} */

        const overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
        /** @type {?} */

        const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        /** @type {?} */

        const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

        /** @type {?} */

        let pushX = 0;
        /** @type {?} */

        let pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
        // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
        // viewport and allow for the trailing end of the overlay to go out of bounds.

        if (overlay.width <= viewport.width) {
          pushX = overflowLeft || -overflowRight;
        } else {
          pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
        }

        if (overlay.height <= viewport.height) {
          pushY = overflowTop || -overflowBottom;
        } else {
          pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
        }

        this._previousPushAmount = {
          x: pushX,
          y: pushY
        };
        return {
          x: start.x + pushX,
          y: start.y + pushY
        };
      }
      /**
       * Applies a computed position to the overlay and emits a position change.
       * @private
       * @param {?} position The position preference
       * @param {?} originPoint The point on the origin element where the overlay is connected.
       * @return {?}
       */


      _applyPosition(position, originPoint) {
        this._setTransformOrigin(position);

        this._setOverlayElementStyles(originPoint, position);

        this._setBoundingBoxStyles(originPoint, position);

        if (position.panelClass) {
          this._addPanelClasses(position.panelClass);
        } // Save the last connected position in case the position needs to be re-calculated.


        this._lastPosition = position; // Notify that the position has been changed along with its change properties.
        // We only emit if we've got any subscriptions, because the scroll visibility
        // calculcations can be somewhat expensive.

        if (this._positionChanges.observers.length) {
          /** @type {?} */
          const scrollableViewProperties = this._getScrollVisibility();
          /** @type {?} */


          const changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

          this._positionChanges.next(changeEvent);
        }

        this._isInitialRender = false;
      }
      /**
       * Sets the transform origin based on the configured selector and the passed-in position.
       * @private
       * @param {?} position
       * @return {?}
       */


      _setTransformOrigin(position) {
        if (!this._transformOriginSelector) {
          return;
        }
        /** @type {?} */


        const elements =
        /** @type {?} */
        this._boundingBox.querySelectorAll(this._transformOriginSelector);
        /** @type {?} */


        let xOrigin;
        /** @type {?} */

        let yOrigin = position.overlayY;

        if (position.overlayX === 'center') {
          xOrigin = 'center';
        } else if (this._isRtl()) {
          xOrigin = position.overlayX === 'start' ? 'right' : 'left';
        } else {
          xOrigin = position.overlayX === 'start' ? 'left' : 'right';
        }

        for (let i = 0; i < elements.length; i++) {
          elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
        }
      }
      /**
       * Gets the position and size of the overlay's sizing container.
       *
       * This method does no measuring and applies no styles so that we can cheaply compute the
       * bounds for all positions and choose the best fit based on these results.
       * @private
       * @param {?} origin
       * @param {?} position
       * @return {?}
       */


      _calculateBoundingBoxRect(origin, position) {
        /** @type {?} */
        const viewport = this._viewportRect;
        /** @type {?} */

        const isRtl = this._isRtl();
        /** @type {?} */


        let height;
        /** @type {?} */

        let top;
        /** @type {?} */

        let bottom;

        if (position.overlayY === 'top') {
          // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
          top = origin.y;
          height = viewport.height - top + this._viewportMargin;
        } else if (position.overlayY === 'bottom') {
          // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
          // the viewport margin back in, because the viewport rect is narrowed down to remove the
          // margin, whereas the `origin` position is calculated based on its `ClientRect`.
          bottom = viewport.height - origin.y + this._viewportMargin * 2;
          height = viewport.height - bottom + this._viewportMargin;
        } else {
          // If neither top nor bottom, it means that the overlay is vertically centered on the
          // origin point. Note that we want the position relative to the viewport, rather than
          // the page, which is why we don't use something like `viewport.bottom - origin.y` and
          // `origin.y - viewport.top`.

          /** @type {?} */
          const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
          /** @type {?} */

          const previousHeight = this._lastBoundingBoxSize.height;
          height = smallestDistanceToViewportEdge * 2;
          top = origin.y - smallestDistanceToViewportEdge;

          if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
            top = origin.y - previousHeight / 2;
          }
        } // The overlay is opening 'right-ward' (the content flows to the right).

        /** @type {?} */


        const isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

        /** @type {?} */

        const isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
        /** @type {?} */

        let width;
        /** @type {?} */

        let left;
        /** @type {?} */

        let right;

        if (isBoundedByLeftViewportEdge) {
          right = viewport.width - origin.x + this._viewportMargin;
          width = origin.x - this._viewportMargin;
        } else if (isBoundedByRightViewportEdge) {
          left = origin.x;
          width = viewport.right - origin.x;
        } else {
          // If neither start nor end, it means that the overlay is horizontally centered on the
          // origin point. Note that we want the position relative to the viewport, rather than
          // the page, which is why we don't use something like `viewport.right - origin.x` and
          // `origin.x - viewport.left`.

          /** @type {?} */
          const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
          /** @type {?} */

          const previousWidth = this._lastBoundingBoxSize.width;
          width = smallestDistanceToViewportEdge * 2;
          left = origin.x - smallestDistanceToViewportEdge;

          if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
            left = origin.x - previousWidth / 2;
          }
        }

        return {
          top:
          /** @type {?} */
          top,
          left:
          /** @type {?} */
          left,
          bottom:
          /** @type {?} */
          bottom,
          right:
          /** @type {?} */
          right,
          width,
          height
        };
      }
      /**
       * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
       * origin's connection point and stetches to the bounds of the viewport.
       *
       * @private
       * @param {?} origin The point on the origin element where the overlay is connected.
       * @param {?} position The position preference
       * @return {?}
       */


      _setBoundingBoxStyles(origin, position) {
        /** @type {?} */
        const boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
        // when applying a new size.


        if (!this._isInitialRender && !this._growAfterOpen) {
          boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
          boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        /** @type {?} */


        const styles =
        /** @type {?} */
        {};

        if (this._hasExactPosition()) {
          styles.top = styles.left = '0';
          styles.bottom = styles.right = '';
          styles.width = styles.height = '100%';
        } else {
          /** @type {?} */
          const maxHeight = this._overlayRef.getConfig().maxHeight;
          /** @type {?} */


          const maxWidth = this._overlayRef.getConfig().maxWidth;

          styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.height);
          styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.top);
          styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.bottom);
          styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.width);
          styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.left);
          styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

          if (position.overlayX === 'center') {
            styles.alignItems = 'center';
          } else {
            styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
          }

          if (position.overlayY === 'center') {
            styles.justifyContent = 'center';
          } else {
            styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
          }

          if (maxHeight) {
            styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxHeight);
          }

          if (maxWidth) {
            styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(maxWidth);
          }
        }

        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(
        /** @type {?} */
        this._boundingBox.style, styles);
      }
      /**
       * Resets the styles for the bounding box so that a new positioning can be computed.
       * @private
       * @return {?}
       */


      _resetBoundingBoxStyles() {
        extendStyles(
        /** @type {?} */
        this._boundingBox.style,
        /** @type {?} */
        {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          height: '',
          width: '',
          alignItems: '',
          justifyContent: ''
        });
      }
      /**
       * Resets the styles for the overlay pane so that a new positioning can be computed.
       * @private
       * @return {?}
       */


      _resetOverlayElementStyles() {
        extendStyles(this._pane.style,
        /** @type {?} */
        {
          top: '',
          left: '',
          bottom: '',
          right: '',
          position: '',
          transform: ''
        });
      }
      /**
       * Sets positioning styles to the overlay element.
       * @private
       * @param {?} originPoint
       * @param {?} position
       * @return {?}
       */


      _setOverlayElementStyles(originPoint, position) {
        /** @type {?} */
        const styles =
        /** @type {?} */
        {};

        if (this._hasExactPosition()) {
          /** @type {?} */
          const scrollPosition = this._viewportRuler.getViewportScrollPosition();

          extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
          extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        } else {
          styles.position = 'static';
        } // Use a transform to apply the offsets. We do this because the `center` positions rely on
        // being in the normal flex flow and setting a `top` / `left` at all will completely throw
        // off the position. We also can't use margins, because they won't have an effect in some
        // cases where the element doesn't have anything to "push off of". Finally, this works
        // better both with flexible and non-flexible positioning.

        /** @type {?} */


        let transformString = '';
        /** @type {?} */

        let offsetX = this._getOffset(position, 'x');
        /** @type {?} */


        let offsetY = this._getOffset(position, 'y');

        if (offsetX) {
          transformString += "translateX(".concat(offsetX, "px) ");
        }

        if (offsetY) {
          transformString += "translateY(".concat(offsetY, "px)");
        }

        styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
        // we need these values to both be set to "100%" for the automatic flexible sizing to work.
        // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.

        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight) {
          styles.maxHeight = '';
        }

        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth) {
          styles.maxWidth = '';
        }

        extendStyles(this._pane.style, styles);
      }
      /**
       * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
       * @private
       * @param {?} position
       * @param {?} originPoint
       * @param {?} scrollPosition
       * @return {?}
       */


      _getExactOverlayY(position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the
        // preferred position has changed since the last `apply`.

        /** @type {?} */
        let styles =
        /** @type {?} */
        {
          top: null,
          bottom: null
        };
        /** @type {?} */

        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

        if (this._isPushed) {
          overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        /** @type {?} */


        let virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
        // autocomplete), mobile browsers will shift everything in order to put the input in the middle
        // of the screen and to make space for the virtual keyboard. We need to account for this offset,
        // otherwise our positioning will be thrown off.


        overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
        // above or below the origin and the direction in which the element will expand.

        if (position.overlayY === 'bottom') {
          // When using `bottom`, we adjust the y position such that it is the distance
          // from the bottom of the viewport rather than the top.

          /** @type {?} */
          const documentHeight =
          /** @type {?} */
          this._document.documentElement.clientHeight;
          styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
        } else {
          styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.y);
        }

        return styles;
      }
      /**
       * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
       * @private
       * @param {?} position
       * @param {?} originPoint
       * @param {?} scrollPosition
       * @return {?}
       */


      _getExactOverlayX(position, originPoint, scrollPosition) {
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.

        /** @type {?} */
        let styles =
        /** @type {?} */
        {
          left: null,
          right: null
        };
        /** @type {?} */

        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

        if (this._isPushed) {
          overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.

        /** @type {?} */


        let horizontalStyleProperty;

        if (this._isRtl()) {
          horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
        } else {
          horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
        } // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.


        if (horizontalStyleProperty === 'right') {
          /** @type {?} */
          const documentWidth =
          /** @type {?} */
          this._document.documentElement.clientWidth;
          styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
        } else {
          styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceCssPixelValue"])(overlayPoint.x);
        }

        return styles;
      }
      /**
       * Gets the view properties of the trigger and overlay, including whether they are clipped
       * or completely outside the view of any of the strategy's scrollables.
       * @private
       * @return {?}
       */


      _getScrollVisibility() {
        // Note: needs fresh rects since the position could've changed.

        /** @type {?} */
        const originBounds = this._getOriginRect();
        /** @type {?} */


        const overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
        // every time, we should be able to use the scrollTop of the containers if the size of those
        // containers hasn't changed.

        /** @type {?} */


        const scrollContainerBounds = this._scrollables.map(
        /**
        * @param {?} scrollable
        * @return {?}
        */
        scrollable => {
          return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });

        return {
          isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
          isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
          isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
          isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
        };
      }
      /**
       * Subtracts the amount that an element is overflowing on an axis from its length.
       * @private
       * @param {?} length
       * @param {...?} overflows
       * @return {?}
       */


      _subtractOverflows(length, ...overflows) {
        return overflows.reduce(
        /**
        * @param {?} currentValue
        * @param {?} currentOverflow
        * @return {?}
        */
        (currentValue, currentOverflow) => {
          return currentValue - Math.max(currentOverflow, 0);
        }, length);
      }
      /**
       * Narrows the given viewport rect by the current _viewportMargin.
       * @private
       * @return {?}
       */


      _getNarrowedViewportRect() {
        // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
        // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
        // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
        // and `innerHeight` that do. This is necessary, because the overlay container uses
        // 100% `width` and `height` which don't include the scrollbar either.

        /** @type {?} */
        const width =
        /** @type {?} */
        this._document.documentElement.clientWidth;
        /** @type {?} */

        const height =
        /** @type {?} */
        this._document.documentElement.clientHeight;
        /** @type {?} */

        const scrollPosition = this._viewportRuler.getViewportScrollPosition();

        return {
          top: scrollPosition.top + this._viewportMargin,
          left: scrollPosition.left + this._viewportMargin,
          right: scrollPosition.left + width - this._viewportMargin,
          bottom: scrollPosition.top + height - this._viewportMargin,
          width: width - 2 * this._viewportMargin,
          height: height - 2 * this._viewportMargin
        };
      }
      /**
       * Whether the we're dealing with an RTL context
       * @private
       * @return {?}
       */


      _isRtl() {
        return this._overlayRef.getDirection() === 'rtl';
      }
      /**
       * Determines whether the overlay uses exact or flexible positioning.
       * @private
       * @return {?}
       */


      _hasExactPosition() {
        return !this._hasFlexibleDimensions || this._isPushed;
      }
      /**
       * Retrieves the offset of a position along the x or y axis.
       * @private
       * @param {?} position
       * @param {?} axis
       * @return {?}
       */


      _getOffset(position, axis) {
        if (axis === 'x') {
          // We don't do something like `position['offset' + axis]` in
          // order to avoid breking minifiers that rename properties.
          return position.offsetX == null ? this._offsetX : position.offsetX;
        }

        return position.offsetY == null ? this._offsetY : position.offsetY;
      }
      /**
       * Validates that the current position match the expected values.
       * @private
       * @return {?}
       */


      _validatePositions() {
        if (!this._preferredPositions.length) {
          throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
        } // TODO(crisbeto): remove these once Angular's template type
        // checking is advanced enough to catch these cases.


        this._preferredPositions.forEach(
        /**
        * @param {?} pair
        * @return {?}
        */
        pair => {
          validateHorizontalPosition('originX', pair.originX);
          validateVerticalPosition('originY', pair.originY);
          validateHorizontalPosition('overlayX', pair.overlayX);
          validateVerticalPosition('overlayY', pair.overlayY);
        });
      }
      /**
       * Adds a single CSS class or an array of classes on the overlay panel.
       * @private
       * @param {?} cssClasses
       * @return {?}
       */


      _addPanelClasses(cssClasses) {
        if (this._pane) {
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceArray"])(cssClasses).forEach(
          /**
          * @param {?} cssClass
          * @return {?}
          */
          cssClass => {
            if (cssClass !== '' && this._appliedPanelClasses.indexOf(cssClass) === -1) {
              this._appliedPanelClasses.push(cssClass);

              this._pane.classList.add(cssClass);
            }
          });
        }
      }
      /**
       * Clears the classes that the position strategy has applied from the overlay panel.
       * @private
       * @return {?}
       */


      _clearPanelClasses() {
        if (this._pane) {
          this._appliedPanelClasses.forEach(
          /**
          * @param {?} cssClass
          * @return {?}
          */
          cssClass => {
            this._pane.classList.remove(cssClass);
          });

          this._appliedPanelClasses = [];
        }
      }
      /**
       * Returns the ClientRect of the current origin.
       * @private
       * @return {?}
       */


      _getOriginRect() {
        /** @type {?} */
        const origin = this._origin;

        if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]) {
          return origin.nativeElement.getBoundingClientRect();
        }

        if (origin instanceof HTMLElement) {
          return origin.getBoundingClientRect();
        }
        /** @type {?} */


        const width = origin.width || 0;
        /** @type {?} */

        const height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

        return {
          top: origin.y,
          bottom: origin.y + height,
          left: origin.x,
          right: origin.x + width,
          height,
          width
        };
      }

    }
    /**
     * Shallow-extends a stylesheet object with another stylesheet object.
     * @param {?} dest
     * @param {?} source
     * @return {?}
     */


    function extendStyles(dest, source) {
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          dest[key] = source[key];
        }
      }

      return dest;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative to some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
     * \@breaking-change 8.0.0
     */


    class ConnectedPositionStrategy {
      /**
       * @param {?} originPos
       * @param {?} overlayPos
       * @param {?} connectedTo
       * @param {?} viewportRuler
       * @param {?} document
       * @param {?} platform
       * @param {?} overlayContainer
       */
      constructor(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.

        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
      }
      /**
       * Whether the we're dealing with an RTL context
       * @return {?}
       */


      get _isRtl() {
        return this._overlayRef.getDirection() === 'rtl';
      }
      /**
       * Emits an event when the connection point changes.
       * @return {?}
       */


      get onPositionChange() {
        return this._positionStrategy.positionChanges;
      }
      /**
       * Ordered list of preferred positions, from most to least desirable.
       * @return {?}
       */


      get positions() {
        return this._preferredPositions;
      }
      /**
       * Attach this position strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      attach(overlayRef) {
        this._overlayRef = overlayRef;

        this._positionStrategy.attach(overlayRef);

        if (this._direction) {
          overlayRef.setDirection(this._direction);
          this._direction = null;
        }
      }
      /**
       * Disposes all resources used by the position strategy.
       * @return {?}
       */


      dispose() {
        this._positionStrategy.dispose();
      }
      /**
       * \@docs-private
       * @return {?}
       */


      detach() {
        this._positionStrategy.detach();
      }
      /**
       * Updates the position of the overlay element, using whichever preferred position relative
       * to the origin fits on-screen.
       * \@docs-private
       * @return {?}
       */


      apply() {
        this._positionStrategy.apply();
      }
      /**
       * Re-positions the overlay element with the trigger in its last calculated position,
       * even if a position higher in the "preferred positions" list would now fit. This
       * allows one to re-align the panel without changing the orientation of the panel.
       * @return {?}
       */


      recalculateLastPosition() {
        this._positionStrategy.reapplyLastPosition();
      }
      /**
       * Sets the list of Scrollable containers that host the origin element so that
       * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
       * Scrollable must be an ancestor element of the strategy's origin element.
       * @param {?} scrollables
       * @return {?}
       */


      withScrollableContainers(scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
      }
      /**
       * Adds a new preferred fallback position.
       * @template THIS
       * @this {THIS}
       * @param {?} originPos
       * @param {?} overlayPos
       * @param {?=} offsetX
       * @param {?=} offsetY
       * @return {THIS}
       */


      withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
        /** @type {?} */
        const position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

        /** @type {?} */
        this._preferredPositions.push(position);

        /** @type {?} */
        this._positionStrategy.withPositions(
        /** @type {?} */
        this._preferredPositions);

        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets the layout direction so the overlay's position can be adjusted to match.
       * @template THIS
       * @this {THIS}
       * @param {?} dir New layout direction.
       * @return {THIS}
       */


      withDirection(dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if (
        /** @type {?} */
        this._overlayRef) {
          /** @type {?} */
          this._overlayRef.setDirection(dir);
        } else {
          /** @type {?} */
          this._direction = dir;
        }

        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets an offset for the overlay's connection point on the x-axis
       * @template THIS
       * @this {THIS}
       * @param {?} offset New offset in the X axis.
       * @return {THIS}
       */


      withOffsetX(offset) {
        /** @type {?} */
        this._positionStrategy.withDefaultOffsetX(offset);

        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets an offset for the overlay's connection point on the y-axis
       * @template THIS
       * @this {THIS}
       * @param {?} offset New offset in the Y axis.
       * @return {THIS}
       */


      withOffsetY(offset) {
        /** @type {?} */
        this._positionStrategy.withDefaultOffsetY(offset);

        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets whether the overlay's position should be locked in after it is positioned
       * initially. When an overlay is locked in, it won't attempt to reposition itself
       * when the position is re-applied (e.g. when the user scrolls away).
       * @template THIS
       * @this {THIS}
       * @param {?} isLocked Whether the overlay should locked in.
       * @return {THIS}
       */


      withLockedPosition(isLocked) {
        /** @type {?} */
        this._positionStrategy.withLockedPosition(isLocked);

        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Overwrites the current set of positions with an array of new ones.
       * @template THIS
       * @this {THIS}
       * @param {?} positions Position pairs to be set on the strategy.
       * @return {THIS}
       */


      withPositions(positions) {
        /** @type {?} */
        this._preferredPositions = positions.slice();

        /** @type {?} */
        this._positionStrategy.withPositions(
        /** @type {?} */
        this._preferredPositions);

        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets the origin element, relative to which to position the overlay.
       * @template THIS
       * @this {THIS}
       * @param {?} origin Reference to the new origin element.
       * @return {THIS}
       */


      setOrigin(origin) {
        /** @type {?} */
        this._positionStrategy.setOrigin(origin);

        return (
          /** @type {?} */
          this
        );
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to be added to the overlay pane wrapper.
     * @type {?}
     */


    const wrapperClass = 'cdk-global-overlay-wrapper';
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * explicit position relative to the browser's viewport. We use flexbox, instead of
     * transforms, in order to avoid issues with subpixel rendering which can cause the
     * element to become blurry.
     */

    class GlobalPositionStrategy {
      constructor() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
      }
      /**
       * @param {?} overlayRef
       * @return {?}
       */


      attach(overlayRef) {
        /** @type {?} */
        const config = overlayRef.getConfig();
        this._overlayRef = overlayRef;

        if (this._width && !config.width) {
          overlayRef.updateSize({
            width: this._width
          });
        }

        if (this._height && !config.height) {
          overlayRef.updateSize({
            height: this._height
          });
        }

        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
      }
      /**
       * Sets the top position of the overlay. Clears any previously set vertical position.
       * @template THIS
       * @this {THIS}
       * @param {?=} value New top offset.
       * @return {THIS}
       */


      top(value = '') {
        /** @type {?} */
        this._bottomOffset = '';

        /** @type {?} */
        this._topOffset = value;

        /** @type {?} */
        this._alignItems = 'flex-start';
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets the left position of the overlay. Clears any previously set horizontal position.
       * @template THIS
       * @this {THIS}
       * @param {?=} value New left offset.
       * @return {THIS}
       */


      left(value = '') {
        /** @type {?} */
        this._rightOffset = '';

        /** @type {?} */
        this._leftOffset = value;

        /** @type {?} */
        this._justifyContent = 'flex-start';
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets the bottom position of the overlay. Clears any previously set vertical position.
       * @template THIS
       * @this {THIS}
       * @param {?=} value New bottom offset.
       * @return {THIS}
       */


      bottom(value = '') {
        /** @type {?} */
        this._topOffset = '';

        /** @type {?} */
        this._bottomOffset = value;

        /** @type {?} */
        this._alignItems = 'flex-end';
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets the right position of the overlay. Clears any previously set horizontal position.
       * @template THIS
       * @this {THIS}
       * @param {?=} value New right offset.
       * @return {THIS}
       */


      right(value = '') {
        /** @type {?} */
        this._leftOffset = '';

        /** @type {?} */
        this._rightOffset = value;

        /** @type {?} */
        this._justifyContent = 'flex-end';
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets the overlay width and clears any previously set width.
       * @deprecated Pass the `width` through the `OverlayConfig`.
       * \@breaking-change 8.0.0
       * @template THIS
       * @this {THIS}
       * @param {?=} value New width for the overlay
       * @return {THIS}
       */


      width(value = '') {
        if (
        /** @type {?} */
        this._overlayRef) {
          /** @type {?} */
          this._overlayRef.updateSize({
            width: value
          });
        } else {
          /** @type {?} */
          this._width = value;
        }

        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Sets the overlay height and clears any previously set height.
       * @deprecated Pass the `height` through the `OverlayConfig`.
       * \@breaking-change 8.0.0
       * @template THIS
       * @this {THIS}
       * @param {?=} value New height for the overlay
       * @return {THIS}
       */


      height(value = '') {
        if (
        /** @type {?} */
        this._overlayRef) {
          /** @type {?} */
          this._overlayRef.updateSize({
            height: value
          });
        } else {
          /** @type {?} */
          this._height = value;
        }

        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Centers the overlay horizontally with an optional offset.
       * Clears any previously set horizontal position.
       *
       * @template THIS
       * @this {THIS}
       * @param {?=} offset Overlay offset from the horizontal center.
       * @return {THIS}
       */


      centerHorizontally(offset = '') {
        /** @type {?} */
        this.left(offset);

        /** @type {?} */
        this._justifyContent = 'center';
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Centers the overlay vertically with an optional offset.
       * Clears any previously set vertical position.
       *
       * @template THIS
       * @this {THIS}
       * @param {?=} offset Overlay offset from the vertical center.
       * @return {THIS}
       */


      centerVertically(offset = '') {
        /** @type {?} */
        this.top(offset);

        /** @type {?} */
        this._alignItems = 'center';
        return (
          /** @type {?} */
          this
        );
      }
      /**
       * Apply the position to the element.
       * \@docs-private
       * @return {?}
       */


      apply() {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
          return;
        }
        /** @type {?} */


        const styles = this._overlayRef.overlayElement.style;
        /** @type {?} */

        const parentStyles = this._overlayRef.hostElement.style;
        /** @type {?} */

        const config = this._overlayRef.getConfig();

        styles.position = this._cssPosition;
        styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
        styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;

        if (config.width === '100%') {
          parentStyles.justifyContent = 'flex-start';
        } else if (this._justifyContent === 'center') {
          parentStyles.justifyContent = 'center';
        } else if (this._overlayRef.getConfig().direction === 'rtl') {
          // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
          // don't want that because our positioning is explicitly `left` and `right`, hence
          // why we do another inversion to ensure that the overlay stays in the same position.
          // TODO: reconsider this if we add `start` and `end` methods.
          if (this._justifyContent === 'flex-start') {
            parentStyles.justifyContent = 'flex-end';
          } else if (this._justifyContent === 'flex-end') {
            parentStyles.justifyContent = 'flex-start';
          }
        } else {
          parentStyles.justifyContent = this._justifyContent;
        }

        parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
      }
      /**
       * Cleans up the DOM changes from the position strategy.
       * \@docs-private
       * @return {?}
       */


      dispose() {
        if (this._isDisposed || !this._overlayRef) {
          return;
        }
        /** @type {?} */


        const styles = this._overlayRef.overlayElement.style;
        /** @type {?} */

        const parent = this._overlayRef.hostElement;
        /** @type {?} */

        const parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
        this._overlayRef =
        /** @type {?} */
        null;
        this._isDisposed = true;
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Builder for overlay position strategy.
     */


    class OverlayPositionBuilder {
      /**
       * @param {?} _viewportRuler
       * @param {?} _document
       * @param {?} _platform
       * @param {?} _overlayContainer
       */
      constructor(_viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
      }
      /**
       * Creates a global position strategy.
       * @return {?}
       */


      global() {
        return new GlobalPositionStrategy();
      }
      /**
       * Creates a relative position strategy.
       * @deprecated Use `flexibleConnectedTo` instead.
       * \@breaking-change 8.0.0
       * @param {?} elementRef
       * @param {?} originPos
       * @param {?} overlayPos
       * @return {?}
       */


      connectedTo(elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
      }
      /**
       * Creates a flexible position strategy.
       * @param {?} origin Origin relative to which to position the overlay.
       * @return {?}
       */


      flexibleConnectedTo(origin) {
        return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
      }

    }

    OverlayPositionBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    OverlayPositionBuilder.ctorParameters = () => [{
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
    }, {
      type: OverlayContainer
    }];
    /** @nocollapse */


    OverlayPositionBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function OverlayPositionBuilder_Factory() {
        return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(OverlayContainer));
      },
      token: OverlayPositionBuilder,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Next overlay unique ID.
     * @type {?}
     */

    let nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because the ComponentFactoryResolver
    // it needs is different based on where OverlayModule is imported.

    /**
     * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
     * used as a low-level building block for other components. Dialogs, tooltips, menus,
     * selects, etc. can all be built using overlays. The service should primarily be used by authors
     * of re-usable components rather than developers building end-user applications.
     *
     * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
     */

    class Overlay {
      /**
       * @param {?} scrollStrategies
       * @param {?} _overlayContainer
       * @param {?} _componentFactoryResolver
       * @param {?} _positionBuilder
       * @param {?} _keyboardDispatcher
       * @param {?} _injector
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?} _directionality
       * @param {?=} _location
       */
      constructor(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
      }
      /**
       * Creates an overlay.
       * @param {?=} config Configuration applied to the overlay.
       * @return {?} Reference to the created overlay.
       */


      create(config) {
        /** @type {?} */
        const host = this._createHostElement();
        /** @type {?} */


        const pane = this._createPaneElement(host);
        /** @type {?} */


        const portalOutlet = this._createPortalOutlet(pane);
        /** @type {?} */


        const overlayConfig = new OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this._directionality.value;
        return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
      }
      /**
       * Gets a position builder that can be used, via fluent API,
       * to construct and configure a position strategy.
       * @return {?} An overlay position builder.
       */


      position() {
        return this._positionBuilder;
      }
      /**
       * Creates the DOM element for an overlay and appends it to the overlay container.
       * @private
       * @param {?} host
       * @return {?} Newly-created pane element
       */


      _createPaneElement(host) {
        /** @type {?} */
        const pane = this._document.createElement('div');

        pane.id = "cdk-overlay-".concat(nextUniqueId++);
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
      }
      /**
       * Creates the host element that wraps around an overlay
       * and can be used for advanced positioning.
       * @private
       * @return {?} Newly-create host element.
       */


      _createHostElement() {
        /** @type {?} */
        const host = this._document.createElement('div');

        this._overlayContainer.getContainerElement().appendChild(host);

        return host;
      }
      /**
       * Create a DomPortalOutlet into which the overlay content can be loaded.
       * @private
       * @param {?} pane The DOM element to turn into a portal outlet.
       * @return {?} A portal outlet for the given DOM element.
       */


      _createPortalOutlet(pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this._appRef) {
          this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]);
        }

        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector);
      }

    }

    Overlay.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }];
    /** @nocollapse */

    Overlay.ctorParameters = () => [{
      type: ScrollStrategyOptions
    }, {
      type: OverlayContainer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]
    }, {
      type: OverlayPositionBuilder
    }, {
      type: OverlayKeyboardDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default set of positions for the overlay. Follows the behavior of a dropdown.
     * @type {?}
     */


    const defaultPositionList = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }];
    /**
     * Injection token that determines the scroll handling while the connected overlay is open.
     * @type {?}
     */

    const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
    /**
     * Directive applied to an element to make it usable as an origin for an Overlay using a
     * ConnectedPositionStrategy.
     */

    class CdkOverlayOrigin {
      /**
       * @param {?} elementRef
       */
      constructor(elementRef) {
        this.elementRef = elementRef;
      }

    }

    CdkOverlayOrigin.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
        exportAs: 'cdkOverlayOrigin'
      }]
    }];
    /** @nocollapse */

    CdkOverlayOrigin.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }];
    /**
     * Directive to facilitate declarative creation of an
     * Overlay using a FlexibleConnectedPositionStrategy.
     */


    class CdkConnectedOverlay {
      // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.

      /**
       * @param {?} _overlay
       * @param {?} templateRef
       * @param {?} viewContainerRef
       * @param {?} scrollStrategyFactory
       * @param {?} _dir
       */
      constructor(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */

        this.viewportMargin = 0;
        /**
         * Whether the overlay is open.
         */

        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */

        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */

        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */

        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */

        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when there are keyboard events that are targeted at the overlay.
         */

        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
      }
      /**
       * The offset in pixels for the overlay connection point on the x-axis
       * @return {?}
       */


      get offsetX() {
        return this._offsetX;
      }
      /**
       * @param {?} offsetX
       * @return {?}
       */


      set offsetX(offsetX) {
        this._offsetX = offsetX;

        if (this._position) {
          this._updatePositionStrategy(this._position);
        }
      }
      /**
       * The offset in pixels for the overlay connection point on the y-axis
       * @return {?}
       */


      get offsetY() {
        return this._offsetY;
      }
      /**
       * @param {?} offsetY
       * @return {?}
       */


      set offsetY(offsetY) {
        this._offsetY = offsetY;

        if (this._position) {
          this._updatePositionStrategy(this._position);
        }
      }
      /**
       * Whether or not the overlay should attach a backdrop.
       * @return {?}
       */


      get hasBackdrop() {
        return this._hasBackdrop;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set hasBackdrop(value) {
        this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
      }
      /**
       * Whether or not the overlay should be locked when scrolling.
       * @return {?}
       */


      get lockPosition() {
        return this._lockPosition;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set lockPosition(value) {
        this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
      }
      /**
       * Whether the overlay's width and height can be constrained to fit within the viewport.
       * @return {?}
       */


      get flexibleDimensions() {
        return this._flexibleDimensions;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set flexibleDimensions(value) {
        this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
      }
      /**
       * Whether the overlay can grow after the initial open when flexible positioning is turned on.
       * @return {?}
       */


      get growAfterOpen() {
        return this._growAfterOpen;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set growAfterOpen(value) {
        this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
      }
      /**
       * Whether the overlay can be pushed on-screen if none of the provided positions fit.
       * @return {?}
       */


      get push() {
        return this._push;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set push(value) {
        this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
      }
      /**
       * The associated overlay reference.
       * @return {?}
       */


      get overlayRef() {
        return this._overlayRef;
      }
      /**
       * The element's layout direction.
       * @return {?}
       */


      get dir() {
        return this._dir ? this._dir.value : 'ltr';
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        if (this._overlayRef) {
          this._overlayRef.dispose();
        }

        this._backdropSubscription.unsubscribe();
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      ngOnChanges(changes) {
        if (this._position) {
          this._updatePositionStrategy(this._position);

          this._overlayRef.updateSize({
            width: this.width,
            minWidth: this.minWidth,
            height: this.height,
            minHeight: this.minHeight
          });

          if (changes['origin'] && this.open) {
            this._position.apply();
          }
        }

        if (changes['open']) {
          this.open ? this._attachOverlay() : this._detachOverlay();
        }
      }
      /**
       * Creates an overlay
       * @private
       * @return {?}
       */


      _createOverlay() {
        if (!this.positions || !this.positions.length) {
          this.positions = defaultPositionList;
        }

        this._overlayRef = this._overlay.create(this._buildConfig());

        this._overlayRef.keydownEvents().subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        event => {
          this.overlayKeydown.next(event);

          if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
            event.preventDefault();

            this._detachOverlay();
          }
        });
      }
      /**
       * Builds the overlay config based on the directive's inputs
       * @private
       * @return {?}
       */


      _buildConfig() {
        /** @type {?} */
        const positionStrategy = this._position = this._createPositionStrategy();
        /** @type {?} */


        const overlayConfig = new OverlayConfig({
          direction: this._dir,
          positionStrategy,
          scrollStrategy: this.scrollStrategy,
          hasBackdrop: this.hasBackdrop
        });

        if (this.width || this.width === 0) {
          overlayConfig.width = this.width;
        }

        if (this.height || this.height === 0) {
          overlayConfig.height = this.height;
        }

        if (this.minWidth || this.minWidth === 0) {
          overlayConfig.minWidth = this.minWidth;
        }

        if (this.minHeight || this.minHeight === 0) {
          overlayConfig.minHeight = this.minHeight;
        }

        if (this.backdropClass) {
          overlayConfig.backdropClass = this.backdropClass;
        }

        if (this.panelClass) {
          overlayConfig.panelClass = this.panelClass;
        }

        return overlayConfig;
      }
      /**
       * Updates the state of a position strategy, based on the values of the directive inputs.
       * @private
       * @param {?} positionStrategy
       * @return {?}
       */


      _updatePositionStrategy(positionStrategy) {
        /** @type {?} */
        const positions = this.positions.map(
        /**
        * @param {?} currentPosition
        * @return {?}
        */
        currentPosition => ({
          originX: currentPosition.originX,
          originY: currentPosition.originY,
          overlayX: currentPosition.overlayX,
          overlayY: currentPosition.overlayY,
          offsetX: currentPosition.offsetX || this.offsetX,
          offsetY: currentPosition.offsetY || this.offsetY,
          panelClass: currentPosition.panelClass || undefined
        }));
        return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition);
      }
      /**
       * Returns the position strategy of the overlay to be set on the overlay config
       * @private
       * @return {?}
       */


      _createPositionStrategy() {
        /** @type {?} */
        const strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

        this._updatePositionStrategy(strategy);

        strategy.positionChanges.subscribe(
        /**
        * @param {?} p
        * @return {?}
        */
        p => this.positionChange.emit(p));
        return strategy;
      }
      /**
       * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
       * @private
       * @return {?}
       */


      _attachOverlay() {
        if (!this._overlayRef) {
          this._createOverlay();
        } else {
          // Update the overlay size, in case the directive's inputs have changed
          this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
        }

        if (!this._overlayRef.hasAttached()) {
          this._overlayRef.attach(this._templatePortal);

          this.attach.emit();
        }

        if (this.hasBackdrop) {
          this._backdropSubscription = this._overlayRef.backdropClick().subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          event => {
            this.backdropClick.emit(event);
          });
        } else {
          this._backdropSubscription.unsubscribe();
        }
      }
      /**
       * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
       * @private
       * @return {?}
       */


      _detachOverlay() {
        if (this._overlayRef) {
          this._overlayRef.detach();

          this.detach.emit();
        }

        this._backdropSubscription.unsubscribe();
      }

    }

    CdkConnectedOverlay.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
        exportAs: 'cdkConnectedOverlay'
      }]
    }];
    /** @nocollapse */

    CdkConnectedOverlay.ctorParameters = () => [{
      type: Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }]
    }];

    CdkConnectedOverlay.propDecorators = {
      origin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayOrigin']
      }],
      positions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayPositions']
      }],
      offsetX: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayOffsetX']
      }],
      offsetY: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayOffsetY']
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayWidth']
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayHeight']
      }],
      minWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayMinWidth']
      }],
      minHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayMinHeight']
      }],
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayBackdropClass']
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayPanelClass']
      }],
      viewportMargin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayViewportMargin']
      }],
      scrollStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayScrollStrategy']
      }],
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayOpen']
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayHasBackdrop']
      }],
      lockPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayLockPosition']
      }],
      flexibleDimensions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayFlexibleDimensions']
      }],
      growAfterOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayGrowAfterOpen']
      }],
      push: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkConnectedOverlayPush']
      }],
      backdropClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      positionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      attach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      detach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      overlayKeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        () => overlay.scrollStrategies.reposition()
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
      provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class OverlayModule {}

    OverlayModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
        exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"]],
        declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
        providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
      }]
    }];
    /**
     * @deprecated Use `OverlayModule` instead.
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    const OVERLAY_PROVIDERS = [Overlay, OverlayPositionBuilder, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["VIEWPORT_RULER_PROVIDER"], OVERLAY_CONTAINER_PROVIDER, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Alternative to OverlayContainer that supports correct displaying of overlay elements in
     * Fullscreen mode
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
     *
     * Should be provided in the root component.
     */

    class FullscreenOverlayContainer extends OverlayContainer {
      /**
       * @param {?} _document
       */
      constructor(_document) {
        super(_document);
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        super.ngOnDestroy();

        if (this._fullScreenEventName && this._fullScreenListener) {
          this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
        }
      }
      /**
       * @protected
       * @return {?}
       */


      _createContainer() {
        super._createContainer();

        this._adjustParentForFullscreenChange();

        this._addFullscreenChangeListener(
        /**
        * @return {?}
        */
        () => this._adjustParentForFullscreenChange());
      }
      /**
       * @private
       * @return {?}
       */


      _adjustParentForFullscreenChange() {
        if (!this._containerElement) {
          return;
        }
        /** @type {?} */


        const fullscreenElement = this.getFullscreenElement();
        /** @type {?} */

        const parent = fullscreenElement || this._document.body;
        parent.appendChild(this._containerElement);
      }
      /**
       * @private
       * @param {?} fn
       * @return {?}
       */


      _addFullscreenChangeListener(fn) {
        /** @type {?} */
        const eventName = this._getEventName();

        if (eventName) {
          if (this._fullScreenListener) {
            this._document.removeEventListener(eventName, this._fullScreenListener);
          }

          this._document.addEventListener(eventName, fn);

          this._fullScreenListener = fn;
        }
      }
      /**
       * @private
       * @return {?}
       */


      _getEventName() {
        if (!this._fullScreenEventName) {
          /** @type {?} */
          const _document =
          /** @type {?} */
          this._document;

          if (_document.fullscreenEnabled) {
            this._fullScreenEventName = 'fullscreenchange';
          } else if (_document.webkitFullscreenEnabled) {
            this._fullScreenEventName = 'webkitfullscreenchange';
          } else if (_document.mozFullScreenEnabled) {
            this._fullScreenEventName = 'mozfullscreenchange';
          } else if (_document.msFullscreenEnabled) {
            this._fullScreenEventName = 'MSFullscreenChange';
          }
        }

        return this._fullScreenEventName;
      }
      /**
       * When the page is put into fullscreen mode, a specific element is specified.
       * Only that element and its children are visible when in fullscreen mode.
       * @return {?}
       */


      getFullscreenElement() {
        /** @type {?} */
        const _document =
        /** @type {?} */
        this._document;
        return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
      }

    }

    FullscreenOverlayContainer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    FullscreenOverlayContainer.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];
    /** @nocollapse */


    FullscreenOverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function FullscreenOverlayContainer_Factory() {
        return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
      },
      token: FullscreenOverlayContainer,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=overlay.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/esm2015/platform.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/platform.js ***!
    \*******************************************************/

  /*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType, _supportsShadowDom */

  /***/
  function node_modulesAngularCdkEsm2015PlatformJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Platform", function () {
      return Platform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformModule", function () {
      return PlatformModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function () {
      return getSupportedInputTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function () {
      return supportsPassiveEventListeners;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function () {
      return normalizePassiveListenerOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function () {
      return supportsScrollBehavior;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function () {
      return getRtlScrollAxisType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function () {
      return RtlScrollAxisType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function () {
      return _supportsShadowDom;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Whether the current platform supports the V8 Break Iterator. The V8 check
    // is necessary to detect all Blink based browsers.

    /** @type {?} */


    let hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      hasV8BreakIterator = typeof Intl !== 'undefined' &&
      /** @type {?} */
      Intl.v8BreakIterator;
    } catch (_a) {
      hasV8BreakIterator = false;
    }
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */


    class Platform {
      /**
       * \@breaking-change 8.0.0 remove optional decorator
       * @param {?=} _platformId
       */
      constructor(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */

        this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */

        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */

        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

        this.BLINK = this.isBrowser && !!(
        /** @type {?} */
        window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current rendering engine is WebKit.
         */
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.

        this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */

        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
        /**
         * Whether the current browser is Firefox.
         */
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.

        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.

        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.

        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
      }

    }

    Platform.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    Platform.ctorParameters = () => [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
      }]
    }];
    /** @nocollapse */


    Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function Platform_Factory() {
        return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8));
      },
      token: Platform,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class PlatformModule {}

    PlatformModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{}]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Cached result Set of input types support by the current browser.
     * @type {?}
     */

    let supportedInputTypes;
    /**
     * Types of `<input>` that *might* be supported.
     * @type {?}
     */

    const candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
    /**
     * @return {?} The input types supported by this browser.
     */

    function getSupportedInputTypes() {
      // Result is cached.
      if (supportedInputTypes) {
        return supportedInputTypes;
      } // We can't check if an input type is not supported until we're on the browser, so say that
      // everything is supported when not on the browser. We don't use `Platform` here since it's
      // just a helper function and can't inject it.


      if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
      }
      /** @type {?} */


      let featureTestInput = document.createElement('input');
      supportedInputTypes = new Set(candidateInputTypes.filter(
      /**
      * @param {?} value
      * @return {?}
      */
      value => {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
      }));
      return supportedInputTypes;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Cached result of whether the user's browser supports passive event listeners.
     * @type {?}
     */


    let supportsPassiveEvents;
    /**
     * Checks whether the user's browser supports passive event listeners.
     * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
     * @return {?}
     */

    function supportsPassiveEventListeners() {
      if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
          window.addEventListener('test',
          /** @type {?} */
          null, Object.defineProperty({}, 'passive', {
            get:
            /**
            * @return {?}
            */
            () => supportsPassiveEvents = true
          }));
        } finally {
          supportsPassiveEvents = supportsPassiveEvents || false;
        }
      }

      return supportsPassiveEvents;
    }
    /**
     * Normalizes an `AddEventListener` object to something that can be passed
     * to `addEventListener` on any browser, no matter whether it supports the
     * `options` parameter.
     * @param {?} options Object to be normalized.
     * @return {?}
     */


    function normalizePassiveListenerOptions(options) {
      return supportsPassiveEventListeners() ? options : !!options.capture;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    const RtlScrollAxisType = {
      /**
       * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
       * all the way right.
       */
      NORMAL: 0,

      /**
       * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
       * all the way right.
       */
      NEGATED: 1,

      /**
       * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
       * all the way right.
       */
      INVERTED: 2
    };
    RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
    RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
    RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
    /**
     * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
     * @type {?}
     */

    let rtlScrollAxisType;
    /**
     * Check whether the browser supports scroll behaviors.
     * @return {?}
     */

    function supportsScrollBehavior() {
      return !!(typeof document == 'object' && 'scrollBehavior' in
      /** @type {?} */
      document.documentElement.style);
    }
    /**
     * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
     * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
     * @return {?}
     */


    function getRtlScrollAxisType() {
      // We can't check unless we're on the browser. Just assume 'normal' if we're not.
      if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
      }

      if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.

        /** @type {?} */
        const scrollContainer = document.createElement('div');
        /** @type {?} */

        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */

        const content = document.createElement('div');
        /** @type {?} */

        const contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.

        if (scrollContainer.scrollLeft === 0) {
          // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
          // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
          // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
          // return 0 when we read it again.
          scrollContainer.scrollLeft = 1;
          rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }

        /** @type {?} */
        scrollContainer.parentNode.removeChild(scrollContainer);
      }

      return rtlScrollAxisType;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    let shadowDomIsSupported;
    /**
     * Checks whether the user's browser support Shadow DOM.
     * @return {?}
     */

    function _supportsShadowDom() {
      if (shadowDomIsSupported == null) {
        /** @type {?} */
        const head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (
        /** @type {?} */
        head.createShadowRoot || head.attachShadow));
      }

      return shadowDomIsSupported;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=platform.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/esm2015/portal.js":
  /*!*****************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/portal.js ***!
    \*****************************************************/

  /*! exports provided: Portal, ComponentPortal, TemplatePortal, BasePortalOutlet, BasePortalHost, DomPortalOutlet, DomPortalHost, CdkPortal, TemplatePortalDirective, CdkPortalOutlet, PortalHostDirective, PortalModule, PortalInjector */

  /***/
  function node_modulesAngularCdkEsm2015PortalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Portal", function () {
      return Portal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
      return ComponentPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
      return TemplatePortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
      return BasePortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
      return BasePortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
      return DomPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
      return DomPortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
      return CdkPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
      return TemplatePortalDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
      return CdkPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
      return PortalHostDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
      return PortalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
      return PortalInjector;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Throws an exception when attempting to attach a null portal to a host.
     * \@docs-private
     * @return {?}
     */


    function throwNullPortalError() {
      throw Error('Must provide a portal to attach');
    }
    /**
     * Throws an exception when attempting to attach a portal to a host that is already attached.
     * \@docs-private
     * @return {?}
     */


    function throwPortalAlreadyAttachedError() {
      throw Error('Host already has a portal attached');
    }
    /**
     * Throws an exception when attempting to attach a portal to an already-disposed host.
     * \@docs-private
     * @return {?}
     */


    function throwPortalOutletAlreadyDisposedError() {
      throw Error('This PortalOutlet has already been disposed');
    }
    /**
     * Throws an exception when attempting to attach an unknown portal type.
     * \@docs-private
     * @return {?}
     */


    function throwUnknownPortalTypeError() {
      throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
    }
    /**
     * Throws an exception when attempting to attach a portal to a null host.
     * \@docs-private
     * @return {?}
     */


    function throwNullPortalOutletError() {
      throw Error('Attempting to attach a portal to a null PortalOutlet');
    }
    /**
     * Throws an exception when attempting to detach a portal that is not attached.
     * \@docs-private
     * @return {?}
     */


    function throwNoPortalAttachedError() {
      throw Error('Attempting to detach a portal that is not attached to a host');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A `Portal` is something that you want to render somewhere else.
     * It can be attach to / detached from a `PortalOutlet`.
     * @abstract
     * @template T
     */


    class Portal {
      /**
       * Attach this portal to a host.
       * @param {?} host
       * @return {?}
       */
      attach(host) {
        if (host == null) {
          throwNullPortalOutletError();
        }

        if (host.hasAttached()) {
          throwPortalAlreadyAttachedError();
        }

        this._attachedHost = host;
        return (
          /** @type {?} */
          host.attach(this)
        );
      }
      /**
       * Detach this portal from its host
       * @return {?}
       */


      detach() {
        /** @type {?} */
        let host = this._attachedHost;

        if (host == null) {
          throwNoPortalAttachedError();
        } else {
          this._attachedHost = null;
          host.detach();
        }
      }
      /**
       * Whether this portal is attached to a host.
       * @return {?}
       */


      get isAttached() {
        return this._attachedHost != null;
      }
      /**
       * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
       * the PortalOutlet when it is performing an `attach()` or `detach()`.
       * @param {?} host
       * @return {?}
       */


      setAttachedHost(host) {
        this._attachedHost = host;
      }

    }
    /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     * @template T
     */


    class ComponentPortal extends Portal {
      /**
       * @param {?} component
       * @param {?=} viewContainerRef
       * @param {?=} injector
       * @param {?=} componentFactoryResolver
       */
      constructor(component, viewContainerRef, injector, componentFactoryResolver) {
        super();
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
      }

    }
    /**
     * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
     * @template C
     */


    class TemplatePortal extends Portal {
      /**
       * @param {?} template
       * @param {?} viewContainerRef
       * @param {?=} context
       */
      constructor(template, viewContainerRef, context) {
        super();
        this.templateRef = template;
        this.viewContainerRef = viewContainerRef;
        this.context = context;
      }
      /**
       * @return {?}
       */


      get origin() {
        return this.templateRef.elementRef;
      }
      /**
       * Attach the portal to the provided `PortalOutlet`.
       * When a context is provided it will override the `context` property of the `TemplatePortal`
       * instance.
       * @param {?} host
       * @param {?=} context
       * @return {?}
       */


      attach(host, context = this.context) {
        this.context = context;
        return super.attach(host);
      }
      /**
       * @return {?}
       */


      detach() {
        this.context = undefined;
        return super.detach();
      }

    }
    /**
     * Partial implementation of PortalOutlet that handles attaching
     * ComponentPortal and TemplatePortal.
     * @abstract
     */


    class BasePortalOutlet {
      constructor() {
        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
      }
      /**
       * Whether this host has an attached portal.
       * @return {?}
       */


      hasAttached() {
        return !!this._attachedPortal;
      }
      /**
       * Attaches a portal.
       * @param {?} portal
       * @return {?}
       */


      attach(portal) {
        if (!portal) {
          throwNullPortalError();
        }

        if (this.hasAttached()) {
          throwPortalAlreadyAttachedError();
        }

        if (this._isDisposed) {
          throwPortalOutletAlreadyDisposedError();
        }

        if (portal instanceof ComponentPortal) {
          this._attachedPortal = portal;
          return this.attachComponentPortal(portal);
        } else if (portal instanceof TemplatePortal) {
          this._attachedPortal = portal;
          return this.attachTemplatePortal(portal);
        }

        throwUnknownPortalTypeError();
      }
      /**
       * Detaches a previously attached portal.
       * @return {?}
       */


      detach() {
        if (this._attachedPortal) {
          this._attachedPortal.setAttachedHost(null);

          this._attachedPortal = null;
        }

        this._invokeDisposeFn();
      }
      /**
       * Permanently dispose of this portal host.
       * @return {?}
       */


      dispose() {
        if (this.hasAttached()) {
          this.detach();
        }

        this._invokeDisposeFn();

        this._isDisposed = true;
      }
      /**
       * \@docs-private
       * @param {?} fn
       * @return {?}
       */


      setDisposeFn(fn) {
        this._disposeFn = fn;
      }
      /**
       * @private
       * @return {?}
       */


      _invokeDisposeFn() {
        if (this._disposeFn) {
          this._disposeFn();

          this._disposeFn = null;
        }
      }

    }
    /**
     * @deprecated Use `BasePortalOutlet` instead.
     * \@breaking-change 9.0.0
     * @abstract
     */


    class BasePortalHost extends BasePortalOutlet {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     */


    class DomPortalOutlet extends BasePortalOutlet {
      /**
       * @param {?} outletElement
       * @param {?} _componentFactoryResolver
       * @param {?} _appRef
       * @param {?} _defaultInjector
       */
      constructor(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        super();
        this.outletElement = outletElement;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._defaultInjector = _defaultInjector;
      }
      /**
       * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
       * @template T
       * @param {?} portal Portal to be attached
       * @return {?} Reference to the created component.
       */


      attachComponentPortal(portal) {
        /** @type {?} */
        const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        /** @type {?} */

        const componentFactory = resolver.resolveComponentFactory(portal.component);
        /** @type {?} */

        let componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.

        if (portal.viewContainerRef) {
          componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
          this.setDisposeFn(
          /**
          * @return {?}
          */
          () => componentRef.destroy());
        } else {
          componentRef = componentFactory.create(portal.injector || this._defaultInjector);

          this._appRef.attachView(componentRef.hostView);

          this.setDisposeFn(
          /**
          * @return {?}
          */
          () => {
            this._appRef.detachView(componentRef.hostView);

            componentRef.destroy();
          });
        } // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.


        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
      }
      /**
       * Attaches a template portal to the DOM as an embedded view.
       * @template C
       * @param {?} portal Portal to be attached.
       * @return {?} Reference to the created embedded view.
       */


      attachTemplatePortal(portal) {
        /** @type {?} */
        let viewContainer = portal.viewContainerRef;
        /** @type {?} */

        let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        viewRef.detectChanges(); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.

        viewRef.rootNodes.forEach(
        /**
        * @param {?} rootNode
        * @return {?}
        */
        rootNode => this.outletElement.appendChild(rootNode));
        this.setDisposeFn(
        /**
        * @return {?}
        */
        () => {
          /** @type {?} */
          let index = viewContainer.indexOf(viewRef);

          if (index !== -1) {
            viewContainer.remove(index);
          }
        }); // TODO(jelbourn): Return locals from view.

        return viewRef;
      }
      /**
       * Clears out a portal from the DOM.
       * @return {?}
       */


      dispose() {
        super.dispose();

        if (this.outletElement.parentNode != null) {
          this.outletElement.parentNode.removeChild(this.outletElement);
        }
      }
      /**
       * Gets the root HTMLElement for an instantiated component.
       * @private
       * @param {?} componentRef
       * @return {?}
       */


      _getComponentRootNode(componentRef) {
        return (
          /** @type {?} */

          /** @type {?} */
          componentRef.hostView.rootNodes[0]
        );
      }

    }
    /**
     * @deprecated Use `DomPortalOutlet` instead.
     * \@breaking-change 9.0.0
     */


    class DomPortalHost extends DomPortalOutlet {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
     * the directive instance itself can be attached to a host, enabling declarative use of portals.
     */


    class CdkPortal extends TemplatePortal {
      /**
       * @param {?} templateRef
       * @param {?} viewContainerRef
       */
      constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
      }

    }

    CdkPortal.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkPortal]',
        exportAs: 'cdkPortal'
      }]
    }];
    /** @nocollapse */

    CdkPortal.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
    }];
    /**
     * @deprecated Use `CdkPortal` instead.
     * \@breaking-change 9.0.0
     */


    class TemplatePortalDirective extends CdkPortal {}

    TemplatePortalDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdk-portal], [portal]',
        exportAs: 'cdkPortal',
        providers: [{
          provide: CdkPortal,
          useExisting: TemplatePortalDirective
        }]
      }]
    }];
    /**
     * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
     * directly attached to it, enabling declarative use.
     *
     * Usage:
     * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
     */

    class CdkPortalOutlet extends BasePortalOutlet {
      /**
       * @param {?} _componentFactoryResolver
       * @param {?} _viewContainerRef
       */
      constructor(_componentFactoryResolver, _viewContainerRef) {
        super();
        this._componentFactoryResolver = _componentFactoryResolver;
        this._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */

        this._isInitialized = false;
        /**
         * Emits when a portal is attached to the outlet.
         */

        this.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * Portal associated with the Portal outlet.
       * @return {?}
       */


      get portal() {
        return this._attachedPortal;
      }
      /**
       * @param {?} portal
       * @return {?}
       */


      set portal(portal) {
        // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
        // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
        // and attach a portal programmatically in the parent component. When Angular does the first CD
        // round, it will fire the setter with empty string, causing the user's content to be cleared.
        if (this.hasAttached() && !portal && !this._isInitialized) {
          return;
        }

        if (this.hasAttached()) {
          super.detach();
        }

        if (portal) {
          super.attach(portal);
        }

        this._attachedPortal = portal;
      }
      /**
       * Component or view reference that is attached to the portal.
       * @return {?}
       */


      get attachedRef() {
        return this._attachedRef;
      }
      /**
       * @return {?}
       */


      ngOnInit() {
        this._isInitialized = true;
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        super.dispose();
        this._attachedPortal = null;
        this._attachedRef = null;
      }
      /**
       * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
       *
       * @template T
       * @param {?} portal Portal to be attached to the portal outlet.
       * @return {?} Reference to the created component.
       */


      attachComponentPortal(portal) {
        portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.

        /** @type {?} */

        const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
        /** @type {?} */

        const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        /** @type {?} */

        const componentFactory = resolver.resolveComponentFactory(portal.component);
        /** @type {?} */

        const ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);
        super.setDisposeFn(
        /**
        * @return {?}
        */
        () => ref.destroy());
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
      }
      /**
       * Attach the given TemplatePortal to this PortlHost as an embedded View.
       * @template C
       * @param {?} portal Portal to be attached.
       * @return {?} Reference to the created embedded view.
       */


      attachTemplatePortal(portal) {
        portal.setAttachedHost(this);
        /** @type {?} */

        const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

        super.setDisposeFn(
        /**
        * @return {?}
        */
        () => this._viewContainerRef.clear());
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
      }

    }

    CdkPortalOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkPortalOutlet]',
        exportAs: 'cdkPortalOutlet',
        inputs: ['portal: cdkPortalOutlet']
      }]
    }];
    /** @nocollapse */

    CdkPortalOutlet.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
    }];

    CdkPortalOutlet.propDecorators = {
      attached: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @deprecated Use `CdkPortalOutlet` instead.
     * \@breaking-change 9.0.0
     */

    class PortalHostDirective extends CdkPortalOutlet {}

    PortalHostDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkPortalHost], [portalHost]',
        exportAs: 'cdkPortalHost',
        inputs: ['portal: cdkPortalHost'],
        providers: [{
          provide: CdkPortalOutlet,
          useExisting: PortalHostDirective
        }]
      }]
    }];

    class PortalModule {}

    PortalModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
        declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Custom injector to be used when providing custom
     * injection tokens to components inside a portal.
     * \@docs-private
     */

    class PortalInjector {
      /**
       * @param {?} _parentInjector
       * @param {?} _customTokens
       */
      constructor(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
      }
      /**
       * @param {?} token
       * @param {?=} notFoundValue
       * @return {?}
       */


      get(token, notFoundValue) {
        /** @type {?} */
        const value = this._customTokens.get(token);

        if (typeof value !== 'undefined') {
          return value;
        }

        return this._parentInjector.get(token, notFoundValue);
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=portal.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/esm2015/scrolling.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/esm2015/scrolling.js ***!
    \********************************************************/

  /*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */

  /***/
  function node_modulesAngularCdkEsm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
      return _fixedSizeVirtualScrollStrategyFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
      return FixedSizeVirtualScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
      return CdkFixedSizeVirtualScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function () {
      return SCROLL_DISPATCHER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
      return DEFAULT_SCROLL_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return ScrollDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function () {
      return SCROLL_DISPATCHER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return CdkScrollable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
      return ScrollingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function () {
      return ScrollDispatchModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function () {
      return VIEWPORT_RULER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
      return DEFAULT_RESIZE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return ViewportRuler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function () {
      return VIEWPORT_RULER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
      return CdkVirtualForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
      return VIRTUAL_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
      return CdkVirtualScrollViewport;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The injection token used to specify the virtual scrolling strategy.
     * @type {?}
     */


    const VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Virtual scrolling strategy for lists with items of known fixed size.
     */

    class FixedSizeVirtualScrollStrategy {
      /**
       * @param {?} itemSize The size of the items in the virtually scrolling list.
       * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      constructor(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */

        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */

        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param {?} viewport The viewport to attach this strategy to.
       * @return {?}
       */


      attach(viewport) {
        this._viewport = viewport;

        this._updateTotalContentSize();

        this._updateRenderedRange();
      }
      /**
       * Detaches this scroll strategy from the currently attached viewport.
       * @return {?}
       */


      detach() {
        this._scrolledIndexChange.complete();

        this._viewport = null;
      }
      /**
       * Update the item size and buffer size.
       * @param {?} itemSize The size of the items in the virtually scrolling list.
       * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       * @return {?}
       */


      updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
          throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }

        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;

        this._updateTotalContentSize();

        this._updateRenderedRange();
      }
      /**
       * \@docs-private Implemented as part of VirtualScrollStrategy.
       * @return {?}
       */


      onContentScrolled() {
        this._updateRenderedRange();
      }
      /**
       * \@docs-private Implemented as part of VirtualScrollStrategy.
       * @return {?}
       */


      onDataLengthChanged() {
        this._updateTotalContentSize();

        this._updateRenderedRange();
      }
      /**
       * \@docs-private Implemented as part of VirtualScrollStrategy.
       * @return {?}
       */


      onContentRendered() {}
      /**
       * \@docs-private Implemented as part of VirtualScrollStrategy.
       * @return {?}
       */


      onRenderedOffsetChanged() {}
      /**
       * Scroll to the offset for the given index.
       * @param {?} index The index of the element to scroll to.
       * @param {?} behavior The ScrollBehavior to use when scrolling.
       * @return {?}
       */


      scrollToIndex(index, behavior) {
        if (this._viewport) {
          this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
      }
      /**
       * Update the viewport's total content size.
       * @private
       * @return {?}
       */


      _updateTotalContentSize() {
        if (!this._viewport) {
          return;
        }

        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
      }
      /**
       * Update the viewport's rendered range.
       * @private
       * @return {?}
       */


      _updateRenderedRange() {
        if (!this._viewport) {
          return;
        }
        /** @type {?} */


        const scrollOffset = this._viewport.measureScrollOffset();
        /** @type {?} */


        const firstVisibleIndex = scrollOffset / this._itemSize;
        /** @type {?} */

        const renderedRange = this._viewport.getRenderedRange();
        /** @type {?} */


        const newRange = {
          start: renderedRange.start,
          end: renderedRange.end
        };
        /** @type {?} */

        const viewportSize = this._viewport.getViewportSize();
        /** @type {?} */


        const dataLength = this._viewport.getDataLength();
        /** @type {?} */


        const startBuffer = scrollOffset - newRange.start * this._itemSize;

        if (startBuffer < this._minBufferPx && newRange.start != 0) {
          /** @type {?} */
          const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
          newRange.start = Math.max(0, newRange.start - expandStart);
          newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        } else {
          /** @type {?} */
          const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

          if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
            /** @type {?} */
            const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

            if (expandEnd > 0) {
              newRange.end = Math.min(dataLength, newRange.end + expandEnd);
              newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
            }
          }
        }

        this._viewport.setRenderedRange(newRange);

        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
      }

    }
    /**
     * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
     * `FixedSizeVirtualScrollStrategy` from the given directive.
     * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
     *     `FixedSizeVirtualScrollStrategy` from.
     * @return {?}
     */


    function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
      return fixedSizeDir._scrollStrategy;
    }
    /**
     * A virtual scroll strategy that supports fixed-size items.
     */


    class CdkFixedSizeVirtualScroll {
      constructor() {
        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */

        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      /**
       * The size of the items in the list (in pixels).
       * @return {?}
       */


      get itemSize() {
        return this._itemSize;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set itemSize(value) {
        this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
      }
      /**
       * The minimum amount of buffer rendered beyond the viewport (in pixels).
       * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
       * @return {?}
       */


      get minBufferPx() {
        return this._minBufferPx;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set minBufferPx(value) {
        this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
      }
      /**
       * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
       * @return {?}
       */


      get maxBufferPx() {
        return this._maxBufferPx;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set maxBufferPx(value) {
        this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
      }
      /**
       * @return {?}
       */


      ngOnChanges() {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }

    }

    CdkFixedSizeVirtualScroll.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'cdk-virtual-scroll-viewport[itemSize]',
        providers: [{
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          () => CdkFixedSizeVirtualScroll)]
        }]
      }]
    }];
    CdkFixedSizeVirtualScroll.propDecorators = {
      itemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the scrolling events by default.
     * @type {?}
     */

    const DEFAULT_SCROLL_TIME = 20;
    /**
     * Service contained all registered Scrollable references and emits an event when any one of the
     * Scrollable references emit a scrolled event.
     */

    class ScrollDispatcher {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       */
      constructor(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */

        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */

        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */

        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */

        this.scrollContainers = new Map();
      }
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param {?} scrollable Scrollable instance to be registered.
       * @return {?}
       */


      register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
          this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(
          /**
          * @return {?}
          */
          () => this._scrolled.next(scrollable)));
        }
      }
      /**
       * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
       * @param {?} scrollable Scrollable instance to be deregistered.
       * @return {?}
       */


      deregister(scrollable) {
        /** @type {?} */
        const scrollableReference = this.scrollContainers.get(scrollable);

        if (scrollableReference) {
          scrollableReference.unsubscribe();
          this.scrollContainers.delete(scrollable);
        }
      }
      /**
       * Returns an observable that emits an event whenever any of the registered Scrollable
       * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
       * to override the default "throttle" time.
       *
       * **Note:** in order to avoid hitting change detection for every scroll event,
       * all of the events emitted from this stream will be run outside the Angular zone.
       * If you need to update any data bindings as a result of a scroll event, you have
       * to run the callback using `NgZone.run`.
       * @param {?=} auditTimeInMs
       * @return {?}
       */


      scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }

        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        observer => {
          if (!this._globalSubscription) {
            this._addGlobalListener();
          } // In the case of a 0ms delay, use an observable without auditTime
          // since it does add a perceptible delay in processing overhead.

          /** @type {?} */


          const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
          this._scrolledCount++;
          return (
            /**
            * @return {?}
            */
            () => {
              subscription.unsubscribe();
              this._scrolledCount--;

              if (!this._scrolledCount) {
                this._removeGlobalListener();
              }
            }
          );
        });
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._removeGlobalListener();

        this.scrollContainers.forEach(
        /**
        * @param {?} _
        * @param {?} container
        * @return {?}
        */
        (_, container) => this.deregister(container));

        this._scrolled.complete();
      }
      /**
       * Returns an observable that emits whenever any of the
       * scrollable ancestors of an element are scrolled.
       * @param {?} elementRef Element whose ancestors to listen for.
       * @param {?=} auditTimeInMs Time to throttle the scroll events.
       * @return {?}
       */


      ancestorScrolled(elementRef, auditTimeInMs) {
        /** @type {?} */
        const ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
        /**
        * @param {?} target
        * @return {?}
        */
        target => {
          return !target || ancestors.indexOf(target) > -1;
        }));
      }
      /**
       * Returns all registered Scrollables that contain the provided element.
       * @param {?} elementRef
       * @return {?}
       */


      getAncestorScrollContainers(elementRef) {
        /** @type {?} */
        const scrollingContainers = [];
        this.scrollContainers.forEach(
        /**
        * @param {?} _subscription
        * @param {?} scrollable
        * @return {?}
        */
        (_subscription, scrollable) => {
          if (this._scrollableContainsElement(scrollable, elementRef)) {
            scrollingContainers.push(scrollable);
          }
        });
        return scrollingContainers;
      }
      /**
       * Returns true if the element is contained within the provided Scrollable.
       * @private
       * @param {?} scrollable
       * @param {?} elementRef
       * @return {?}
       */


      _scrollableContainsElement(scrollable, elementRef) {
        /** @type {?} */
        let element = elementRef.nativeElement;
        /** @type {?} */

        let scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.

        do {
          if (element == scrollableElement) {
            return true;
          }
        } while (element =
        /** @type {?} */
        element.parentElement);

        return false;
      }
      /**
       * Sets up the global scroll listeners.
       * @private
       * @return {?}
       */


      _addGlobalListener() {
        this._globalSubscription = this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(
          /**
          * @return {?}
          */
          () => this._scrolled.next());
        });
      }
      /**
       * Cleans up the global scroll listener.
       * @private
       * @return {?}
       */


      _removeGlobalListener() {
        if (this._globalSubscription) {
          this._globalSubscription.unsubscribe();

          this._globalSubscription = null;
        }
      }

    }

    ScrollDispatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ScrollDispatcher.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
    }];
    /** @nocollapse */


    ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ScrollDispatcher_Factory() {
        return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
      },
      token: ScrollDispatcher,
      providedIn: "root"
    });
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentDispatcher
     * @param {?} ngZone
     * @param {?} platform
     * @return {?}
     */

    function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
      return parentDispatcher || new ScrollDispatcher(ngZone, platform);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    const SCROLL_DISPATCHER_PROVIDER = {
      // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
      provide: ScrollDispatcher,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
      useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Sends an event when the directive's element is scrolled. Registers itself with the
     * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
     * can be listened to through the service.
     */

    class CdkScrollable {
      /**
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       * @param {?=} dir
       */
      constructor(elementRef, scrollDispatcher, ngZone, dir) {
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        observer => this.ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(observer)));
      }
      /**
       * @return {?}
       */


      ngOnInit() {
        this.scrollDispatcher.register(this);
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this.scrollDispatcher.deregister(this);

        this._destroyed.next();

        this._destroyed.complete();
      }
      /**
       * Returns observable that emits when a scroll event is fired on the host element.
       * @return {?}
       */


      elementScrolled() {
        return this._elementScrolled;
      }
      /**
       * Gets the ElementRef for the viewport.
       * @return {?}
       */


      getElementRef() {
        return this.elementRef;
      }
      /**
       * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
       * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param {?} options specified the offsets to scroll to.
       * @return {?}
       */


      scrollTo(options) {
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        /** @type {?} */

        const isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

        options.left = options.left == null ? isRtl ? options.end : options.start : options.left;
        options.right = options.right == null ? isRtl ? options.start : options.end : options.right; // Rewrite the bottom offset as a top offset.

        if (options.bottom != null) {
          /** @type {?} */
          options.top = el.scrollHeight - el.clientHeight - options.bottom;
        } // Rewrite the right offset as a left offset.


        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
          if (options.left != null) {
            /** @type {?} */
            options.right = el.scrollWidth - el.clientWidth - options.left;
          }

          if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
            options.left = options.right;
          } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
            options.left = options.right ? -options.right : options.right;
          }
        } else {
          if (options.right != null) {
            /** @type {?} */
            options.left = el.scrollWidth - el.clientWidth - options.right;
          }
        }

        this._applyScrollToOptions(options);
      }
      /**
       * @private
       * @param {?} options
       * @return {?}
       */


      _applyScrollToOptions(options) {
        /** @type {?} */
        const el = this.elementRef.nativeElement;

        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
          el.scrollTo(options);
        } else {
          if (options.top != null) {
            el.scrollTop = options.top;
          }

          if (options.left != null) {
            el.scrollLeft = options.left;
          }
        }
      }
      /**
       * Measures the scroll offset relative to the specified edge of the viewport. This method can be
       * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
       * about what scrollLeft means in RTL. The values returned by this method are normalized such that
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param {?} from The edge to measure from.
       * @return {?}
       */


      measureScrollOffset(from) {
        /** @type {?} */
        const LEFT = 'left';
        /** @type {?} */

        const RIGHT = 'right';
        /** @type {?} */

        const el = this.elementRef.nativeElement;

        if (from == 'top') {
          return el.scrollTop;
        }

        if (from == 'bottom') {
          return el.scrollHeight - el.clientHeight - el.scrollTop;
        } // Rewrite start & end as left or right offsets.

        /** @type {?} */


        const isRtl = this.dir && this.dir.value == 'rtl';

        if (from == 'start') {
          from = isRtl ? RIGHT : LEFT;
        } else if (from == 'end') {
          from = isRtl ? LEFT : RIGHT;
        }

        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
          // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
          // 0 when scrolled all the way right.
          if (from == LEFT) {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          } else {
            return el.scrollLeft;
          }
        } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
          // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
          // 0 when scrolled all the way right.
          if (from == LEFT) {
            return el.scrollLeft + el.scrollWidth - el.clientWidth;
          } else {
            return -el.scrollLeft;
          }
        } else {
          // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
          // (scrollWidth - clientWidth) when scrolled all the way right.
          if (from == LEFT) {
            return el.scrollLeft;
          } else {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          }
        }
      }

    }

    CdkScrollable.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdk-scrollable], [cdkScrollable]'
      }]
    }];
    /** @nocollapse */

    CdkScrollable.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
    }, {
      type: ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks if the given ranges are equal.
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */


    function rangesEqual(r1, r2) {
      return r1.start == r2.start && r1.end == r2.end;
    }
    /**
     * Scheduler to be used for scroll events. Needs to fall back to
     * something that doesn't rely on requestAnimationFrame on environments
     * that don't support it (e.g. server-side rendering).
     * @type {?}
     */


    const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
    /**
     * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
     */

    class CdkVirtualScrollViewport extends CdkScrollable {
      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?} ngZone
       * @param {?} _scrollStrategy
       * @param {?} dir
       * @param {?} scrollDispatcher
       */
      constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
        super(elementRef, scrollDispatcher, ngZone, dir);
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */

        this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */

        this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.

        /**
         * Emits when the index of the first element visible in the viewport changes.
         */

        this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        observer => this._scrollStrategy.scrolledIndexChange.subscribe(
        /**
        * @param {?} index
        * @return {?}
        */
        index => Promise.resolve().then(
        /**
        * @return {?}
        */
        () => this.ngZone.run(
        /**
        * @return {?}
        */
        () => observer.next(index)))));
        /**
         * A stream that emits whenever the rendered range changes.
         */

        this.renderedRangeStream = this._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */

        this._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */

        this._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */

        this._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */

        this._renderedRange = {
          start: 0,
          end: 0
        };
        /**
         * The length of the data bound to this viewport (in number of items).
         */

        this._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */

        this._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */

        this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */

        this._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */

        this._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */

        this._runAfterChangeDetection = [];

        if (!_scrollStrategy) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
      }
      /**
       * The direction the viewport scrolls.
       * @return {?}
       */


      get orientation() {
        return this._orientation;
      }
      /**
       * @param {?} orientation
       * @return {?}
       */


      set orientation(orientation) {
        if (this._orientation !== orientation) {
          this._orientation = orientation;

          this._calculateSpacerSize();
        }
      }
      /**
       * @return {?}
       */


      ngOnInit() {
        super.ngOnInit(); // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.

        this.ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => Promise.resolve().then(
        /**
        * @return {?}
        */
        () => {
          this._measureViewportSize();

          this._scrollStrategy.attach(this);

          this.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
          /** @type {?} */
          null), // Collect multiple events into one until the next animation frame. This way if
          // there are multiple scroll events in the same frame we only need to recheck
          // our layout once.
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
          /**
          * @return {?}
          */
          () => this._scrollStrategy.onContentScrolled());

          this._markChangeDetectionNeeded();
        }));
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this.detach();

        this._scrollStrategy.detach(); // Complete all subjects


        this._renderedRangeSubject.complete();

        this._detachedSubject.complete();

        super.ngOnDestroy();
      }
      /**
       * Attaches a `CdkVirtualForOf` to this viewport.
       * @param {?} forOf
       * @return {?}
       */


      attach(forOf) {
        if (this._forOf) {
          throw Error('CdkVirtualScrollViewport is already attached.');
        } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.


        this.ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          this._forOf = forOf;

          this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._detachedSubject)).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          data => {
            /** @type {?} */
            const newLength = data.length;

            if (newLength !== this._dataLength) {
              this._dataLength = newLength;

              this._scrollStrategy.onDataLengthChanged();
            }

            this._doChangeDetection();
          });
        });
      }
      /**
       * Detaches the current `CdkVirtualForOf`.
       * @return {?}
       */


      detach() {
        this._forOf = null;

        this._detachedSubject.next();
      }
      /**
       * Gets the length of the data bound to this viewport (in number of items).
       * @return {?}
       */


      getDataLength() {
        return this._dataLength;
      }
      /**
       * Gets the size of the viewport (in pixels).
       * @return {?}
       */


      getViewportSize() {
        return this._viewportSize;
      } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
      // cycle happens. I'm being careful to only call it after the render cycle is complete and before
      // setting it to something else, but its error prone and should probably be split into
      // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

      /**
       * Get the current rendered range of items.
       * @return {?}
       */


      getRenderedRange() {
        return this._renderedRange;
      }
      /**
       * Sets the total size of all content (in pixels), including content that is not currently
       * rendered.
       * @param {?} size
       * @return {?}
       */


      setTotalContentSize(size) {
        if (this._totalContentSize !== size) {
          this._totalContentSize = size;

          this._calculateSpacerSize();

          this._markChangeDetectionNeeded();
        }
      }
      /**
       * Sets the currently rendered range of indices.
       * @param {?} range
       * @return {?}
       */


      setRenderedRange(range) {
        if (!rangesEqual(this._renderedRange, range)) {
          this._renderedRangeSubject.next(this._renderedRange = range);

          this._markChangeDetectionNeeded(
          /**
          * @return {?}
          */
          () => this._scrollStrategy.onContentRendered());
        }
      }
      /**
       * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
       * @return {?}
       */


      getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
      }
      /**
       * Sets the offset from the start of the viewport to either the start or end of the rendered data
       * (in pixels).
       * @param {?} offset
       * @param {?=} to
       * @return {?}
       */


      setRenderedContentOffset(offset, to = 'to-start') {
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.

        /** @type {?} */
        const isRtl = this.dir && this.dir.value == 'rtl';
        /** @type {?} */

        const isHorizontal = this.orientation == 'horizontal';
        /** @type {?} */

        const axis = isHorizontal ? 'X' : 'Y';
        /** @type {?} */

        const axisDirection = isHorizontal && isRtl ? -1 : 1;
        /** @type {?} */

        let transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
        this._renderedContentOffset = offset;

        if (to === 'to-end') {
          transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
          // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
          // expand upward).

          this._renderedContentOffsetNeedsRewrite = true;
        }

        if (this._renderedContentTransform != transform) {
          // We know this value is safe because we parse `offset` with `Number()` before passing it
          // into the string.
          this._renderedContentTransform = transform;

          this._markChangeDetectionNeeded(
          /**
          * @return {?}
          */
          () => {
            if (this._renderedContentOffsetNeedsRewrite) {
              this._renderedContentOffset -= this.measureRenderedContentSize();
              this._renderedContentOffsetNeedsRewrite = false;
              this.setRenderedContentOffset(this._renderedContentOffset);
            } else {
              this._scrollStrategy.onRenderedOffsetChanged();
            }
          });
        }
      }
      /**
       * Scrolls to the given offset from the start of the viewport. Please note that this is not always
       * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
       * direction, this would be the equivalent of setting a fictional `scrollRight` property.
       * @param {?} offset The offset to scroll to.
       * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       * @return {?}
       */


      scrollToOffset(offset, behavior = 'auto') {
        /** @type {?} */
        const options = {
          behavior
        };

        if (this.orientation === 'horizontal') {
          options.start = offset;
        } else {
          options.top = offset;
        }

        this.scrollTo(options);
      }
      /**
       * Scrolls to the offset for the given index.
       * @param {?} index The index of the element to scroll to.
       * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       * @return {?}
       */


      scrollToIndex(index, behavior = 'auto') {
        this._scrollStrategy.scrollToIndex(index, behavior);
      }
      /**
       * Gets the current scroll offset from the start of the viewport (in pixels).
       * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
       *     in horizontal mode.
       * @return {?}
       */


      measureScrollOffset(from) {
        return super.measureScrollOffset(from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
      }
      /**
       * Measure the combined size of all of the rendered items.
       * @return {?}
       */


      measureRenderedContentSize() {
        /** @type {?} */
        const contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
      }
      /**
       * Measure the total combined size of the given range. Throws if the range includes items that are
       * not rendered.
       * @param {?} range
       * @return {?}
       */


      measureRangeSize(range) {
        if (!this._forOf) {
          return 0;
        }

        return this._forOf.measureRangeSize(range, this.orientation);
      }
      /**
       * Update the viewport dimensions and re-render.
       * @return {?}
       */


      checkViewportSize() {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();

        this._scrollStrategy.onDataLengthChanged();
      }
      /**
       * Measure the viewport size.
       * @private
       * @return {?}
       */


      _measureViewportSize() {
        /** @type {?} */
        const viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
      }
      /**
       * Queue up change detection to run.
       * @private
       * @param {?=} runAfter
       * @return {?}
       */


      _markChangeDetectionNeeded(runAfter) {
        if (runAfter) {
          this._runAfterChangeDetection.push(runAfter);
        } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.


        if (!this._isChangeDetectionPending) {
          this._isChangeDetectionPending = true;
          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          () => Promise.resolve().then(
          /**
          * @return {?}
          */
          () => {
            this._doChangeDetection();
          }));
        }
      }
      /**
       * Run change detection.
       * @private
       * @return {?}
       */


      _doChangeDetection() {
        this._isChangeDetectionPending = false; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.

        this.ngZone.run(
        /**
        * @return {?}
        */
        () => this._changeDetectorRef.markForCheck()); // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.

        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        /** @type {?} */

        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];

        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }
      /**
       * Calculates the `style.width` and `style.height` for the spacer element.
       * @private
       * @return {?}
       */


      _calculateSpacerSize() {
        this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
        this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
      }

    }

    CdkVirtualScrollViewport.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'cdk-virtual-scroll-viewport',
        template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>",
        styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
        host: {
          'class': 'cdk-virtual-scroll-viewport',
          '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
          '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        providers: [{
          provide: CdkScrollable,
          useExisting: CdkVirtualScrollViewport
        }]
      }]
    }];
    /** @nocollapse */

    CdkVirtualScrollViewport.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [VIRTUAL_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }]
    }, {
      type: ScrollDispatcher
    }];

    CdkVirtualScrollViewport.propDecorators = {
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scrolledIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      _contentWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['contentWrapper', {
          static: true
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to extract size from a DOM Node.
     * @param {?} orientation
     * @param {?} node
     * @return {?}
     */

    function getSize(orientation, node) {
      /** @type {?} */
      const el =
      /** @type {?} */
      node;

      if (!el.getBoundingClientRect) {
        return 0;
      }
      /** @type {?} */


      const rect = el.getBoundingClientRect();
      return orientation == 'horizontal' ? rect.width : rect.height;
    }
    /**
     * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
     * container.
     * @template T
     */


    class CdkVirtualForOf {
      /**
       * @param {?} _viewContainerRef
       * @param {?} _template
       * @param {?} _differs
       * @param {?} _viewport
       * @param {?} ngZone
       */
      constructor(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */

        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */

        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */

        this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
        /** @type {?} */
        null), // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        ([prev, cur]) => this._changeDataSource(prev, cur)), // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */

        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */

        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */

        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(
        /**
        * @param {?} data
        * @return {?}
        */
        data => {
          this._data = data;

          this._onRenderedDataChange();
        });

        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} range
        * @return {?}
        */
        range => {
          this._renderedRange = range;
          ngZone.run(
          /**
          * @return {?}
          */
          () => this.viewChange.next(this._renderedRange));

          this._onRenderedDataChange();
        });

        this._viewport.attach(this);
      }
      /**
       * The DataSource to display.
       * @return {?}
       */


      get cdkVirtualForOf() {
        return this._cdkVirtualForOf;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set cdkVirtualForOf(value) {
        this._cdkVirtualForOf = value;
        /** @type {?} */

        const ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["isDataSource"])(value) ? value : // Slice the value if its an NgIterable to ensure we're working with an array.
        new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));

        this._dataSourceChanges.next(ds);
      }
      /**
       * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
       * the item and produces a value to be used as the item's identity when tracking changes.
       * @return {?}
       */


      get cdkVirtualForTrackBy() {
        return this._cdkVirtualForTrackBy;
      }
      /**
       * @param {?} fn
       * @return {?}
       */


      set cdkVirtualForTrackBy(fn) {
        this._needsUpdate = true;
        this._cdkVirtualForTrackBy = fn ?
        /**
        * @param {?} index
        * @param {?} item
        * @return {?}
        */
        (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : undefined;
      }
      /**
       * The template used to stamp out new elements.
       * @param {?} value
       * @return {?}
       */


      set cdkVirtualForTemplate(value) {
        if (value) {
          this._needsUpdate = true;
          this._template = value;
        }
      }
      /**
       * Measures the combined size (width for horizontal orientation, height for vertical) of all items
       * in the specified range. Throws an error if the range includes items that are not currently
       * rendered.
       * @param {?} range
       * @param {?} orientation
       * @return {?}
       */


      measureRangeSize(range, orientation) {
        if (range.start >= range.end) {
          return 0;
        }

        if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
          throw Error("Error: attempted to measure an item that isn't rendered.");
        } // The index into the list of rendered views for the first item in the range.

        /** @type {?} */


        const renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

        /** @type {?} */

        const rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

        /** @type {?} */

        let totalSize = 0;
        /** @type {?} */

        let i = rangeLen;

        while (i--) {
          /** @type {?} */
          const view =
          /** @type {?} */
          this._viewContainerRef.get(i + renderedStartIndex);
          /** @type {?} */


          let j = view ? view.rootNodes.length : 0;

          while (j--) {
            totalSize += getSize(orientation,
            /** @type {?} */
            view.rootNodes[j]);
          }
        }

        return totalSize;
      }
      /**
       * @return {?}
       */


      ngDoCheck() {
        if (this._differ && this._needsUpdate) {
          // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
          // this list being rendered (can use simpler algorithm) vs needs update due to data actually
          // changing (need to do this diff).

          /** @type {?} */
          const changes = this._differ.diff(this._renderedItems);

          if (!changes) {
            this._updateContext();
          } else {
            this._applyChanges(changes);
          }

          this._needsUpdate = false;
        }
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._viewport.detach();

        this._dataSourceChanges.next();

        this._dataSourceChanges.complete();

        this.viewChange.complete();

        this._destroyed.next();

        this._destroyed.complete();

        for (let view of this._templateCache) {
          view.destroy();
        }
      }
      /**
       * React to scroll state changes in the viewport.
       * @private
       * @return {?}
       */


      _onRenderedDataChange() {
        if (!this._renderedRange) {
          return;
        }

        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

        if (!this._differ) {
          this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
        }

        this._needsUpdate = true;
      }
      /**
       * Swap out one `DataSource` for another.
       * @private
       * @param {?} oldDs
       * @param {?} newDs
       * @return {?}
       */


      _changeDataSource(oldDs, newDs) {
        if (oldDs) {
          oldDs.disconnect(this);
        }

        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
      }
      /**
       * Update the `CdkVirtualForOfContext` for all views.
       * @private
       * @return {?}
       */


      _updateContext() {
        /** @type {?} */
        const count = this._data.length;
        /** @type {?} */

        let i = this._viewContainerRef.length;

        while (i--) {
          /** @type {?} */
          let view =
          /** @type {?} */
          this._viewContainerRef.get(i);

          view.context.index = this._renderedRange.start + i;
          view.context.count = count;

          this._updateComputedContextProperties(view.context);

          view.detectChanges();
        }
      }
      /**
       * Apply changes to the DOM.
       * @private
       * @param {?} changes
       * @return {?}
       */


      _applyChanges(changes) {
        // Rearrange the views to put them in the right location.
        changes.forEachOperation(
        /**
        * @param {?} record
        * @param {?} adjustedPreviousIndex
        * @param {?} currentIndex
        * @return {?}
        */
        (record, adjustedPreviousIndex, currentIndex) => {
          if (record.previousIndex == null) {
            // Item added.
            // Item added.

            /** @type {?} */
            const view = this._insertViewForNewItem(
            /** @type {?} */
            currentIndex);

            view.context.$implicit = record.item;
          } else if (currentIndex == null) {
            // Item removed.
            this._cacheView(this._detachView(
            /** @type {?} */
            adjustedPreviousIndex));
          } else {
            // Item moved.
            // Item moved.

            /** @type {?} */
            const view =
            /** @type {?} */
            this._viewContainerRef.get(
            /** @type {?} */
            adjustedPreviousIndex);

            this._viewContainerRef.move(view, currentIndex);

            view.context.$implicit = record.item;
          }
        }); // Update $implicit for any items that had an identity change.

        changes.forEachIdentityChange(
        /**
        * @param {?} record
        * @return {?}
        */
        record => {
          /** @type {?} */
          const view =
          /** @type {?} */
          this._viewContainerRef.get(
          /** @type {?} */
          record.currentIndex);

          view.context.$implicit = record.item;
        }); // Update the context variables on all items.

        /** @type {?} */

        const count = this._data.length;
        /** @type {?} */

        let i = this._viewContainerRef.length;

        while (i--) {
          /** @type {?} */
          const view =
          /** @type {?} */
          this._viewContainerRef.get(i);

          view.context.index = this._renderedRange.start + i;
          view.context.count = count;

          this._updateComputedContextProperties(view.context);
        }
      }
      /**
       * Cache the given detached view.
       * @private
       * @param {?} view
       * @return {?}
       */


      _cacheView(view) {
        if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
          this._templateCache.push(view);
        } else {
          /** @type {?} */
          const index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
          // destroy the view on its own, otherwise destroy it through the
          // container to ensure that all the references are removed.


          if (index === -1) {
            view.destroy();
          } else {
            this._viewContainerRef.remove(index);
          }
        }
      }
      /**
       * Inserts a view for a new item, either from the cache or by creating a new one.
       * @private
       * @param {?} index
       * @return {?}
       */


      _insertViewForNewItem(index) {
        return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
      }
      /**
       * Update the computed properties on the `CdkVirtualForOfContext`.
       * @private
       * @param {?} context
       * @return {?}
       */


      _updateComputedContextProperties(context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
      }
      /**
       * Creates a new embedded view and moves it to the given index
       * @private
       * @param {?} index
       * @return {?}
       */


      _createEmbeddedViewAt(index) {
        // Note that it's important that we insert the item directly at the proper index,
        // rather than inserting it and the moving it in place, because if there's a directive
        // on the same node that injects the `ViewContainerRef`, Angular will insert another
        // comment node which can throw off the move when it's being repeated for all items.
        return this._viewContainerRef.createEmbeddedView(this._template, {
          $implicit:
          /** @type {?} */
          null,
          cdkVirtualForOf: this._cdkVirtualForOf,
          index: -1,
          count: -1,
          first: false,
          last: false,
          odd: false,
          even: false
        }, index);
      }
      /**
       * Inserts a recycled view from the cache at the given index.
       * @private
       * @param {?} index
       * @return {?}
       */


      _insertViewFromCache(index) {
        /** @type {?} */
        const cachedView = this._templateCache.pop();

        if (cachedView) {
          this._viewContainerRef.insert(cachedView, index);
        }

        return cachedView || null;
      }
      /**
       * Detaches the embedded view at the given index.
       * @private
       * @param {?} index
       * @return {?}
       */


      _detachView(index) {
        return (
          /** @type {?} */
          this._viewContainerRef.detach(index)
        );
      }

    }

    CdkVirtualForOf.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[cdkVirtualFor][cdkVirtualForOf]'
      }]
    }];
    /** @nocollapse */

    CdkVirtualForOf.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
    }, {
      type: CdkVirtualScrollViewport,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
    }];

    CdkVirtualForOf.propDecorators = {
      cdkVirtualForOf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cdkVirtualForTrackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cdkVirtualForTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cdkVirtualForTemplateCacheSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class ScrollingModule {}

    ScrollingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
        exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport],
        declarations: [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport]
      }]
    }];
    /**
     * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
     * \@breaking-change 8.0.0 delete this alias
     */

    class ScrollDispatchModule {}

    ScrollDispatchModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [ScrollingModule],
        exports: [ScrollingModule]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the resize events by default.
     * @type {?}
     */

    const DEFAULT_RESIZE_TIME = 20;
    /**
     * Simple utility for getting the bounds of the browser viewport.
     * \@docs-private
     */

    class ViewportRuler {
      /**
       * @param {?} _platform
       * @param {?} ngZone
       */
      constructor(_platform, ngZone) {
        this._platform = _platform;
        ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          this._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
          // since subscribing is what causes the event listener to be added.

          this._invalidateCache = this.change().subscribe(
          /**
          * @return {?}
          */
          () => this._updateViewportSize());
        });
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._invalidateCache.unsubscribe();
      }
      /**
       * Returns the viewport's width and height.
       * @return {?}
       */


      getViewportSize() {
        if (!this._viewportSize) {
          this._updateViewportSize();
        }
        /** @type {?} */


        const output = {
          width: this._viewportSize.width,
          height: this._viewportSize.height
        }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

        if (!this._platform.isBrowser) {
          this._viewportSize =
          /** @type {?} */
          null;
        }

        return output;
      }
      /**
       * Gets a ClientRect for the viewport's bounds.
       * @return {?}
       */


      getViewportRect() {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().

        /** @type {?} */
        const scrollPosition = this.getViewportScrollPosition();
        const {
          width,
          height
        } = this.getViewportSize();
        return {
          top: scrollPosition.top,
          left: scrollPosition.left,
          bottom: scrollPosition.top + height,
          right: scrollPosition.left + width,
          height,
          width
        };
      }
      /**
       * Gets the (top, left) scroll position of the viewport.
       * @return {?}
       */


      getViewportScrollPosition() {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
          return {
            top: 0,
            left: 0
          };
        } // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.

        /** @type {?} */


        const documentElement =
        /** @type {?} */
        document.documentElement;
        /** @type {?} */

        const documentRect = documentElement.getBoundingClientRect();
        /** @type {?} */

        const top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
        /** @type {?} */

        const left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
        return {
          top,
          left
        };
      }
      /**
       * Returns a stream that emits whenever the size of the viewport changes.
       * @param {?=} throttleTime Time in milliseconds to throttle the stream.
       * @return {?}
       */


      change(throttleTime = DEFAULT_RESIZE_TIME) {
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
      }
      /**
       * Updates the cached viewport size.
       * @private
       * @return {?}
       */


      _updateViewportSize() {
        this._viewportSize = this._platform.isBrowser ? {
          width: window.innerWidth,
          height: window.innerHeight
        } : {
          width: 0,
          height: 0
        };
      }

    }

    ViewportRuler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ViewportRuler.ctorParameters = () => [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
    }];
    /** @nocollapse */


    ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ViewportRuler_Factory() {
        return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      },
      token: ViewportRuler,
      providedIn: "root"
    });
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentRuler
     * @param {?} platform
     * @param {?} ngZone
     * @return {?}
     */

    function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
      return parentRuler || new ViewportRuler(platform, ngZone);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    const VIEWPORT_RULER_PROVIDER = {
      // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
      provide: ViewportRuler,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
      useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=scrolling.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/core/typings/index.ngfactory.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/core/typings/index.ngfactory.js ***!
    \************************************************************************/

  /*! exports provided: MatCommonModuleNgFactory, NativeDateModuleNgFactory, MatNativeDateModuleNgFactory, MatLineModuleNgFactory, MatOptionModuleNgFactory, MatRippleModuleNgFactory, MatPseudoCheckboxModuleNgFactory, RenderType_MatOption, View_MatOption_0, View_MatOption_Host_0, MatOptionNgFactory, RenderType_MatOptgroup, View_MatOptgroup_0, View_MatOptgroup_Host_0, MatOptgroupNgFactory, RenderType_MatPseudoCheckbox, View_MatPseudoCheckbox_0, View_MatPseudoCheckbox_Host_0, MatPseudoCheckboxNgFactory */

  /***/
  function node_modulesAngularMaterialCoreTypingsIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCommonModuleNgFactory", function () {
      return MatCommonModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateModuleNgFactory", function () {
      return NativeDateModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNativeDateModuleNgFactory", function () {
      return MatNativeDateModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineModuleNgFactory", function () {
      return MatLineModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionModuleNgFactory", function () {
      return MatOptionModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRippleModuleNgFactory", function () {
      return MatRippleModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModuleNgFactory", function () {
      return MatPseudoCheckboxModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatOption", function () {
      return RenderType_MatOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatOption_0", function () {
      return View_MatOption_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatOption_Host_0", function () {
      return View_MatOption_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionNgFactory", function () {
      return MatOptionNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatOptgroup", function () {
      return RenderType_MatOptgroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatOptgroup_0", function () {
      return View_MatOptgroup_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatOptgroup_Host_0", function () {
      return View_MatOptgroup_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptgroupNgFactory", function () {
      return MatOptgroupNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatPseudoCheckbox", function () {
      return RenderType_MatPseudoCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatPseudoCheckbox_0", function () {
      return View_MatPseudoCheckbox_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatPseudoCheckbox_Host_0", function () {
      return View_MatPseudoCheckbox_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxNgFactory", function () {
      return MatPseudoCheckboxNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var MatCommonModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HAMMER_LOADER"]]])]);
    });

    var NativeDateModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateModule"], [])]);
    });

    var MatNativeDateModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_NATIVE_DATE_FORMATS"], [])]);
    });

    var MatLineModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], [])]);
    });

    var MatOptionModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"], [])]);
    });

    var MatRippleModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], [])]);
    });

    var MatPseudoCheckboxModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatPseudoCheckboxModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatPseudoCheckboxModule"], [])]);
    });

    var styles_MatOption = [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"];

    var RenderType_MatOption = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatOption,
      data: {}
    });

    function View_MatOption_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-pseudo-checkbox", [["class", "mat-option-pseudo-checkbox mat-pseudo-checkbox"]], [[2, "mat-pseudo-checkbox-indeterminate", null], [2, "mat-pseudo-checkbox-checked", null], [2, "mat-pseudo-checkbox-disabled", null], [2, "_mat-animation-noopable", null]], null, null, View_MatPseudoCheckbox_0, RenderType_MatPseudoCheckbox)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatPseudoCheckbox"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
        state: [0, "state"],
        disabled: [1, "disabled"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_4 = _co.selected ? "checked" : "";
        var currVal_5 = _co.disabled;

        _ck(_v, 1, 0, currVal_4, currVal_5);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).state === "indeterminate";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).state === "checked";

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_MatOption_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatOption_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["class", "mat-option-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [["class", "mat-option-ripple mat-ripple"], ["mat-ripple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 212992, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_RIPPLE_GLOBAL_OPTIONS"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], {
        disabled: [0, "disabled"],
        trigger: [1, "trigger"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.multiple;

        _ck(_v, 1, 0, currVal_0);

        var currVal_2 = _co.disabled || _co.disableRipple;

        var currVal_3 = _co._getHostElement();

        _ck(_v, 5, 0, currVal_2, currVal_3);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).unbounded;

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_MatOption_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._selectViaInteraction() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, View_MatOption_0, RenderType_MatOption)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 8568832, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatOptgroup"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._getTabIndex();

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).selected;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).multiple;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).active;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).id;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._getAriaSelected();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled.toString();

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
      });
    }

    var MatOptionNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-option", _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatOption"], View_MatOption_Host_0, {
      value: "value",
      id: "id",
      disabled: "disabled"
    }, {
      onSelectionChange: "onSelectionChange"
    }, ["*"]);

    var styles_MatOptgroup = [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"];

    var RenderType_MatOptgroup = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatOptgroup,
      data: {}
    });

    function View_MatOptgroup_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "label", [["class", "mat-optgroup-label"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1)], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co._labelId;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co.label;

        _ck(_v, 1, 0, currVal_1);
      });
    }

    function View_MatOptgroup_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-optgroup", [["class", "mat-optgroup"], ["role", "group"]], [[2, "mat-optgroup-disabled", null], [1, "aria-disabled", 0], [1, "aria-labelledby", 0]], null, null, View_MatOptgroup_0, RenderType_MatOptgroup)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatOptgroup"], [], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled.toString();

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._labelId;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    var MatOptgroupNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-optgroup", _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatOptgroup"], View_MatOptgroup_Host_0, {
      disabled: "disabled",
      label: "label"
    }, {}, ["*", "mat-option, ng-container"]);

    var styles_MatPseudoCheckbox = [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"];

    var RenderType_MatPseudoCheckbox = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatPseudoCheckbox,
      data: {}
    });

    function View_MatPseudoCheckbox_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [], null, null);
    }

    function View_MatPseudoCheckbox_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-pseudo-checkbox", [["class", "mat-pseudo-checkbox"]], [[2, "mat-pseudo-checkbox-indeterminate", null], [2, "mat-pseudo-checkbox-checked", null], [2, "mat-pseudo-checkbox-disabled", null], [2, "_mat-animation-noopable", null]], null, null, View_MatPseudoCheckbox_0, RenderType_MatPseudoCheckbox)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatPseudoCheckbox"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).state === "indeterminate";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).state === "checked";

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      });
    }

    var MatPseudoCheckboxNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-pseudo-checkbox", _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatPseudoCheckbox"], View_MatPseudoCheckbox_Host_0, {
      state: "state",
      disabled: "disabled"
    }, {}, []);
    /***/

  },

  /***/
  "./node_modules/@angular/material/esm2015/core.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/core.js ***!
    \********************************************************/

  /*! exports provided: VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, ɵa1 */

  /***/
  function node_modulesAngularMaterialEsm2015CoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
      return AnimationCurves;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
      return AnimationDurations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
      return MatCommonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
      return MATERIAL_SANITY_CHECKS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
      return mixinDisabled;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
      return mixinColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
      return mixinDisableRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
      return mixinTabIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
      return mixinErrorState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
      return mixinInitialized;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
      return NativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
      return MatNativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
      return MAT_DATE_LOCALE_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
      return MAT_DATE_LOCALE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function () {
      return MAT_DATE_LOCALE_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return DateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
      return MAT_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
      return NativeDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
      return MAT_NATIVE_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
      return ShowOnDirtyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
      return ErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function () {
      return MAT_HAMMER_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GestureConfig", function () {
      return GestureConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setLines", function () {
      return setLines;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLine", function () {
      return MatLine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineSetter", function () {
      return MatLineSetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
      return MatLineModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
      return MatOptionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
      return _countGroupLabelsBeforeOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
      return _getOptionScrollPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
      return MatOptionSelectionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
      return MAT_OPTION_PARENT_COMPONENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOption", function () {
      return MatOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
      return MatOptgroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function () {
      return MAT_LABEL_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
      return MatRippleModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
      return MAT_RIPPLE_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
      return MatRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleState", function () {
      return RippleState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
      return RippleRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
      return defaultRippleAnimationConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
      return RippleRenderer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
      return MatPseudoCheckboxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
      return MatPseudoCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JAN", function () {
      return JAN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FEB", function () {
      return FEB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAR", function () {
      return MAR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APR", function () {
      return APR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAY", function () {
      return MAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JUN", function () {
      return JUN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JUL", function () {
      return JUL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUG", function () {
      return AUG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEP", function () {
      return SEP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OCT", function () {
      return OCT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NOV", function () {
      return NOV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEC", function () {
      return DEC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa1", function () {
      return MATERIAL_SANITY_CHECKS_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk */
    "./node_modules/@angular/cdk/esm2015/cdk.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Current version of Angular Material.
     * @type {?}
     */


    const VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     */

    class AnimationCurves {}

    AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
    /**
     * \@docs-private
     */

    class AnimationDurations {}

    AnimationDurations.COMPLEX = '375ms';
    AnimationDurations.ENTERING = '225ms';
    AnimationDurations.EXITING = '195ms';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Private version constant to circumvent test/build issues,
    // i.e. avoid core to depend on the @angular/material primary entry-point
    // Can be removed once the Material primary entry-point no longer
    // re-exports all secondary entry-points

    /** @type {?} */

    const VERSION$2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
    /**
     * \@docs-private
     * @return {?}
     */

    function MATERIAL_SANITY_CHECKS_FACTORY() {
      return true;
    }
    /**
     * Injection token that configures whether the Material sanity checks are enabled.
     * @type {?}
     */


    const MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
      providedIn: 'root',
      factory: MATERIAL_SANITY_CHECKS_FACTORY
    });
    /**
     * Module that captures anything that should be loaded and/or run for *all* Angular Material
     * components. This includes Bidi, etc.
     *
     * This module should be imported to each top-level component module (e.g., MatTabsModule).
     */

    class MatCommonModule {
      /**
       * @param {?} _sanityChecksEnabled
       * @param {?=} _hammerLoader
       */
      constructor(_sanityChecksEnabled, _hammerLoader) {
        this._sanityChecksEnabled = _sanityChecksEnabled;
        this._hammerLoader = _hammerLoader;
        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */

        this._hasDoneGlobalChecks = false;
        /**
         * Whether we've already checked for HammerJs availability.
         */

        this._hasCheckedHammer = false;
        /**
         * Reference to the global `document` object.
         */

        this._document = typeof document === 'object' && document ? document : null;
        /**
         * Reference to the global 'window' object.
         */

        this._window = typeof window === 'object' && window ? window : null;

        if (this._areChecksEnabled() && !this._hasDoneGlobalChecks) {
          this._checkDoctypeIsDefined();

          this._checkThemeIsPresent();

          this._checkCdkVersionMatch();

          this._hasDoneGlobalChecks = true;
        }
      }
      /**
       * Whether any sanity checks are enabled
       * @private
       * @return {?}
       */


      _areChecksEnabled() {
        return this._sanityChecksEnabled && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
      }
      /**
       * Whether the code is running in tests.
       * @private
       * @return {?}
       */


      _isTestEnv() {
        /** @type {?} */
        const window =
        /** @type {?} */
        this._window;
        return window && (window.__karma__ || window.jasmine);
      }
      /**
       * @private
       * @return {?}
       */


      _checkDoctypeIsDefined() {
        if (this._document && !this._document.doctype) {
          console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
        }
      }
      /**
       * @private
       * @return {?}
       */


      _checkThemeIsPresent() {
        // We need to assert that the `body` is defined, because these checks run very early
        // and the `body` won't be defined if the consumer put their scripts in the `head`.
        if (!this._document || !this._document.body || typeof getComputedStyle !== 'function') {
          return;
        }
        /** @type {?} */


        const testElement = this._document.createElement('div');

        testElement.classList.add('mat-theme-loaded-marker');

        this._document.body.appendChild(testElement);
        /** @type {?} */


        const computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
        // Firefox, the computed style is null if an application is running inside of a hidden iframe.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

        if (computedStyle && computedStyle.display !== 'none') {
          console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
        }

        this._document.body.removeChild(testElement);
      }
      /**
       * Checks whether the material version matches the cdk version
       * @private
       * @return {?}
       */


      _checkCdkVersionMatch() {
        if (VERSION$2.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
          console.warn('The Angular Material version (' + VERSION$2.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
        }
      }
      /**
       * Checks whether HammerJS is available.
       * @return {?}
       */


      _checkHammerIsAvailable() {
        if (this._hasCheckedHammer || !this._window) {
          return;
        }

        if (this._areChecksEnabled() && !
        /** @type {?} */
        this._window['Hammer'] && !this._hammerLoader) {
          console.warn('Could not find HammerJS. Certain Angular Material components may not work correctly.');
        }

        this._hasCheckedHammer = true;
      }

    }

    MatCommonModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
        exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
      }]
    }];
    /** @nocollapse */

    MatCommonModule.ctorParameters = () => [{
      type: Boolean,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [MATERIAL_SANITY_CHECKS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinDisabled(base) {
      return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
          super(...args);
          this._disabled = false;
        }
        /**
         * @return {?}
         */


        get disabled() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        set disabled(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }

      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `color` property.
     * @template T
     * @param {?} base
     * @param {?=} defaultColor
     * @return {?}
     */


    function mixinColor(base, defaultColor) {
      return class extends base {
        /**
         * @return {?}
         */
        get color() {
          return this._color;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        set color(value) {
          /** @type {?} */
          const colorPalette = value || defaultColor;

          if (colorPalette !== this._color) {
            if (this._color) {
              this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
            }

            if (colorPalette) {
              this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
            }

            this._color = colorPalette;
          }
        }
        /**
         * @param {...?} args
         */


        constructor(...args) {
          super(...args); // Set the default color that can be specified from the mixin.

          this.color = defaultColor;
        }

      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `disableRipple` property.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinDisableRipple(base) {
      return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
          super(...args);
          this._disableRipple = false;
        }
        /**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */


        get disableRipple() {
          return this._disableRipple;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        set disableRipple(value) {
          this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }

      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `tabIndex` property.
     * @template T
     * @param {?} base
     * @param {?=} defaultTabIndex
     * @return {?}
     */


    function mixinTabIndex(base, defaultTabIndex = 0) {
      return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
          super(...args);
          this._tabIndex = defaultTabIndex;
        }
        /**
         * @return {?}
         */


        get tabIndex() {
          return this.disabled ? -1 : this._tabIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */


        set tabIndex(value) {
          // If the specified tabIndex value is null or undefined, fall back to the default value.
          this._tabIndex = value != null ? value : defaultTabIndex;
        }

      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with updateErrorState method.
     * For component with `errorState` and need to update `errorState`.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinErrorState(base) {
      return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
          super(...args);
          /**
           * Whether the component is in an error state.
           */

          this.errorState = false;
          /**
           * Stream that emits whenever the state of the input changes such that the wrapping
           * `MatFormField` needs to run change detection.
           */

          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }
        /**
         * @return {?}
         */


        updateErrorState() {
          /** @type {?} */
          const oldState = this.errorState;
          /** @type {?} */

          const parent = this._parentFormGroup || this._parentForm;
          /** @type {?} */

          const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
          /** @type {?} */

          const control = this.ngControl ?
          /** @type {?} */
          this.ngControl.control : null;
          /** @type {?} */

          const newState = matcher.isErrorState(control, parent);

          if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
          }
        }

      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinInitialized(base) {
      return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
          super(...args);
          /**
           * Whether this directive has been marked as initialized.
           */

          this._isInitialized = false;
          /**
           * List of subscribers that subscribed before the directive was initialized. Should be notified
           * during _markInitialized. Set to null after pending subscribers are notified, and should
           * not expect to be populated after.
           */

          this._pendingSubscribers = [];
          /**
           * Observable stream that emits when the directive initializes. If already initialized, the
           * subscriber is stored to be notified once _markInitialized is called.
           */

          this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](
          /**
          * @param {?} subscriber
          * @return {?}
          */
          subscriber => {
            // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
            // when _markInitialized is called.
            if (this._isInitialized) {
              this._notifySubscriber(subscriber);
            } else {
              /** @type {?} */
              this._pendingSubscribers.push(subscriber);
            }
          });
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * \@docs-private
         * @return {?}
         */


        _markInitialized() {
          if (this._isInitialized) {
            throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
          }

          this._isInitialized = true;

          /** @type {?} */
          this._pendingSubscribers.forEach(this._notifySubscriber);

          this._pendingSubscribers = null;
        }
        /**
         * Emits and completes the subscriber stream (should only emit once).
         * @param {?} subscriber
         * @return {?}
         */


        _notifySubscriber(subscriber) {
          subscriber.next();
          subscriber.complete();
        }

      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken for datepicker that can be used to override default locale code.
     * @type {?}
     */


    const MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
      providedIn: 'root',
      factory: MAT_DATE_LOCALE_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_DATE_LOCALE_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
    }
    /**
     * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
     * If you are importing and providing this in your code you can simply remove it.
     * @deprecated
     * \@breaking-change 8.0.0
     * @type {?}
     */


    const MAT_DATE_LOCALE_PROVIDER = {
      provide: MAT_DATE_LOCALE,
      useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]
    };
    /**
     * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
     * @abstract
     * @template D
     */

    class DateAdapter {
      constructor() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }
      /**
       * A stream that emits when the locale changes.
       * @return {?}
       */


      get localeChanges() {
        return this._localeChanges;
      }
      /**
       * Attempts to deserialize a value to a valid date object. This is different from parsing in that
       * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
       * string). The default implementation does not allow any deserialization, it simply checks that
       * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
       * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
       * support passing values from your backend directly to these properties by overriding this method
       * to also deserialize the format used by your backend.
       * @param {?} value The value to be deserialized into a date object.
       * @return {?} The deserialized date object, either a valid date, null if the value can be
       *     deserialized into a null date (e.g. the empty string), or an invalid date.
       */


      deserialize(value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
          return value;
        }

        return this.invalid();
      }
      /**
       * Sets the locale used for all dates.
       * @param {?} locale The new locale.
       * @return {?}
       */


      setLocale(locale) {
        this.locale = locale;

        this._localeChanges.next();
      }
      /**
       * Compares two dates.
       * @param {?} first The first date to compare.
       * @param {?} second The second date to compare.
       * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
       *     a number greater than 0 if the first date is later.
       */


      compareDate(first, second) {
        return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
      }
      /**
       * Checks if two dates are equal.
       * @param {?} first The first date to check.
       * @param {?} second The second date to check.
       * @return {?} Whether the two dates are equal.
       *     Null dates are considered equal to other null dates.
       */


      sameDate(first, second) {
        if (first && second) {
          /** @type {?} */
          let firstValid = this.isValid(first);
          /** @type {?} */

          let secondValid = this.isValid(second);

          if (firstValid && secondValid) {
            return !this.compareDate(first, second);
          }

          return firstValid == secondValid;
        }

        return first == second;
      }
      /**
       * Clamp the given date between min and max dates.
       * @param {?} date The date to clamp.
       * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
       * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
       * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
       *     otherwise `date`.
       */


      clampDate(date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
          return min;
        }

        if (max && this.compareDate(date, max) > 0) {
          return max;
        }

        return date;
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    const MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(mmalerba): Remove when we no longer support safari 9.

    /**
     * Whether the browser supports the Intl API.
     * @type {?}
     */

    let SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      SUPPORTS_INTL_API = typeof Intl != 'undefined';
    } catch (_a) {
      SUPPORTS_INTL_API = false;
    }
    /**
     * The default month names to use if Intl API is not available.
     * @type {?}
     */


    const DEFAULT_MONTH_NAMES = {
      'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    };

    const ɵ0 =
    /**
    * @param {?} i
    * @return {?}
    */
    i => String(i + 1);
    /**
     * The default date names to use if Intl API is not available.
     * @type {?}
     */


    const DEFAULT_DATE_NAMES = range(31, ɵ0);
    /**
     * The default day of the week names to use if Intl API is not available.
     * @type {?}
     */

    const DEFAULT_DAY_OF_WEEK_NAMES = {
      'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };
    /**
     * Matches strings that have the form of a valid RFC 3339 string
     * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
     * because the regex will match strings an with out of bounds month, date, etc.
     * @type {?}
     */

    const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
    /**
     * Creates an array and fills it with values.
     * @template T
     * @param {?} length
     * @param {?} valueFunction
     * @return {?}
     */

    function range(length, valueFunction) {
      /** @type {?} */
      const valuesArray = Array(length);

      for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
      }

      return valuesArray;
    }
    /**
     * Adapts the native JS Date for use with cdk-based components that work with dates.
     */


    class NativeDateAdapter extends DateAdapter {
      /**
       * @param {?} matDateLocale
       * @param {?} platform
       */
      constructor(matDateLocale, platform) {
        super();
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */

        this.useUtcForDisplay = true;
        super.setLocale(matDateLocale); // IE does its own time zone correction, so we disable this on IE.

        this.useUtcForDisplay = !platform.TRIDENT;
        this._clampDate = platform.TRIDENT || platform.EDGE;
      }
      /**
       * @param {?} date
       * @return {?}
       */


      getYear(date) {
        return date.getFullYear();
      }
      /**
       * @param {?} date
       * @return {?}
       */


      getMonth(date) {
        return date.getMonth();
      }
      /**
       * @param {?} date
       * @return {?}
       */


      getDate(date) {
        return date.getDate();
      }
      /**
       * @param {?} date
       * @return {?}
       */


      getDayOfWeek(date) {
        return date.getDay();
      }
      /**
       * @param {?} style
       * @return {?}
       */


      getMonthNames(style) {
        if (SUPPORTS_INTL_API) {
          /** @type {?} */
          const dtf = new Intl.DateTimeFormat(this.locale, {
            month: style,
            timeZone: 'utc'
          });
          return range(12,
          /**
          * @param {?} i
          * @return {?}
          */
          i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1))));
        }

        return DEFAULT_MONTH_NAMES[style];
      }
      /**
       * @return {?}
       */


      getDateNames() {
        if (SUPPORTS_INTL_API) {
          /** @type {?} */
          const dtf = new Intl.DateTimeFormat(this.locale, {
            day: 'numeric',
            timeZone: 'utc'
          });
          return range(31,
          /**
          * @param {?} i
          * @return {?}
          */
          i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
        }

        return DEFAULT_DATE_NAMES;
      }
      /**
       * @param {?} style
       * @return {?}
       */


      getDayOfWeekNames(style) {
        if (SUPPORTS_INTL_API) {
          /** @type {?} */
          const dtf = new Intl.DateTimeFormat(this.locale, {
            weekday: style,
            timeZone: 'utc'
          });
          return range(7,
          /**
          * @param {?} i
          * @return {?}
          */
          i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1))));
        }

        return DEFAULT_DAY_OF_WEEK_NAMES[style];
      }
      /**
       * @param {?} date
       * @return {?}
       */


      getYearName(date) {
        if (SUPPORTS_INTL_API) {
          /** @type {?} */
          const dtf = new Intl.DateTimeFormat(this.locale, {
            year: 'numeric',
            timeZone: 'utc'
          });
          return this._stripDirectionalityCharacters(this._format(dtf, date));
        }

        return String(this.getYear(date));
      }
      /**
       * @return {?}
       */


      getFirstDayOfWeek() {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
      }
      /**
       * @param {?} date
       * @return {?}
       */


      getNumDaysInMonth(date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
      }
      /**
       * @param {?} date
       * @return {?}
       */


      clone(date) {
        return new Date(date.getTime());
      }
      /**
       * @param {?} year
       * @param {?} month
       * @param {?} date
       * @return {?}
       */


      createDate(year, month, date) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
          throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
        }

        if (date < 1) {
          throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
        }
        /** @type {?} */


        let result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


        if (result.getMonth() != month) {
          throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
        }

        return result;
      }
      /**
       * @return {?}
       */


      today() {
        return new Date();
      }
      /**
       * @param {?} value
       * @return {?}
       */


      parse(value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        if (typeof value == 'number') {
          return new Date(value);
        }

        return value ? new Date(Date.parse(value)) : null;
      }
      /**
       * @param {?} date
       * @param {?} displayFormat
       * @return {?}
       */


      format(date, displayFormat) {
        if (!this.isValid(date)) {
          throw Error('NativeDateAdapter: Cannot format invalid date.');
        }

        if (SUPPORTS_INTL_API) {
          // On IE and Edge the i18n API will throw a hard error that can crash the entire app
          // if we attempt to format a date whose year is less than 1 or greater than 9999.
          if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
            date = this.clone(date);
            date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
          }

          displayFormat = Object.assign({}, displayFormat, {
            timeZone: 'utc'
          });
          /** @type {?} */

          const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
          return this._stripDirectionalityCharacters(this._format(dtf, date));
        }

        return this._stripDirectionalityCharacters(date.toDateString());
      }
      /**
       * @param {?} date
       * @param {?} years
       * @return {?}
       */


      addCalendarYears(date, years) {
        return this.addCalendarMonths(date, years * 12);
      }
      /**
       * @param {?} date
       * @param {?} months
       * @return {?}
       */


      addCalendarMonths(date, months) {
        /** @type {?} */
        let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.


        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
          newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }

        return newDate;
      }
      /**
       * @param {?} date
       * @param {?} days
       * @return {?}
       */


      addCalendarDays(date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
      }
      /**
       * @param {?} date
       * @return {?}
       */


      toIso8601(date) {
        return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
      }
      /**
       * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
       * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
       * invalid date for all other values.
       * @param {?} value
       * @return {?}
       */


      deserialize(value) {
        if (typeof value === 'string') {
          if (!value) {
            return null;
          } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
          // string is the right format first.


          if (ISO_8601_REGEX.test(value)) {
            /** @type {?} */
            let date = new Date(value);

            if (this.isValid(date)) {
              return date;
            }
          }
        }

        return super.deserialize(value);
      }
      /**
       * @param {?} obj
       * @return {?}
       */


      isDateInstance(obj) {
        return obj instanceof Date;
      }
      /**
       * @param {?} date
       * @return {?}
       */


      isValid(date) {
        return !isNaN(date.getTime());
      }
      /**
       * @return {?}
       */


      invalid() {
        return new Date(NaN);
      }
      /**
       * Creates a date but allows the month and date to overflow.
       * @private
       * @param {?} year
       * @param {?} month
       * @param {?} date
       * @return {?}
       */


      _createDateWithOverflow(year, month, date) {
        /** @type {?} */
        const result = new Date(year, month, date); // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.

        if (year >= 0 && year < 100) {
          result.setFullYear(this.getYear(result) - 1900);
        }

        return result;
      }
      /**
       * Pads a number to make it two digits.
       * @private
       * @param {?} n The number to pad.
       * @return {?} The padded number.
       */


      _2digit(n) {
        return ('00' + n).slice(-2);
      }
      /**
       * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
       * other browsers do not. We remove them to make output consistent and because they interfere with
       * date parsing.
       * @private
       * @param {?} str The string to strip direction characters from.
       * @return {?} The stripped string.
       */


      _stripDirectionalityCharacters(str) {
        return str.replace(/[\u200e\u200f]/g, '');
      }
      /**
       * When converting Date object to string, javascript built-in functions may return wrong
       * results because it applies its internal DST rules. The DST rules around the world change
       * very frequently, and the current valid rule is not always valid in previous years though.
       * We work around this problem building a new Date object which has its internal UTC
       * representation with the local date and time.
       * @private
       * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
       *    timeZone set to 'utc' to work fine.
       * @param {?} date Date from which we want to get the string representation according to dtf
       * @return {?} A Date object with its UTC representation based on the passed in date info
       */


      _format(dtf, date) {
        /** @type {?} */
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
      }

    }

    NativeDateAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    NativeDateAdapter.ctorParameters = () => [{
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [MAT_DATE_LOCALE]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    const MAT_NATIVE_DATE_FORMATS = {
      parse: {
        dateInput: null
      },
      display: {
        dateInput: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        },
        monthYearLabel: {
          year: 'numeric',
          month: 'short'
        },
        dateA11yLabel: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        monthYearA11yLabel: {
          year: 'numeric',
          month: 'long'
        }
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class NativeDateModule {}

    NativeDateModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
        providers: [{
          provide: DateAdapter,
          useClass: NativeDateAdapter
        }]
      }]
    }];
    const ɵ0$1 = MAT_NATIVE_DATE_FORMATS;

    class MatNativeDateModule {}

    MatNativeDateModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [NativeDateModule],
        providers: [{
          provide: MAT_DATE_FORMATS,
          useValue: ɵ0$1
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Error state matcher that matches when a control is invalid and dirty.
     */

    class ShowOnDirtyErrorStateMatcher {
      /**
       * @param {?} control
       * @param {?} form
       * @return {?}
       */
      isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || form && form.submitted));
      }

    }

    ShowOnDirtyErrorStateMatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * Provider that defines how form controls behave with regards to displaying error messages.
     */

    class ErrorStateMatcher {
      /**
       * @param {?} control
       * @param {?} form
       * @return {?}
       */
      isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || form && form.submitted));
      }

    }

    ErrorStateMatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ErrorStateMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ErrorStateMatcher_Factory() {
        return new ErrorStateMatcher();
      },
      token: ErrorStateMatcher,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to provide options to the Hammerjs instance.
     * More info at http://hammerjs.github.io/api/.
     * @type {?}
     */

    const MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
    /** @type {?} */

    const ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = ['longpress', 'slide', 'slidestart', 'slideend', 'slideright', 'slideleft'];

    const ɵ0$2 =
    /**
    * @return {?}
    */
    () => {},
          ɵ1 =
    /**
    * @return {?}
    */
    () => {};
    /**
     * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
     * been loaded on the page.
     * @type {?}
     */


    const noopHammerInstance = {
      on: ɵ0$2,
      off: ɵ1
    };
    /**
     * Adjusts configuration of our gesture library, Hammer.
     */

    class GestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
      /**
       * @param {?=} _hammerOptions
       * @param {?=} commonModule
       */
      constructor(_hammerOptions, commonModule) {
        super();
        this._hammerOptions = _hammerOptions;
        /**
         * List of new event names to add to the gesture support list
         */

        this.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;

        if (commonModule) {
          commonModule._checkHammerIsAvailable();
        }
      }
      /**
       * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
       *
       * Our gesture names come from the Material Design gestures spec:
       * https://material.io/design/#gestures-touch-mechanics
       *
       * More information on default recognizers can be found in Hammer docs:
       * http://hammerjs.github.io/recognizer-pan/
       * http://hammerjs.github.io/recognizer-press/
       *
       * @param {?} element Element to which to assign the new HammerJS gestures.
       * @return {?} Newly-created HammerJS instance.
       */


      buildHammer(element) {
        /** @type {?} */
        const hammer = typeof window !== 'undefined' ?
        /** @type {?} */
        window.Hammer : null;

        if (!hammer) {
          // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
          // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
          // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
          // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
          // `this.events` to the set we support, instead of conditionally setting it to `[]` if
          // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
          // undefined).
          // @breaking-change 8.0.0
          return noopHammerInstance;
        }
        /** @type {?} */


        const mc = new hammer(element, this._hammerOptions || undefined); // Default Hammer Recognizers.

        /** @type {?} */

        const pan = new hammer.Pan();
        /** @type {?} */

        const swipe = new hammer.Swipe();
        /** @type {?} */

        const press = new hammer.Press(); // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team

        /** @type {?} */

        const slide = this._createRecognizer(pan, {
          event: 'slide',
          threshold: 0
        }, swipe);
        /** @type {?} */


        const longpress = this._createRecognizer(press, {
          event: 'longpress',
          time: 500
        }); // Overwrite the default `pan` event to use the swipe event.


        pan.recognizeWith(swipe); // Since the slide event threshold is set to zero, the slide recognizer can fire and
        // accidentally reset the longpress recognizer. In order to make sure that the two
        // recognizers can run simultaneously but don't affect each other, we allow the slide
        // recognizer to recognize while a longpress is being processed.
        // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124

        longpress.recognizeWith(slide); // Add customized gestures to Hammer manager

        mc.add([swipe, press, pan, slide, longpress]);
        return (
          /** @type {?} */
          mc
        );
      }
      /**
       * Creates a new recognizer, without affecting the default recognizers of HammerJS
       * @private
       * @param {?} base
       * @param {?} options
       * @param {...?} inheritances
       * @return {?}
       */


      _createRecognizer(base, options, ...inheritances) {
        /** @type {?} */
        let recognizer = new
        /** @type {?} */
        base.constructor(options);
        inheritances.push(base);
        inheritances.forEach(
        /**
        * @param {?} item
        * @return {?}
        */
        item => recognizer.recognizeWith(item));
        return recognizer;
      }

    }

    GestureConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    GestureConfig.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [MAT_HAMMER_OPTIONS]
      }]
    }, {
      type: MatCommonModule,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Shared directive to count lines inside a text area, such as a list item.
     * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
     * counted by checking the query list's length.
     */


    class MatLine {}

    MatLine.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mat-line], [matLine]',
        host: {
          'class': 'mat-line'
        }
      }]
    }];
    /**
     * Helper that takes a query list of lines and sets the correct class on the host.
     * \@docs-private
     * @param {?} lines
     * @param {?} element
     * @return {?}
     */

    function setLines(lines, element) {
      // Note: doesn't need to unsubscribe, because `changes`
      // gets completed by Angular when the view is destroyed.
      lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(lines)).subscribe(
      /**
      * @param {?} __0
      * @return {?}
      */
      ({
        length
      }) => {
        setClass(element, 'mat-2-line', false);
        setClass(element, 'mat-3-line', false);
        setClass(element, 'mat-multi-line', false);

        if (length === 2 || length === 3) {
          setClass(element, "mat-".concat(length, "-line"), true);
        } else if (length > 3) {
          setClass(element, "mat-multi-line", true);
        }
      });
    }
    /**
     * Adds or removes a class from an element.
     * @param {?} element
     * @param {?} className
     * @param {?} isAdd
     * @return {?}
     */


    function setClass(element, className, isAdd) {
      /** @type {?} */
      const classList = element.nativeElement.classList;
      isAdd ? classList.add(className) : classList.remove(className);
    }
    /**
     * Helper that takes a query list of lines and sets the correct class on the host.
     * \@docs-private
     * @deprecated Use `setLines` instead.
     * \@breaking-change 8.0.0
     */


    class MatLineSetter {
      /**
       * @param {?} lines
       * @param {?} element
       */
      constructor(lines, element) {
        setLines(lines, element);
      }

    }

    class MatLineModule {}

    MatLineModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [MatCommonModule],
        exports: [MatLine, MatCommonModule],
        declarations: [MatLine]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */

    const RippleState = {
      FADING_IN: 0,
      VISIBLE: 1,
      FADING_OUT: 2,
      HIDDEN: 3
    };
    RippleState[RippleState.FADING_IN] = 'FADING_IN';
    RippleState[RippleState.VISIBLE] = 'VISIBLE';
    RippleState[RippleState.FADING_OUT] = 'FADING_OUT';
    RippleState[RippleState.HIDDEN] = 'HIDDEN';
    /**
     * Reference to a previously launched ripple element.
     */

    class RippleRef {
      /**
       * @param {?} _renderer
       * @param {?} element
       * @param {?} config
       */
      constructor(_renderer, element, config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple.
         */

        this.state = RippleState.HIDDEN;
      }
      /**
       * Fades out the ripple element.
       * @return {?}
       */


      fadeOut() {
        this._renderer.fadeOutRipple(this);
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default ripple animation configuration for ripples without an explicit
     * animation config specified.
     * @type {?}
     */


    const defaultRippleAnimationConfig = {
      enterDuration: 450,
      exitDuration: 400
    };
    /**
     * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
     * events to avoid synthetic mouse events.
     * @type {?}
     */

    const ignoreMouseEventsTimeout = 800;
    /**
     * Options that apply to all the event listeners that are bound by the ripple renderer.
     * @type {?}
     */

    const passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Helper service that performs DOM manipulations. Not intended to be used outside this module.
     * The constructor takes a reference to the ripple directive's host element and a map of DOM
     * event handlers to be installed on the element that triggers ripple animations.
     * This will eventually become a custom renderer once Angular support exists.
     * \@docs-private
     */

    class RippleRenderer {
      /**
       * @param {?} _target
       * @param {?} _ngZone
       * @param {?} elementOrElementRef
       * @param {?} platform
       */
      constructor(_target, _ngZone, elementOrElementRef, platform) {
        this._target = _target;
        this._ngZone = _ngZone;
        /**
         * Whether the pointer is currently down or not.
         */

        this._isPointerDown = false;
        /**
         * Events to be registered on the trigger element.
         */

        this._triggerEvents = new Map();
        /**
         * Set of currently active ripple references.
         */

        this._activeRipples = new Set();
        /**
         * Function being called whenever the trigger is being pressed using mouse.
         */

        this._onMousedown =
        /**
        * @param {?} event
        * @return {?}
        */
        event => {
          // Screen readers will fire fake mouse events for space/enter. Skip launching a
          // ripple in this case for consistency with the non-screen-reader experience.

          /** @type {?} */
          const isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["isFakeMousedownFromScreenReader"])(event);
          /** @type {?} */

          const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

          if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
            this._isPointerDown = true;
            this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
          }
        };
        /**
         * Function being called whenever the trigger is being pressed using touch.
         */


        this._onTouchStart =
        /**
        * @param {?} event
        * @return {?}
        */
        event => {
          if (!this._target.rippleDisabled) {
            // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
            // events will launch a second ripple if we don't ignore mouse events for a specific
            // time after a touchstart event.
            this._lastTouchStartEvent = Date.now();
            this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
            // their finger down, but used another finger to tap the element again.

            /** @type {?} */

            const touches = event.changedTouches;

            for (let i = 0; i < touches.length; i++) {
              this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
            }
          }
        };
        /**
         * Function being called whenever the trigger is being released.
         */


        this._onPointerUp =
        /**
        * @return {?}
        */
        () => {
          if (!this._isPointerDown) {
            return;
          }

          this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

          this._activeRipples.forEach(
          /**
          * @param {?} ripple
          * @return {?}
          */
          ripple => {
            // By default, only ripples that are completely visible will fade out on pointer release.
            // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.

            /** @type {?} */
            const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;

            if (!ripple.config.persistent && isVisible) {
              ripple.fadeOut();
            }
          });
        }; // Only do anything if we're on the browser.


        if (platform.isBrowser) {
          this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef); // Specify events which need to be registered on the trigger.

          this._triggerEvents.set('mousedown', this._onMousedown).set('mouseup', this._onPointerUp).set('mouseleave', this._onPointerUp).set('touchstart', this._onTouchStart).set('touchend', this._onPointerUp).set('touchcancel', this._onPointerUp);
        }
      }
      /**
       * Fades in a ripple at the given coordinates.
       * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
       * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
       * @param {?=} config Extra ripple options.
       * @return {?}
       */


      fadeInRipple(x, y, config = {}) {
        /** @type {?} */
        const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
        /** @type {?} */


        const animationConfig = Object.assign({}, defaultRippleAnimationConfig, config.animation);

        if (config.centered) {
          x = containerRect.left + containerRect.width / 2;
          y = containerRect.top + containerRect.height / 2;
        }
        /** @type {?} */


        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        /** @type {?} */

        const offsetX = x - containerRect.left;
        /** @type {?} */

        const offsetY = y - containerRect.top;
        /** @type {?} */

        const duration = animationConfig.enterDuration;
        /** @type {?} */

        const ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = "".concat(offsetX - radius, "px");
        ripple.style.top = "".concat(offsetY - radius, "px");
        ripple.style.height = "".concat(radius * 2, "px");
        ripple.style.width = "".concat(radius * 2, "px"); // If the color is not set, the default CSS color will be used.

        ripple.style.backgroundColor = config.color || null;
        ripple.style.transitionDuration = "".concat(duration, "ms");

        this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.


        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

        /** @type {?} */

        const rippleRef = new RippleRef(this, ripple, config);
        rippleRef.state = RippleState.FADING_IN; // Add the ripple reference to the list of all active ripples.

        this._activeRipples.add(rippleRef);

        if (!config.persistent) {
          this._mostRecentTransientRipple = rippleRef;
        } // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


        this._runTimeoutOutsideZone(
        /**
        * @return {?}
        */
        () => {
          /** @type {?} */
          const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
          rippleRef.state = RippleState.VISIBLE; // When the timer runs out while the user has kept their pointer down, we want to
          // keep only the persistent ripples and the latest transient ripple. We do this,
          // because we don't want stacked transient ripples to appear after their enter
          // animation has finished.

          if (!config.persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
            rippleRef.fadeOut();
          }
        }, duration);

        return rippleRef;
      }
      /**
       * Fades out a ripple reference.
       * @param {?} rippleRef
       * @return {?}
       */


      fadeOutRipple(rippleRef) {
        /** @type {?} */
        const wasActive = this._activeRipples.delete(rippleRef);

        if (rippleRef === this._mostRecentTransientRipple) {
          this._mostRecentTransientRipple = null;
        } // Clear out the cached bounding rect if we have no more ripples.


        if (!this._activeRipples.size) {
          this._containerRect = null;
        } // For ripples that are not active anymore, don't re-run the fade-out animation.


        if (!wasActive) {
          return;
        }
        /** @type {?} */


        const rippleEl = rippleRef.element;
        /** @type {?} */

        const animationConfig = Object.assign({}, defaultRippleAnimationConfig, rippleRef.config.animation);
        rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
        rippleEl.style.opacity = '0';
        rippleRef.state = RippleState.FADING_OUT; // Once the ripple faded out, the ripple can be safely removed from the DOM.

        this._runTimeoutOutsideZone(
        /**
        * @return {?}
        */
        () => {
          rippleRef.state = RippleState.HIDDEN;

          /** @type {?} */
          rippleEl.parentNode.removeChild(rippleEl);
        }, animationConfig.exitDuration);
      }
      /**
       * Fades out all currently active ripples.
       * @return {?}
       */


      fadeOutAll() {
        this._activeRipples.forEach(
        /**
        * @param {?} ripple
        * @return {?}
        */
        ripple => ripple.fadeOut());
      }
      /**
       * Sets up the trigger event listeners
       * @param {?} elementOrElementRef
       * @return {?}
       */


      setupTriggerEvents(elementOrElementRef) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);

        if (!element || element === this._triggerElement) {
          return;
        } // Remove all previously registered event listeners from the trigger element.


        this._removeTriggerEvents();

        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          this._triggerEvents.forEach(
          /**
          * @param {?} fn
          * @param {?} type
          * @return {?}
          */
          (fn, type) => {
            element.addEventListener(type, fn, passiveEventOptions);
          });
        });

        this._triggerElement = element;
      }
      /**
       * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
       * @private
       * @param {?} fn
       * @param {?=} delay
       * @return {?}
       */


      _runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => setTimeout(fn, delay));
      }
      /**
       * Removes previously registered event listeners from the trigger element.
       * @return {?}
       */


      _removeTriggerEvents() {
        if (this._triggerElement) {
          this._triggerEvents.forEach(
          /**
          * @param {?} fn
          * @param {?} type
          * @return {?}
          */
          (fn, type) => {
            /** @type {?} */
            this._triggerElement.removeEventListener(type, fn, passiveEventOptions);
          });
        }
      }

    }
    /**
     * Enforces a style recalculation of a DOM element by computing its styles.
     * @param {?} element
     * @return {?}
     */


    function enforceStyleRecalculation(element) {
      // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
      // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
      // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
      window.getComputedStyle(element).getPropertyValue('opacity');
    }
    /**
     * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
     * @param {?} x
     * @param {?} y
     * @param {?} rect
     * @return {?}
     */


    function distanceToFurthestCorner(x, y, rect) {
      /** @type {?} */
      const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
      /** @type {?} */

      const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
      return Math.sqrt(distX * distX + distY * distY);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to specify the global ripple options.
     * @type {?}
     */


    const MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');

    class MatRipple {
      /**
       * @param {?} _elementRef
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} globalOptions
       * @param {?=} animationMode
       */
      constructor(_elementRef, ngZone, platform, globalOptions, animationMode) {
        this._elementRef = _elementRef;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */

        this.radius = 0;
        this._disabled = false;
        /**
         * Whether ripple directive is initialized and the input bindings are set.
         */

        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);

        if (animationMode === 'NoopAnimations') {
          this._globalOptions.animation = {
            enterDuration: 0,
            exitDuration: 0
          };
        }
      }
      /**
       * Whether click events will not trigger the ripple. Ripples can be still launched manually
       * by using the `launch()` method.
       * @return {?}
       */


      get disabled() {
        return this._disabled;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set disabled(value) {
        this._disabled = value;

        this._setupTriggerEventsIfEnabled();
      }
      /**
       * The element that triggers the ripple when click events are received.
       * Defaults to the directive's host element.
       * @return {?}
       */


      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      /**
       * @param {?} trigger
       * @return {?}
       */


      set trigger(trigger) {
        this._trigger = trigger;

        this._setupTriggerEventsIfEnabled();
      }
      /**
       * @return {?}
       */


      ngOnInit() {
        this._isInitialized = true;

        this._setupTriggerEventsIfEnabled();
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      /**
       * Fades out all currently showing ripple elements.
       * @return {?}
       */


      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      /**
       * Ripple configuration from the directive's input values.
       * \@docs-private Implemented as part of RippleTarget
       * @return {?}
       */


      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: Object.assign({}, this._globalOptions.animation, this.animation),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
        };
      }
      /**
       * Whether ripples on pointer-down are disabled or not.
       * \@docs-private Implemented as part of RippleTarget
       * @return {?}
       */


      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      /**
       * Sets up the trigger event listeners if ripples are enabled.
       * @private
       * @return {?}
       */


      _setupTriggerEventsIfEnabled() {
        if (!this.disabled && this._isInitialized) {
          this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
      }
      /**
       * Launches a manual ripple at the specified coordinated or just by the ripple config.
       * @param {?} configOrX
       * @param {?=} y
       * @param {?=} config
       * @return {?}
       */


      launch(configOrX, y = 0, config) {
        if (typeof configOrX === 'number') {
          return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign({}, this.rippleConfig, config));
        } else {
          return this._rippleRenderer.fadeInRipple(0, 0, Object.assign({}, this.rippleConfig, configOrX));
        }
      }

    }

    MatRipple.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[mat-ripple], [matRipple]',
        exportAs: 'matRipple',
        host: {
          'class': 'mat-ripple',
          '[class.mat-ripple-unbounded]': 'unbounded'
        }
      }]
    }];
    /** @nocollapse */

    MatRipple.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
      }]
    }];

    MatRipple.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleColor']
      }],
      unbounded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleUnbounded']
      }],
      centered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleCentered']
      }],
      radius: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleRadius']
      }],
      animation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleAnimation']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleDisabled']
      }],
      trigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleTrigger']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class MatRippleModule {}

    MatRippleModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
        exports: [MatRipple, MatCommonModule],
        declarations: [MatRipple]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Component that shows a simplified checkbox without including any kind of "real" checkbox.
     * Meant to be used when the checkbox is purely decorative and a large number of them will be
     * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
     * Note that theming is meant to be handled by the parent element, e.g.
     * `mat-primary .mat-pseudo-checkbox`.
     *
     * Note that this component will be completely invisible to screen-reader users. This is *not*
     * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
     * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
     * of more complex components that appropriately handle selected / checked state.
     * \@docs-private
     */

    class MatPseudoCheckbox {
      /**
       * @param {?=} _animationMode
       */
      constructor(_animationMode) {
        this._animationMode = _animationMode;
        /**
         * Display state of the checkbox.
         */

        this.state = 'unchecked';
        /**
         * Whether the checkbox is disabled.
         */

        this.disabled = false;
      }

    }

    MatPseudoCheckbox.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        selector: 'mat-pseudo-checkbox',
        styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
        template: '',
        host: {
          'class': 'mat-pseudo-checkbox',
          '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
          '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
          '[class.mat-pseudo-checkbox-disabled]': 'disabled',
          '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
        }
      }]
    }];
    /** @nocollapse */

    MatPseudoCheckbox.ctorParameters = () => [{
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
      }]
    }];

    MatPseudoCheckbox.propDecorators = {
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class MatPseudoCheckboxModule {}

    MatPseudoCheckboxModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        exports: [MatPseudoCheckbox],
        declarations: [MatPseudoCheckbox]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatOptgroup.

    /**
     * \@docs-private
     */

    class MatOptgroupBase {}
    /** @type {?} */


    const _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.

    /** @type {?} */


    let _uniqueOptgroupIdCounter = 0;
    /**
     * Component that is used to group instances of `mat-option`.
     */

    class MatOptgroup extends _MatOptgroupMixinBase {
      constructor() {
        super(...arguments);
        /**
         * Unique id for the underlying label.
         */

        this._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
      }

    }

    MatOptgroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-optgroup',
        exportAs: 'matOptgroup',
        template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}<ng-content></ng-content></label><ng-content select=\"mat-option, ng-container\"></ng-content>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        inputs: ['disabled'],
        styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
        host: {
          'class': 'mat-optgroup',
          'role': 'group',
          '[class.mat-optgroup-disabled]': 'disabled',
          '[attr.aria-disabled]': 'disabled.toString()',
          '[attr.aria-labelledby]': '_labelId'
        }
      }]
    }];
    MatOptgroup.propDecorators = {
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Option IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     * @type {?}
     */

    let _uniqueIdCounter = 0;
    /**
     * Event object emitted by MatOption when selected or deselected.
     */

    class MatOptionSelectionChange {
      /**
       * @param {?} source
       * @param {?=} isUserInput
       */
      constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
      }

    }
    /**
     * Injection token used to provide the parent component to options.
     * @type {?}
     */


    const MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
    /**
     * Single option inside of a `<mat-select>` element.
     */

    class MatOption {
      /**
       * @param {?} _element
       * @param {?} _changeDetectorRef
       * @param {?} _parent
       * @param {?} group
       */
      constructor(_element, _changeDetectorRef, _parent, group) {
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /**
         * The unique ID of the option.
         */

        this.id = "mat-option-".concat(_uniqueIdCounter++);
        /**
         * Event emitted when the option is selected or deselected.
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the state of the option changes and any parents have to be notified.
         */

        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }
      /**
       * Whether the wrapping component is in multiple selection mode.
       * @return {?}
       */


      get multiple() {
        return this._parent && this._parent.multiple;
      }
      /**
       * Whether or not the option is currently selected.
       * @return {?}
       */


      get selected() {
        return this._selected;
      }
      /**
       * Whether the option is disabled.
       * @return {?}
       */


      get disabled() {
        return this.group && this.group.disabled || this._disabled;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
      }
      /**
       * Whether ripples for the option are disabled.
       * @return {?}
       */


      get disableRipple() {
        return this._parent && this._parent.disableRipple;
      }
      /**
       * Whether or not the option is currently active and ready to be selected.
       * An active option displays styles as if it is focused, but the
       * focus is actually retained somewhere else. This comes in handy
       * for components like autocomplete where focus must remain on the input.
       * @return {?}
       */


      get active() {
        return this._active;
      }
      /**
       * The displayed value of the option. It is necessary to show the selected option in the
       * select's trigger.
       * @return {?}
       */


      get viewValue() {
        // TODO(kara): Add input property alternative for node envs.
        return (this._getHostElement().textContent || '').trim();
      }
      /**
       * Selects the option.
       * @return {?}
       */


      select() {
        if (!this._selected) {
          this._selected = true;

          this._changeDetectorRef.markForCheck();

          this._emitSelectionChangeEvent();
        }
      }
      /**
       * Deselects the option.
       * @return {?}
       */


      deselect() {
        if (this._selected) {
          this._selected = false;

          this._changeDetectorRef.markForCheck();

          this._emitSelectionChangeEvent();
        }
      }
      /**
       * Sets focus onto this option.
       * @param {?=} _origin
       * @param {?=} options
       * @return {?}
       */


      focus(_origin, options) {
        // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
        // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.

        /** @type {?} */
        const element = this._getHostElement();

        if (typeof element.focus === 'function') {
          element.focus(options);
        }
      }
      /**
       * This method sets display styles on the option to make it appear
       * active. This is used by the ActiveDescendantKeyManager so key
       * events will display the proper options as active on arrow key events.
       * @return {?}
       */


      setActiveStyles() {
        if (!this._active) {
          this._active = true;

          this._changeDetectorRef.markForCheck();
        }
      }
      /**
       * This method removes display styles on the option that made it appear
       * active. This is used by the ActiveDescendantKeyManager so key
       * events will display the proper options as active on arrow key events.
       * @return {?}
       */


      setInactiveStyles() {
        if (this._active) {
          this._active = false;

          this._changeDetectorRef.markForCheck();
        }
      }
      /**
       * Gets the label to be used when determining whether the option should be focused.
       * @return {?}
       */


      getLabel() {
        return this.viewValue;
      }
      /**
       * Ensures the option is selected when activated from the keyboard.
       * @param {?} event
       * @return {?}
       */


      _handleKeydown(event) {
        if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
          this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


          event.preventDefault();
        }
      }
      /**
       * `Selects the option while indicating the selection came from the user. Used to
       * determine if the select's view -> model callback should be invoked.`
       * @return {?}
       */


      _selectViaInteraction() {
        if (!this.disabled) {
          this._selected = this.multiple ? !this._selected : true;

          this._changeDetectorRef.markForCheck();

          this._emitSelectionChangeEvent(true);
        }
      }
      /**
       * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
       * attribute from single-selection, unselected options. Including the `aria-selected="false"`
       * attributes adds a significant amount of noise to screen-reader users without providing useful
       * information.
       * @return {?}
       */


      _getAriaSelected() {
        return this.selected || (this.multiple ? false : null);
      }
      /**
       * Returns the correct tabindex for the option depending on disabled state.
       * @return {?}
       */


      _getTabIndex() {
        return this.disabled ? '-1' : '0';
      }
      /**
       * Gets the host DOM element.
       * @return {?}
       */


      _getHostElement() {
        return this._element.nativeElement;
      }
      /**
       * @return {?}
       */


      ngAfterViewChecked() {
        // Since parent components could be using the option's label to display the selected values
        // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
        // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
        // relatively cheap, however we still limit them only to selected options in order to avoid
        // hitting the DOM too often.
        if (this._selected) {
          /** @type {?} */
          const viewValue = this.viewValue;

          if (viewValue !== this._mostRecentViewValue) {
            this._mostRecentViewValue = viewValue;

            this._stateChanges.next();
          }
        }
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._stateChanges.complete();
      }
      /**
       * Emits the selection change event.
       * @private
       * @param {?=} isUserInput
       * @return {?}
       */


      _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
      }

    }

    MatOption.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-option',
        exportAs: 'matOption',
        host: {
          'role': 'option',
          '[attr.tabindex]': '_getTabIndex()',
          '[class.mat-selected]': 'selected',
          '[class.mat-option-multiple]': 'multiple',
          '[class.mat-active]': 'active',
          '[id]': 'id',
          '[attr.aria-selected]': '_getAriaSelected()',
          '[attr.aria-disabled]': 'disabled.toString()',
          '[class.mat-option-disabled]': 'disabled',
          '(click)': '_selectViaInteraction()',
          '(keydown)': '_handleKeydown($event)',
          'class': 'mat-option'
        },
        styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
        template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\" [state]=\"selected ? 'checked' : ''\" [disabled]=\"disabled\"></mat-pseudo-checkbox><span class=\"mat-option-text\"><ng-content></ng-content></span><div class=\"mat-option-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\"></div>",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatOption.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [MAT_OPTION_PARENT_COMPONENT]
      }]
    }, {
      type: MatOptgroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }]
    }];

    MatOption.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onSelectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * Counts the amount of option group labels that precede the specified option.
     * \@docs-private
     * @param {?} optionIndex Index of the option at which to start counting.
     * @param {?} options Flat list of all of the options.
     * @param {?} optionGroups Flat list of all of the option groups.
     * @return {?}
     */

    function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
      if (optionGroups.length) {
        /** @type {?} */
        let optionsArray = options.toArray();
        /** @type {?} */

        let groups = optionGroups.toArray();
        /** @type {?} */

        let groupCounter = 0;

        for (let i = 0; i < optionIndex + 1; i++) {
          if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
            groupCounter++;
          }
        }

        return groupCounter;
      }

      return 0;
    }
    /**
     * Determines the position to which to scroll a panel in order for an option to be into view.
     * \@docs-private
     * @param {?} optionIndex Index of the option to be scrolled into the view.
     * @param {?} optionHeight Height of the options.
     * @param {?} currentScrollPosition Current scroll position of the panel.
     * @param {?} panelHeight Height of the panel.
     * @return {?}
     */


    function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
      /** @type {?} */
      const optionOffset = optionIndex * optionHeight;

      if (optionOffset < currentScrollPosition) {
        return optionOffset;
      }

      if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
      }

      return currentScrollPosition;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    class MatOptionModule {}

    MatOptionModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule],
        exports: [MatOption, MatOptgroup],
        declarations: [MatOption, MatOptgroup]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken that can be used to specify the global label options.
     * @type {?}
     */

    const MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * When constructing a Date, the month is zero-based. This can be confusing, since people are
     * used to seeing them one-based. So we create these aliases to make writing the tests easier.
     * \@docs-private
     * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
     * @type {?}
     */

    const JAN = 0;
    /** @type {?} */

    const FEB = 1;
    /** @type {?} */

    const MAR = 2;
    /** @type {?} */

    const APR = 3;
    /** @type {?} */

    const MAY = 4;
    /** @type {?} */

    const JUN = 5;
    /** @type {?} */

    const JUL = 6;
    /** @type {?} */

    const AUG = 7;
    /** @type {?} */

    const SEP = 8;
    /** @type {?} */

    const OCT = 9;
    /** @type {?} */

    const NOV = 10;
    /** @type {?} */

    const DEC = 11;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=core.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/form-field.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/form-field.js ***!
    \**************************************************************/

  /*! exports provided: MatFormFieldModule, MatError, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations */

  /***/
  function node_modulesAngularMaterialEsm2015FormFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
      return MatFormFieldModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatError", function () {
      return MatError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
      return MAT_FORM_FIELD_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
      return MatFormField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
      return MatFormFieldControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
      return getMatFormFieldPlaceholderConflictError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
      return getMatFormFieldDuplicatedHintError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
      return getMatFormFieldMissingControlError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHint", function () {
      return MatHint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
      return MatPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
      return MatPrefix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
      return MatSuffix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
      return MatLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
      return matFormFieldAnimations;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    let nextUniqueId = 0;
    /**
     * Single error message to be shown underneath the form field.
     */

    class MatError {
      constructor() {
        this.id = "mat-error-".concat(nextUniqueId++);
      }

    }

    MatError.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-error',
        host: {
          'class': 'mat-error',
          'role': 'alert',
          '[attr.id]': 'id'
        }
      }]
    }];
    MatError.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the MatFormField.
     * \@docs-private
     * @type {?}
     */

    const matFormFieldAnimations = {
      /**
       * Animation that transitions the form field's error and hint messages.
       */
      transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1,
        transform: 'translateY(0%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0,
        transform: 'translateY(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An interface which allows a control to work inside of a `MatFormField`.
     * @abstract
     * @template T
     */

    class MatFormFieldControl {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @return {?}
     */


    function getMatFormFieldPlaceholderConflictError() {
      return Error('Placeholder attribute and child element were both specified.');
    }
    /**
     * \@docs-private
     * @param {?} align
     * @return {?}
     */


    function getMatFormFieldDuplicatedHintError(align) {
      return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getMatFormFieldMissingControlError() {
      return Error('mat-form-field must contain a MatFormFieldControl.');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    let nextUniqueId$1 = 0;
    /**
     * Hint text to be shown underneath the form field control.
     */

    class MatHint {
      constructor() {
        /**
         * Whether to align the hint label at the start or end of the line.
         */
        this.align = 'start';
        /**
         * Unique ID for the hint. Used for the aria-describedby on the form field control.
         */

        this.id = "mat-hint-".concat(nextUniqueId$1++);
      }

    }

    MatHint.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-hint',
        host: {
          'class': 'mat-hint',
          '[class.mat-right]': 'align == "end"',
          '[attr.id]': 'id',
          // Remove align attribute to prevent it from interfering with layout.
          '[attr.align]': 'null'
        }
      }]
    }];
    MatHint.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The floating label for a `mat-form-field`.
     */

    class MatLabel {}

    MatLabel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-label'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The placeholder text for an `MatFormField`.
     * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
     *     placeholder.
     * \@breaking-change 8.0.0
     */

    class MatPlaceholder {}

    MatPlaceholder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'mat-placeholder'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Prefix to be placed in front of the form field.
     */

    class MatPrefix {}

    MatPrefix.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[matPrefix]'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Suffix to be placed at the end of the form field.
     */

    class MatSuffix {}

    MatSuffix.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[matSuffix]'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    let nextUniqueId$2 = 0;
    /** @type {?} */

    const floatingLabelScale = 0.75;
    /** @type {?} */

    const outlineGapPadding = 5;
    /**
     * Boilerplate for applying mixins to MatFormField.
     * \@docs-private
     */

    class MatFormFieldBase {
      /**
       * @param {?} _elementRef
       */
      constructor(_elementRef) {
        this._elementRef = _elementRef;
      }

    }
    /**
     * Base class to which we're applying the form field mixins.
     * \@docs-private
     * @type {?}
     */


    const _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatFormFieldBase, 'primary');
    /**
     * Injection token that can be used to configure the
     * default options for all form field within an app.
     * @type {?}
     */


    const MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
    /**
     * Container for form controls that applies Material Design styling and behavior.
     */

    class MatFormField extends _MatFormFieldMixinBase {
      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} labelOptions
       * @param {?} _dir
       * @param {?} _defaults
       * @param {?} _platform
       * @param {?} _ngZone
       * @param {?} _animationMode
       */
      constructor(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._defaults = _defaults;
        this._platform = _platform;
        this._ngZone = _ngZone;
        /**
         * Whether the outline gap needs to be calculated
         * immediately on the next change detection run.
         */

        this._outlineGapCalculationNeededImmediately = false;
        /**
         * Whether the outline gap needs to be calculated next time the zone has stabilized.
         */

        this._outlineGapCalculationNeededOnStable = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Override for the logic that disables the label animation in certain cases.
         */

        this._showAlwaysAnimate = false;
        /**
         * State of the mat-hint and mat-error animations.
         */

        this._subscriptAnimationState = '';
        this._hintLabel = ''; // Unique id for the hint label.

        this._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the internal form field label.

        this._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
        /* Holds the previous direction emitted by directionality service change emitter.
             This is used in updateOutlineGap() method to update the width and position of the gap in the
             outline. Only relevant for the outline appearance. The direction is getting updated in the
             UI after directionality service change emission. So the outlines gaps are getting
             updated in updateOutlineGap() method before connectionContainer child direction change
             in UI. We may get wrong calculations. So we are storing the previous direction to get the
             correct outline calculations*/

        this._previousDirection = 'ltr';
        this._labelOptions = labelOptions ? labelOptions : {};
        this.floatLabel = this._labelOptions.float || 'auto';
        this._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

        this.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
        this._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
      }
      /**
       * The form-field appearance style.
       * @return {?}
       */


      get appearance() {
        return this._appearance;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set appearance(value) {
        /** @type {?} */
        const oldValue = this._appearance;
        this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

        if (this._appearance === 'outline' && oldValue !== value) {
          this._outlineGapCalculationNeededOnStable = true;
        }
      }
      /**
       * Whether the required marker should be hidden.
       * @return {?}
       */


      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set hideRequiredMarker(value) {
        this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
      }
      /**
       * Whether the floating label should always float or not.
       * @return {?}
       */


      get _shouldAlwaysFloat() {
        return this.floatLabel === 'always' && !this._showAlwaysAnimate;
      }
      /**
       * Whether the label can float or not.
       * @return {?}
       */


      get _canLabelFloat() {
        return this.floatLabel !== 'never';
      }
      /**
       * Text for the form field hint.
       * @return {?}
       */


      get hintLabel() {
        return this._hintLabel;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set hintLabel(value) {
        this._hintLabel = value;

        this._processHints();
      }
      /**
       * Whether the label should always float, never float or float as the user types.
       *
       * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
       * way to make the floating label emulate the behavior of a standard input placeholder. However
       * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
       * appearances the `never` option has been disabled in favor of just using the placeholder.
       * @return {?}
       */


      get floatLabel() {
        return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set floatLabel(value) {
        if (value !== this._floatLabel) {
          this._floatLabel = value || this._labelOptions.float || 'auto';

          this._changeDetectorRef.markForCheck();
        }
      }
      /**
       * @return {?}
       */


      get _control() {
        // TODO(crisbeto): we need this hacky workaround in order to support both Ivy
        // and ViewEngine. We should clean this up once Ivy is the default renderer.
        return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set _control(value) {
        this._explicitFormFieldControl = value;
      }
      /**
       * @return {?}
       */


      get _labelChild() {
        return this._labelChildNonStatic || this._labelChildStatic;
      }
      /**
       * Gets an ElementRef for the element that a overlay attached to the form-field should be
       * positioned relative to.
       * @return {?}
       */


      getConnectedOverlayOrigin() {
        return this._connectionContainerRef || this._elementRef;
      }
      /**
       * @return {?}
       */


      ngAfterContentInit() {
        this._validateControlChild();
        /** @type {?} */


        const control = this._control;

        if (control.controlType) {
          this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
        } // Subscribe to changes in the child control state in order to update the form field UI.


        control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(
        /** @type {?} */
        null)).subscribe(
        /**
        * @return {?}
        */
        () => {
          this._validatePlaceholders();

          this._syncDescribedByIds();

          this._changeDetectorRef.markForCheck();
        }); // Run change detection if the value changes.

        if (control.ngControl && control.ngControl.valueChanges) {
          control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          () => this._changeDetectorRef.markForCheck());
        } // Note that we have to run outside of the `NgZone` explicitly,
        // in order to avoid throwing users into an infinite loop
        // if `zone-patch-rxjs` is included.


        this._ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        () => {
          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          () => {
            if (this._outlineGapCalculationNeededOnStable) {
              this.updateOutlineGap();
            }
          });
        }); // Run change detection and update the outline if the suffix or prefix changes.


        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(
        /**
        * @return {?}
        */
        () => {
          this._outlineGapCalculationNeededOnStable = true;

          this._changeDetectorRef.markForCheck();
        }); // Re-validate when the number of hints changes.

        this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(
        /**
        * @return {?}
        */
        () => {
          this._processHints();

          this._changeDetectorRef.markForCheck();
        }); // Update the aria-described by when the number of errors changes.


        this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)).subscribe(
        /**
        * @return {?}
        */
        () => {
          this._syncDescribedByIds();

          this._changeDetectorRef.markForCheck();
        });

        if (this._dir) {
          this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          () => {
            this.updateOutlineGap();
            this._previousDirection = this._dir.value;
          });
        }
      }
      /**
       * @return {?}
       */


      ngAfterContentChecked() {
        this._validateControlChild();

        if (this._outlineGapCalculationNeededImmediately) {
          this.updateOutlineGap();
        }
      }
      /**
       * @return {?}
       */


      ngAfterViewInit() {
        // Avoid animations on load.
        this._subscriptAnimationState = 'enter';

        this._changeDetectorRef.detectChanges();
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._destroyed.next();

        this._destroyed.complete();
      }
      /**
       * Determines whether a class from the NgControl should be forwarded to the host element.
       * @param {?} prop
       * @return {?}
       */


      _shouldForward(prop) {
        /** @type {?} */
        const ngControl = this._control ? this._control.ngControl : null;
        return ngControl && ngControl[prop];
      }
      /**
       * @return {?}
       */


      _hasPlaceholder() {
        return !!(this._control && this._control.placeholder || this._placeholderChild);
      }
      /**
       * @return {?}
       */


      _hasLabel() {
        return !!this._labelChild;
      }
      /**
       * @return {?}
       */


      _shouldLabelFloat() {
        return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
      }
      /**
       * @return {?}
       */


      _hideControlPlaceholder() {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
      }
      /**
       * @return {?}
       */


      _hasFloatingLabel() {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
      }
      /**
       * Determines whether to display hints or errors.
       * @return {?}
       */


      _getDisplayedMessages() {
        return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
      }
      /**
       * Animates the placeholder up and locks it in position.
       * @return {?}
       */


      _animateAndLockLabel() {
        if (this._hasFloatingLabel() && this._canLabelFloat) {
          // If animations are disabled, we shouldn't go in here,
          // because the `transitionend` will never fire.
          if (this._animationsEnabled) {
            this._showAlwaysAnimate = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            () => {
              this._showAlwaysAnimate = false;
            });
          }

          this.floatLabel = 'always';

          this._changeDetectorRef.markForCheck();
        }
      }
      /**
       * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
       * or child element with the `mat-placeholder` directive).
       * @private
       * @return {?}
       */


      _validatePlaceholders() {
        if (this._control.placeholder && this._placeholderChild) {
          throw getMatFormFieldPlaceholderConflictError();
        }
      }
      /**
       * Does any extra processing that is required when handling the hints.
       * @private
       * @return {?}
       */


      _processHints() {
        this._validateHints();

        this._syncDescribedByIds();
      }
      /**
       * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
       * attribute being considered as `align="start"`.
       * @private
       * @return {?}
       */


      _validateHints() {
        if (this._hintChildren) {
          /** @type {?} */
          let startHint;
          /** @type {?} */

          let endHint;

          this._hintChildren.forEach(
          /**
          * @param {?} hint
          * @return {?}
          */
          hint => {
            if (hint.align === 'start') {
              if (startHint || this.hintLabel) {
                throw getMatFormFieldDuplicatedHintError('start');
              }

              startHint = hint;
            } else if (hint.align === 'end') {
              if (endHint) {
                throw getMatFormFieldDuplicatedHintError('end');
              }

              endHint = hint;
            }
          });
        }
      }
      /**
       * Sets the list of element IDs that describe the child control. This allows the control to update
       * its `aria-describedby` attribute accordingly.
       * @private
       * @return {?}
       */


      _syncDescribedByIds() {
        if (this._control) {
          /** @type {?} */
          let ids = [];

          if (this._getDisplayedMessages() === 'hint') {
            /** @type {?} */
            const startHint = this._hintChildren ? this._hintChildren.find(
            /**
            * @param {?} hint
            * @return {?}
            */
            hint => hint.align === 'start') : null;
            /** @type {?} */

            const endHint = this._hintChildren ? this._hintChildren.find(
            /**
            * @param {?} hint
            * @return {?}
            */
            hint => hint.align === 'end') : null;

            if (startHint) {
              ids.push(startHint.id);
            } else if (this._hintLabel) {
              ids.push(this._hintLabelId);
            }

            if (endHint) {
              ids.push(endHint.id);
            }
          } else if (this._errorChildren) {
            ids = this._errorChildren.map(
            /**
            * @param {?} error
            * @return {?}
            */
            error => error.id);
          }

          this._control.setDescribedByIds(ids);
        }
      }
      /**
       * Throws an error if the form field's control is missing.
       * @protected
       * @return {?}
       */


      _validateControlChild() {
        if (!this._control) {
          throw getMatFormFieldMissingControlError();
        }
      }
      /**
       * Updates the width and position of the gap in the outline. Only relevant for the outline
       * appearance.
       * @return {?}
       */


      updateOutlineGap() {
        /** @type {?} */
        const labelEl = this._label ? this._label.nativeElement : null;

        if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
          return;
        }

        if (!this._platform.isBrowser) {
          // getBoundingClientRect isn't available on the server.
          return;
        } // If the element is not present in the DOM, the outline gap will need to be calculated
        // the next time it is checked and in the DOM.


        if (!
        /** @type {?} */
        document.documentElement.contains(this._elementRef.nativeElement)) {
          this._outlineGapCalculationNeededImmediately = true;
          return;
        }
        /** @type {?} */


        let startWidth = 0;
        /** @type {?} */

        let gapWidth = 0;
        /** @type {?} */

        const container = this._connectionContainerRef.nativeElement;
        /** @type {?} */

        const startEls = container.querySelectorAll('.mat-form-field-outline-start');
        /** @type {?} */

        const gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

        if (this._label && this._label.nativeElement.children.length) {
          /** @type {?} */
          const containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
          // invisible and we can't calculate the outline gap. Mark the element as needing
          // to be checked the next time the zone stabilizes. We can't do this immediately
          // on the next change detection, because even if the element becomes visible,
          // the `ClientRect` won't be reclaculated immediately. We reset the
          // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

          if (containerRect.width === 0 && containerRect.height === 0) {
            this._outlineGapCalculationNeededOnStable = true;
            this._outlineGapCalculationNeededImmediately = false;
            return;
          }
          /** @type {?} */


          const containerStart = this._getStartEnd(containerRect);
          /** @type {?} */


          const labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
          /** @type {?} */


          let labelWidth = 0;

          for (const child of labelEl.children) {
            labelWidth += child.offsetWidth;
          }

          startWidth = labelStart - containerStart - outlineGapPadding;
          gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
        }

        for (let i = 0; i < startEls.length; i++) {
          startEls.item(i).style.width = "".concat(startWidth, "px");
        }

        for (let i = 0; i < gapEls.length; i++) {
          gapEls.item(i).style.width = "".concat(gapWidth, "px");
        }

        this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
      }
      /**
       * Gets the start end of the rect considering the current directionality.
       * @private
       * @param {?} rect
       * @return {?}
       */


      _getStartEnd(rect) {
        return this._previousDirection === 'rtl' ? rect.right : rect.left;
      }

    }

    MatFormField.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-form-field',
        exportAs: 'matFormField',
        template: "<div class=\"mat-form-field-wrapper\"><div class=\"mat-form-field-flex\" #connectionContainer (click)=\"_control.onContainerClick && _control.onContainerClick($event)\"><ng-container *ngIf=\"appearance == 'outline'\"><div class=\"mat-form-field-outline\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div><div class=\"mat-form-field-outline mat-form-field-outline-thick\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div></ng-container><div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\"><ng-content select=\"[matPrefix]\"></ng-content></div><div class=\"mat-form-field-infix\" #inputContainer><ng-content></ng-content><span class=\"mat-form-field-label-wrapper\"><label class=\"mat-form-field-label\" (cdkObserveContent)=\"updateOutlineGap()\" [cdkObserveContentDisabled]=\"appearance != 'outline'\" [id]=\"_labelId\" [attr.for]=\"_control.id\" [attr.aria-owns]=\"_control.id\" [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\" #label *ngIf=\"_hasFloatingLabel()\" [ngSwitch]=\"_hasLabel()\"><ng-container *ngSwitchCase=\"false\"><ng-content select=\"mat-placeholder\"></ng-content><span>{{_control.placeholder}}</span></ng-container><ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content><span class=\"mat-placeholder-required mat-form-field-required-marker\" aria-hidden=\"true\" *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span></label></span></div><div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\"><ng-content select=\"[matSuffix]\"></ng-content></div></div><div class=\"mat-form-field-underline\" #underline *ngIf=\"appearance != 'outline'\"><span class=\"mat-form-field-ripple\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\"></span></div><div class=\"mat-form-field-subscript-wrapper\" [ngSwitch]=\"_getDisplayedMessages()\"><div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\"><ng-content select=\"mat-error\"></ng-content></div><div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\" [@transitionMessages]=\"_subscriptAnimationState\"><div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"mat-hint:not([align='end'])\"></ng-content><div class=\"mat-form-field-hint-spacer\"></div><ng-content select=\"mat-hint[align='end']\"></ng-content></div></div></div>",
        // MatInput is a directive and can't have styles, so we need to include its styles here
        // in form-field-input.css. The MatInput styles are fairly minimal so it shouldn't be a
        // big deal for people who aren't using MatInput.
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none} .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px} .mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px} .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none} .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
        animations: [matFormFieldAnimations.transitionMessages],
        host: {
          'class': 'mat-form-field',
          '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
          '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
          '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
          '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
          '[class.mat-form-field-invalid]': '_control.errorState',
          '[class.mat-form-field-can-float]': '_canLabelFloat',
          '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
          '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
          '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
          '[class.mat-form-field-disabled]': '_control.disabled',
          '[class.mat-form-field-autofilled]': '_control.autofilled',
          '[class.mat-focused]': '_control.focused',
          '[class.mat-accent]': 'color == "accent"',
          '[class.mat-warn]': 'color == "warn"',
          '[class.ng-untouched]': '_shouldForward("untouched")',
          '[class.ng-touched]': '_shouldForward("touched")',
          '[class.ng-pristine]': '_shouldForward("pristine")',
          '[class.ng-dirty]': '_shouldForward("dirty")',
          '[class.ng-valid]': '_shouldForward("valid")',
          '[class.ng-invalid]': '_shouldForward("invalid")',
          '[class.ng-pending]': '_shouldForward("pending")',
          '[class._mat-animation-noopable]': '!_animationsEnabled'
        },
        inputs: ['color'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatFormField.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_LABEL_GLOBAL_OPTIONS"]]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
      }]
    }];

    MatFormField.propDecorators = {
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hideRequiredMarker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hintLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      floatLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      underlineRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['underline', {
          static: false
        }]
      }],
      _connectionContainerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['connectionContainer', {
          static: true
        }]
      }],
      _inputContainerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['inputContainer', {
          static: false
        }]
      }],
      _label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['label', {
          static: false
        }]
      }],
      _controlNonStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatFormFieldControl, {
          static: false
        }]
      }],
      _controlStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatFormFieldControl, {
          static: true
        }]
      }],
      _labelChildNonStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatLabel, {
          static: false
        }]
      }],
      _labelChildStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatLabel, {
          static: true
        }]
      }],
      _placeholderChild: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [MatPlaceholder, {
          static: false
        }]
      }],
      _errorChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatError]
      }],
      _hintChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatHint]
      }],
      _prefixChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatPrefix]
      }],
      _suffixChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatSuffix]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class MatFormFieldModule {}

    MatFormFieldModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"]],
        exports: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=form-field.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/esm2015/select.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/select.js ***!
    \**********************************************************/

  /*! exports provided: MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent */

  /***/
  function node_modulesAngularMaterialEsm2015SelectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectModule", function () {
      return MatSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function () {
      return SELECT_PANEL_MAX_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function () {
      return SELECT_PANEL_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function () {
      return SELECT_PANEL_INDENT_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function () {
      return SELECT_ITEM_HEIGHT_EM;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function () {
      return SELECT_MULTIPLE_PANEL_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function () {
      return SELECT_PANEL_VIEWPORT_PADDING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function () {
      return MAT_SELECT_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function () {
      return MAT_SELECT_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectChange", function () {
      return MatSelectChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function () {
      return MatSelectTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelect", function () {
      return MatSelect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function () {
      return matSelectAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transformPanel", function () {
      return transformPanel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInContent", function () {
      return fadeInContent;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The following are all the animations for the mat-select component, with each
     * const containing the metadata for one animation.
     *
     * The values below match the implementation of the AngularJS Material mat-select animation.
     * \@docs-private
     * @type {?}
     */


    const matSelectAnimations = {
      /**
       * This animation ensures the select's overlay panel animation (transformPanel) is called when
       * closing the select.
       * This is needed due to https://github.com/angular/angular/issues/23302
       */
      transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanelWrap', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()], {
        optional: true
      }))]),

      /**
       * This animation transforms the select's overlay panel on and off the page.
       *
       * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
       * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
       * side to ensure the option text correctly overlaps the trigger text.
       *
       * When the panel is removed from the DOM, it simply fades out linearly.
       */
      transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scaleY(0.8)',
        minWidth: '100%',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        minWidth: 'calc(100% + 32px)',
        // 32px = 2 * 16px padding
        transform: 'scaleY(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        minWidth: 'calc(100% + 64px)',
        // 64px = 48px padding on the left + 16px padding on the right
        transform: 'scaleY(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })))]),

      /**
       * This animation fades in the background color and text content of the
       * select's options. It is time delayed to occur 100ms after the overlay
       * panel has transformed in.
       * @deprecated Not used anymore. To be removed.
       * \@breaking-change 8.0.0
       */
      fadeInContent: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInContent', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => showing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    const transformPanel = matSelectAnimations.transformPanel;
    /**
     * @deprecated
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */

    const fadeInContent = matSelectAnimations.fadeInContent;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns an exception to be thrown when attempting to change a select's `multiple` option
     * after initialization.
     * \@docs-private
     * @return {?}
     */

    function getMatSelectDynamicMultipleError() {
      return Error('Cannot change `multiple` mode of select after initialization.');
    }
    /**
     * Returns an exception to be thrown when attempting to assign a non-array value to a select
     * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
     * resetting the value.
     * \@docs-private
     * @return {?}
     */


    function getMatSelectNonArrayValueError() {
      return Error('Value must be an array in multiple-selection mode.');
    }
    /**
     * Returns an exception to be thrown when assigning a non-function value to the comparator
     * used to determine if a value corresponds to an option. Note that whether the function
     * actually takes two values and returns a boolean is not checked.
     * @return {?}
     */


    function getMatSelectNonFunctionValueError() {
      return Error('`compareWith` must be a function.');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    let nextUniqueId = 0;
    /**
     * The max height of the select's overlay panel
     * @type {?}
     */

    const SELECT_PANEL_MAX_HEIGHT = 256;
    /**
     * The panel's padding on the x-axis
     * @type {?}
     */

    const SELECT_PANEL_PADDING_X = 16;
    /**
     * The panel's x axis padding if it is indented (e.g. there is an option group).
     * @type {?}
     */

    const SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
    /**
     * The height of the select items in `em` units.
     * @type {?}
     */

    const SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

    /**
     * Distance between the panel edge and the option text in
     * multi-selection mode.
     *
     * Calculated as:
     * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
     * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
     * The checkbox width is 16px.
     * @type {?}
     */

    const SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
    /**
     * The select panel will only "fit" inside the viewport if it is positioned at
     * this value or more away from the viewport boundary.
     * @type {?}
     */

    const SELECT_PANEL_VIEWPORT_PADDING = 8;
    /**
     * Injection token that determines the scroll handling while a select is open.
     * @type {?}
     */

    const MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('mat-select-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        () => overlay.scrollStrategies.reposition()
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    const MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
      useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * Change event object that is emitted when the select value has changed.
     */

    class MatSelectChange {
      /**
       * @param {?} source
       * @param {?} value
       */
      constructor(source, value) {
        this.source = source;
        this.value = value;
      }

    } // Boilerplate for applying mixins to MatSelect.

    /**
     * \@docs-private
     */


    class MatSelectBase {
      /**
       * @param {?} _elementRef
       * @param {?} _defaultErrorStateMatcher
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} ngControl
       */
      constructor(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      }

    }
    /** @type {?} */


    const _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinErrorState"])(MatSelectBase))));
    /**
     * Allows the user to customize the trigger that is displayed when the select has a value.
     */


    class MatSelectTrigger {}

    MatSelectTrigger.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
      args: [{
        selector: 'mat-select-trigger'
      }]
    }];

    class MatSelect extends _MatSelectMixinBase {
      /**
       * @param {?} _viewportRuler
       * @param {?} _changeDetectorRef
       * @param {?} _ngZone
       * @param {?} _defaultErrorStateMatcher
       * @param {?} elementRef
       * @param {?} _dir
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _parentFormField
       * @param {?} ngControl
       * @param {?} tabIndex
       * @param {?} scrollStrategyFactory
       * @param {?=} _liveAnnouncer
       */
      constructor(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer) {
        super(elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._viewportRuler = _viewportRuler;
        this._changeDetectorRef = _changeDetectorRef;
        this._ngZone = _ngZone;
        this._dir = _dir;
        this._parentFormField = _parentFormField;
        this.ngControl = ngControl;
        this._liveAnnouncer = _liveAnnouncer;
        /**
         * Whether or not the overlay panel is open.
         */

        this._panelOpen = false;
        /**
         * Whether filling out the select is required in the form.
         */

        this._required = false;
        /**
         * The scroll position of the overlay panel, calculated to center the selected option.
         */

        this._scrollTop = 0;
        /**
         * Whether the component is in multiple selection mode.
         */

        this._multiple = false;
        /**
         * Comparison function to specify which option is displayed. Defaults to object equality.
         */

        this._compareWith =
        /**
        * @param {?} o1
        * @param {?} o2
        * @return {?}
        */
        (o1, o2) => o1 === o2;
        /**
         * Unique id for this input.
         */


        this._uid = "mat-select-".concat(nextUniqueId++);
        /**
         * Emits whenever the component is destroyed.
         */

        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The cached font-size of the trigger element.
         */

        this._triggerFontSize = 0;
        /**
         * `View -> model callback called when value changes`
         */

        this._onChange =
        /**
        * @return {?}
        */
        () => {};
        /**
         * `View -> model callback called when select has been touched`
         */


        this._onTouched =
        /**
        * @return {?}
        */
        () => {};
        /**
         * The IDs of child options to be passed to the aria-owns attribute.
         */


        this._optionIds = '';
        /**
         * The value of the select panel's transform-origin property.
         */

        this._transformOrigin = 'top';
        /**
         * Emits when the panel element is finished transforming in.
         */

        this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */

        this._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */

        this._positions = [{
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top'
        }, {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'bottom'
        }];
        /**
         * Whether the component is disabling centering of the active option over the trigger.
         */

        this._disableOptionCentering = false;
        this._focused = false;
        /**
         * A name for this control that can be used by `mat-form-field`.
         */

        this.controlType = 'mat-select';
        /**
         * Aria label of the select. If not specified, the placeholder will be used as label.
         */

        this.ariaLabel = '';
        /**
         * Combined stream of all of the child options' change events.
         */

        this.optionSelectionChanges =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(
        /**
        * @return {?}
        */
        () => {
          /** @type {?} */
          const options = this.options;

          if (options) {
            return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(
            /**
            * @return {?}
            */
            () => Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...options.map(
            /**
            * @param {?} option
            * @return {?}
            */
            option => option.onSelectionChange))));
          }

          return this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(
          /**
          * @return {?}
          */
          () => this.optionSelectionChanges));
        });
        /**
         * Event emitted when the select panel has been toggled.
         */

        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        /**
         * Event emitted when the select has been opened.
         */

        this._openedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(
        /**
        * @param {?} o
        * @return {?}
        */
        o => o), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(
        /**
        * @return {?}
        */
        () => {}));
        /**
         * Event emitted when the select has been closed.
         */

        this._closedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(
        /**
        * @param {?} o
        * @return {?}
        */
        o => !o), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(
        /**
        * @return {?}
        */
        () => {}));
        /**
         * Event emitted when the selected value has been changed by the user.
         */

        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();

        if (this.ngControl) {
          // Note: we provide the value accessor through here, instead of
          // the `providers` to avoid running into a circular import.
          this.ngControl.valueAccessor = this;
        }

        this._scrollStrategyFactory = scrollStrategyFactory;
        this._scrollStrategy = this._scrollStrategyFactory();
        this.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

        this.id = this.id;
      }
      /**
       * Whether the select is focused.
       * @return {?}
       */


      get focused() {
        return this._focused || this._panelOpen;
      }
      /**
       * @deprecated Setter to be removed as this property is intended to be readonly.
       * \@breaking-change 8.0.0
       * @param {?} value
       * @return {?}
       */


      set focused(value) {
        this._focused = value;
      }
      /**
       * Placeholder to be shown if no value has been selected.
       * @return {?}
       */


      get placeholder() {
        return this._placeholder;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
      }
      /**
       * Whether the component is required.
       * @return {?}
       */


      get required() {
        return this._required;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        this.stateChanges.next();
      }
      /**
       * Whether the user should be allowed to select multiple options.
       * @return {?}
       */


      get multiple() {
        return this._multiple;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set multiple(value) {
        if (this._selectionModel) {
          throw getMatSelectDynamicMultipleError();
        }

        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
      }
      /**
       * Whether to center the active option over the trigger.
       * @return {?}
       */


      get disableOptionCentering() {
        return this._disableOptionCentering;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set disableOptionCentering(value) {
        this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
      }
      /**
       * Function to compare the option values with the selected values. The first argument
       * is a value from an option. The second is a value from the selection. A boolean
       * should be returned.
       * @return {?}
       */


      get compareWith() {
        return this._compareWith;
      }
      /**
       * @param {?} fn
       * @return {?}
       */


      set compareWith(fn) {
        if (typeof fn !== 'function') {
          throw getMatSelectNonFunctionValueError();
        }

        this._compareWith = fn;

        if (this._selectionModel) {
          // A different comparator means the selection could change.
          this._initializeSelection();
        }
      }
      /**
       * Value of the select control.
       * @return {?}
       */


      get value() {
        return this._value;
      }
      /**
       * @param {?} newValue
       * @return {?}
       */


      set value(newValue) {
        if (newValue !== this._value) {
          this.writeValue(newValue);
          this._value = newValue;
        }
      }
      /**
       * Unique id of the element.
       * @return {?}
       */


      get id() {
        return this._id;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set id(value) {
        this._id = value || this._uid;
        this.stateChanges.next();
      }
      /**
       * @return {?}
       */


      ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](this.multiple);
        this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
        // fire the animation end event twice for the same animation. See:
        // https://github.com/angular/angular/issues/24084

        this._panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
        /**
        * @return {?}
        */
        () => {
          if (this.panelOpen) {
            this._scrollTop = 0;
            this.openedChange.emit(true);
          } else {
            this.openedChange.emit(false);
            this.overlayDir.offsetX = 0;

            this._changeDetectorRef.markForCheck();
          }
        });

        this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
        /**
        * @return {?}
        */
        () => {
          if (this._panelOpen) {
            this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();

            this._changeDetectorRef.markForCheck();
          }
        });
      }
      /**
       * @return {?}
       */


      ngAfterContentInit() {
        this._initKeyManager();

        this._selectionModel.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        event => {
          event.added.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          option => option.select());
          event.removed.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          option => option.deselect());
        });

        this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
        /**
        * @return {?}
        */
        () => {
          this._resetOptions();

          this._initializeSelection();
        });
      }
      /**
       * @return {?}
       */


      ngDoCheck() {
        if (this.ngControl) {
          this.updateErrorState();
        }
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      ngOnChanges(changes) {
        // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
        // the parent form field know to run change detection when the disabled state changes.
        if (changes['disabled']) {
          this.stateChanges.next();
        }

        if (changes['typeaheadDebounceInterval'] && this._keyManager) {
          this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
        }
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        this._destroy.next();

        this._destroy.complete();

        this.stateChanges.complete();
      }
      /**
       * Toggles the overlay panel open or closed.
       * @return {?}
       */


      toggle() {
        this.panelOpen ? this.close() : this.open();
      }
      /**
       * Opens the overlay panel.
       * @return {?}
       */


      open() {
        if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
          return;
        }

        this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
        // `parseInt` ignores the trailing 'px' and converts this to a number.

        this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
        this._panelOpen = true;

        this._keyManager.withHorizontalOrientation(null);

        this._calculateOverlayPosition();

        this._highlightCorrectOption();

        this._changeDetectorRef.markForCheck(); // Set the font size on the panel element once it exists.


        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        () => {
          if (this._triggerFontSize && this.overlayDir.overlayRef && this.overlayDir.overlayRef.overlayElement) {
            this.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(this._triggerFontSize, "px");
          }
        });
      }
      /**
       * Closes the overlay panel and focuses the host element.
       * @return {?}
       */


      close() {
        if (this._panelOpen) {
          this._panelOpen = false;

          this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

          this._changeDetectorRef.markForCheck();

          this._onTouched();
        }
      }
      /**
       * Sets the select's value. Part of the ControlValueAccessor interface
       * required to integrate with Angular's core forms API.
       *
       * @param {?} value New value to be written to the model.
       * @return {?}
       */


      writeValue(value) {
        if (this.options) {
          this._setSelectionByValue(value);
        }
      }
      /**
       * Saves a callback function to be invoked when the select's value
       * changes from user input. Part of the ControlValueAccessor interface
       * required to integrate with Angular's core forms API.
       *
       * @param {?} fn Callback to be triggered when the value changes.
       * @return {?}
       */


      registerOnChange(fn) {
        this._onChange = fn;
      }
      /**
       * Saves a callback function to be invoked when the select is blurred
       * by the user. Part of the ControlValueAccessor interface required
       * to integrate with Angular's core forms API.
       *
       * @param {?} fn Callback to be triggered when the component has been touched.
       * @return {?}
       */


      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /**
       * Disables the select. Part of the ControlValueAccessor interface required
       * to integrate with Angular's core forms API.
       *
       * @param {?} isDisabled Sets whether the component is disabled.
       * @return {?}
       */


      setDisabledState(isDisabled) {
        this.disabled = isDisabled;

        this._changeDetectorRef.markForCheck();

        this.stateChanges.next();
      }
      /**
       * Whether or not the overlay panel is open.
       * @return {?}
       */


      get panelOpen() {
        return this._panelOpen;
      }
      /**
       * The currently selected option.
       * @return {?}
       */


      get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
      }
      /**
       * The value displayed in the trigger.
       * @return {?}
       */


      get triggerValue() {
        if (this.empty) {
          return '';
        }

        if (this._multiple) {
          /** @type {?} */
          const selectedOptions = this._selectionModel.selected.map(
          /**
          * @param {?} option
          * @return {?}
          */
          option => option.viewValue);

          if (this._isRtl()) {
            selectedOptions.reverse();
          } // TODO(crisbeto): delimiter should be configurable for proper localization.


          return selectedOptions.join(', ');
        }

        return this._selectionModel.selected[0].viewValue;
      }
      /**
       * Whether the element is in RTL mode.
       * @return {?}
       */


      _isRtl() {
        return this._dir ? this._dir.value === 'rtl' : false;
      }
      /**
       * Handles all keydown events on the select.
       * @param {?} event
       * @return {?}
       */


      _handleKeydown(event) {
        if (!this.disabled) {
          this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
      }
      /**
       * Handles keyboard events while the select is closed.
       * @private
       * @param {?} event
       * @return {?}
       */


      _handleClosedKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */

        const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"];
        /** @type {?} */

        const isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"];
        /** @type {?} */

        const manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

        if (isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event) || (this.multiple || event.altKey) && isArrowKey) {
          event.preventDefault(); // prevents the page from scrolling down when pressing space

          this.open();
        } else if (!this.multiple) {
          /** @type {?} */
          const previouslySelectedOption = this.selected;

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]) {
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
            event.preventDefault();
          } else {
            manager.onKeydown(event);
          }
          /** @type {?} */


          const selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.
          // @breaking-change 8.0.0 remove null check for _liveAnnouncer.

          if (this._liveAnnouncer && selectedOption && previouslySelectedOption !== selectedOption) {
            // We set a duration on the live announcement, because we want the live element to be
            // cleared after a while so that users can't navigate to it using the arrow keys.
            this._liveAnnouncer.announce(
            /** @type {?} */
            selectedOption.viewValue, 10000);
          }
        }
      }
      /**
       * Handles keyboard events when the selected is open.
       * @private
       * @param {?} event
       * @return {?}
       */


      _handleOpenKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */

        const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["UP_ARROW"];
        /** @type {?} */

        const manager = this._keyManager;

        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["END"]) {
          event.preventDefault();
          keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
        } else if (isArrowKey && event.altKey) {
          // Close the select on ALT + arrow key to match the native <select>
          event.preventDefault();
          this.close();
        } else if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["SPACE"]) && manager.activeItem && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["hasModifierKey"])(event)) {
          event.preventDefault();

          manager.activeItem._selectViaInteraction();
        } else if (this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["A"] && event.ctrlKey) {
          event.preventDefault();
          /** @type {?} */

          const hasDeselectedOptions = this.options.some(
          /**
          * @param {?} opt
          * @return {?}
          */
          opt => !opt.disabled && !opt.selected);
          this.options.forEach(
          /**
          * @param {?} option
          * @return {?}
          */
          option => {
            if (!option.disabled) {
              hasDeselectedOptions ? option.select() : option.deselect();
            }
          });
        } else {
          /** @type {?} */
          const previouslyFocusedIndex = manager.activeItemIndex;
          manager.onKeydown(event);

          if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
            manager.activeItem._selectViaInteraction();
          }
        }
      }
      /**
       * @return {?}
       */


      _onFocus() {
        if (!this.disabled) {
          this._focused = true;
          this.stateChanges.next();
        }
      }
      /**
       * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
       * "blur" to the panel when it opens, causing a false positive.
       * @return {?}
       */


      _onBlur() {
        this._focused = false;

        if (!this.disabled && !this.panelOpen) {
          this._onTouched();

          this._changeDetectorRef.markForCheck();

          this.stateChanges.next();
        }
      }
      /**
       * Callback that is invoked when the overlay panel has been attached.
       * @return {?}
       */


      _onAttached() {
        this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(
        /**
        * @return {?}
        */
        () => {
          this._changeDetectorRef.detectChanges();

          this._calculateOverlayOffsetX();

          this.panel.nativeElement.scrollTop = this._scrollTop;
        });
      }
      /**
       * Returns the theme to be used on the panel.
       * @return {?}
       */


      _getPanelTheme() {
        return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
      }
      /**
       * Whether the select has a value.
       * @return {?}
       */


      get empty() {
        return !this._selectionModel || this._selectionModel.isEmpty();
      }
      /**
       * @private
       * @return {?}
       */


      _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(
        /**
        * @return {?}
        */
        () => {
          this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value);

          this.stateChanges.next();
        });
      }
      /**
       * Sets the selected option based on a value. If no option can be
       * found with the designated value, the select trigger is cleared.
       * @private
       * @param {?} value
       * @return {?}
       */


      _setSelectionByValue(value) {
        if (this.multiple && value) {
          if (!Array.isArray(value)) {
            throw getMatSelectNonArrayValueError();
          }

          this._selectionModel.clear();

          value.forEach(
          /**
          * @param {?} currentValue
          * @return {?}
          */
          currentValue => this._selectValue(currentValue));

          this._sortValues();
        } else {
          this._selectionModel.clear();
          /** @type {?} */


          const correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
          // mode, because we don't know what option the user interacted with last.


          if (correspondingOption) {
            this._keyManager.setActiveItem(correspondingOption);
          } else if (!this.panelOpen) {
            // Otherwise reset the highlighted option. Note that we only want to do this while
            // closed, because doing it while open can shift the user's focus unnecessarily.
            this._keyManager.setActiveItem(-1);
          }
        }

        this._changeDetectorRef.markForCheck();
      }
      /**
       * Finds and selects and option based on its value.
       * @private
       * @param {?} value
       * @return {?} Option that has the corresponding value.
       */


      _selectValue(value) {
        /** @type {?} */
        const correspondingOption = this.options.find(
        /**
        * @param {?} option
        * @return {?}
        */
        option => {
          try {
            // Treat null as a special reset value.
            return option.value != null && this._compareWith(option.value, value);
          } catch (error) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["isDevMode"])()) {
              // Notify developers of errors in their comparator.
              console.warn(error);
            }

            return false;
          }
        });

        if (correspondingOption) {
          this._selectionModel.select(correspondingOption);
        }

        return correspondingOption;
      }
      /**
       * Sets up a key manager to listen to keyboard events on the overlay panel.
       * @private
       * @return {?}
       */


      _initKeyManager() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["ActiveDescendantKeyManager"](this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withAllowedModifierKeys(['shiftKey']);

        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
        /**
        * @return {?}
        */
        () => {
          // Restore focus to the trigger before closing. Ensures that the focus
          // position won't be lost if the user got focus into the overlay.
          this.focus();
          this.close();
        });

        this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
        /**
        * @return {?}
        */
        () => {
          if (this._panelOpen && this.panel) {
            this._scrollActiveOptionIntoView();
          } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
            this._keyManager.activeItem._selectViaInteraction();
          }
        });
      }
      /**
       * Drops current option subscriptions and IDs and resets from scratch.
       * @private
       * @return {?}
       */


      _resetOptions() {
        /** @type {?} */
        const changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        event => {
          this._onSelect(event.source, event.isUserInput);

          if (event.isUserInput && !this.multiple && this._panelOpen) {
            this.close();
            this.focus();
          }
        }); // Listen to changes in the internal state of the options and react accordingly.
        // Handles cases like the labels of the selected options changing.

        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...this.options.map(
        /**
        * @param {?} option
        * @return {?}
        */
        option => option._stateChanges)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(
        /**
        * @return {?}
        */
        () => {
          this._changeDetectorRef.markForCheck();

          this.stateChanges.next();
        });

        this._setOptionIds();
      }
      /**
       * Invoked when an option is clicked.
       * @private
       * @param {?} option
       * @param {?} isUserInput
       * @return {?}
       */


      _onSelect(option, isUserInput) {
        /** @type {?} */
        const wasSelected = this._selectionModel.isSelected(option);

        if (option.value == null && !this._multiple) {
          option.deselect();

          this._selectionModel.clear();

          this._propagateChanges(option.value);
        } else {
          if (wasSelected !== option.selected) {
            option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
          }

          if (isUserInput) {
            this._keyManager.setActiveItem(option);
          }

          if (this.multiple) {
            this._sortValues();

            if (isUserInput) {
              // In case the user selected the option with their mouse, we
              // want to restore focus back to the trigger, in order to
              // prevent the select keyboard controls from clashing with
              // the ones from `mat-option`.
              this.focus();
            }
          }
        }

        if (wasSelected !== this._selectionModel.isSelected(option)) {
          this._propagateChanges();
        }

        this.stateChanges.next();
      }
      /**
       * Sorts the selected values in the selected based on their order in the panel.
       * @private
       * @return {?}
       */


      _sortValues() {
        if (this.multiple) {
          /** @type {?} */
          const options = this.options.toArray();

          this._selectionModel.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          (a, b) => {
            return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
          });

          this.stateChanges.next();
        }
      }
      /**
       * Emits change event to set the model value.
       * @private
       * @param {?=} fallbackValue
       * @return {?}
       */


      _propagateChanges(fallbackValue) {
        /** @type {?} */
        let valueToEmit = null;

        if (this.multiple) {
          valueToEmit =
          /** @type {?} */
          this.selected.map(
          /**
          * @param {?} option
          * @return {?}
          */
          option => option.value);
        } else {
          valueToEmit = this.selected ?
          /** @type {?} */
          this.selected.value : fallbackValue;
        }

        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);

        this._onChange(valueToEmit);

        this.selectionChange.emit(new MatSelectChange(this, valueToEmit));

        this._changeDetectorRef.markForCheck();
      }
      /**
       * Records option IDs to pass to the aria-owns property.
       * @private
       * @return {?}
       */


      _setOptionIds() {
        this._optionIds = this.options.map(
        /**
        * @param {?} option
        * @return {?}
        */
        option => option.id).join(' ');
      }
      /**
       * Highlights the selected item. If no option is selected, it will highlight
       * the first item instead.
       * @private
       * @return {?}
       */


      _highlightCorrectOption() {
        if (this._keyManager) {
          if (this.empty) {
            this._keyManager.setFirstItemActive();
          } else {
            this._keyManager.setActiveItem(this._selectionModel.selected[0]);
          }
        }
      }
      /**
       * Scrolls the active option into view.
       * @private
       * @return {?}
       */


      _scrollActiveOptionIntoView() {
        /** @type {?} */
        const activeOptionIndex = this._keyManager.activeItemIndex || 0;
        /** @type {?} */

        const labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
        this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
      }
      /**
       * Focuses the select element.
       * @param {?=} options
       * @return {?}
       */


      focus(options) {
        this._elementRef.nativeElement.focus(options);
      }
      /**
       * Gets the index of the provided option in the option list.
       * @private
       * @param {?} option
       * @return {?}
       */


      _getOptionIndex(option) {
        return this.options.reduce(
        /**
        * @param {?} result
        * @param {?} current
        * @param {?} index
        * @return {?}
        */
        (result, current, index) => {
          return result === undefined ? option === current ? index : undefined : result;
        }, undefined);
      }
      /**
       * Calculates the scroll position and x- and y-offsets of the overlay panel.
       * @private
       * @return {?}
       */


      _calculateOverlayPosition() {
        /** @type {?} */
        const itemHeight = this._getItemHeight();
        /** @type {?} */


        const items = this._getItemCount();
        /** @type {?} */


        const panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        /** @type {?} */

        const scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

        /** @type {?} */

        const maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

        /** @type {?} */

        let selectedOptionOffset = this.empty ? 0 :
        /** @type {?} */
        this._getOptionIndex(this._selectionModel.selected[0]);
        selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
        // center of the overlay panel rather than the top.

        /** @type {?} */

        const scrollBuffer = panelHeight / 2;
        this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
        this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

        this._checkOverlayWithinViewport(maxScroll);
      }
      /**
       * Calculates the scroll position of the select's overlay panel.
       *
       * Attempts to center the selected option in the panel. If the option is
       * too high or too low in the panel to be scrolled to the center, it clamps the
       * scroll position to the min or max scroll positions respectively.
       * @param {?} selectedIndex
       * @param {?} scrollBuffer
       * @param {?} maxScroll
       * @return {?}
       */


      _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
        /** @type {?} */
        const itemHeight = this._getItemHeight();
        /** @type {?} */


        const optionOffsetFromScrollTop = itemHeight * selectedIndex;
        /** @type {?} */

        const halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.

        /** @type {?} */

        const optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
      }
      /**
       * Returns the aria-label of the select component.
       * @return {?}
       */


      _getAriaLabel() {
        // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
        // `aria-labelledby` value by setting the ariaLabel to the placeholder.
        return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
      }
      /**
       * Returns the aria-labelledby of the select component.
       * @return {?}
       */


      _getAriaLabelledby() {
        if (this.ariaLabelledby) {
          return this.ariaLabelledby;
        } // Note: we use `_getAriaLabel` here, because we want to check whether there's a
        // computed label. `this.ariaLabel` is only the user-specified label.


        if (!this._parentFormField || !this._parentFormField._hasFloatingLabel() || this._getAriaLabel()) {
          return null;
        }

        return this._parentFormField._labelId || null;
      }
      /**
       * Determines the `aria-activedescendant` to be set on the host.
       * @return {?}
       */


      _getAriaActiveDescendant() {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
          return this._keyManager.activeItem.id;
        }

        return null;
      }
      /**
       * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
       * This must be adjusted to align the selected option text over the trigger text when
       * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
       * can't be calculated until the panel has been attached, because we need to know the
       * content width in order to constrain the panel within the viewport.
       * @private
       * @return {?}
       */


      _calculateOverlayOffsetX() {
        /** @type {?} */
        const overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
        /** @type {?} */

        const viewportSize = this._viewportRuler.getViewportSize();
        /** @type {?} */


        const isRtl = this._isRtl();
        /** @type {?} */


        const paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
        /** @type {?} */

        let offsetX; // Adjust the offset, depending on the option padding.

        if (this.multiple) {
          offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
        } else {
          /** @type {?} */
          let selected = this._selectionModel.selected[0] || this.options.first;
          offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
        } // Invert the offset in LTR.


        if (!isRtl) {
          offsetX *= -1;
        } // Determine how much the select overflows on each side.

        /** @type {?} */


        const leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
        /** @type {?} */

        const rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

        if (leftOverflow > 0) {
          offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        } else if (rightOverflow > 0) {
          offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        } // Set the offset directly in order to avoid having to go through change detection and
        // potentially triggering "changed after it was checked" errors. Round the value to avoid
        // blurry content in some browsers.


        this.overlayDir.offsetX = Math.round(offsetX);
        this.overlayDir.overlayRef.updatePosition();
      }
      /**
       * Calculates the y-offset of the select's overlay panel in relation to the
       * top start corner of the trigger. It has to be adjusted in order for the
       * selected option to be aligned over the trigger when the panel opens.
       * @private
       * @param {?} selectedIndex
       * @param {?} scrollBuffer
       * @param {?} maxScroll
       * @return {?}
       */


      _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
        /** @type {?} */
        const itemHeight = this._getItemHeight();
        /** @type {?} */


        const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        /** @type {?} */

        const maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
        /** @type {?} */

        let optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

        if (this._disableOptionCentering) {
          return 0;
        }

        if (this._scrollTop === 0) {
          optionOffsetFromPanelTop = selectedIndex * itemHeight;
        } else if (this._scrollTop === maxScroll) {
          /** @type {?} */
          const firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
          /** @type {?} */

          const selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
          // portion of it is shown in the viewport and account for it in our offset.

          /** @type {?} */

          let partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
          // there is always extra padding at the top or bottom of the panel. When
          // scrolled to the very bottom, this padding is at the top of the panel and
          // must be added to the offset.

          optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
        } else {
          // If the option was scrolled to the middle of the panel using a scroll buffer,
          // its offset will be the scroll buffer minus the half height that was added to
          // center it.
          optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
        } // The final offset is the option's offset from the top, adjusted for the height difference,
        // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
        // The value is rounded to prevent some browsers from blurring the content.


        return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
      }
      /**
       * Checks that the attempted overlay position will fit within the viewport.
       * If it will not fit, tries to adjust the scroll position and the associated
       * y-offset so the panel can open fully on-screen. If it still won't fit,
       * sets the offset back to 0 to allow the fallback position to take over.
       * @private
       * @param {?} maxScroll
       * @return {?}
       */


      _checkOverlayWithinViewport(maxScroll) {
        /** @type {?} */
        const itemHeight = this._getItemHeight();
        /** @type {?} */


        const viewportSize = this._viewportRuler.getViewportSize();
        /** @type {?} */


        const topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        /** @type {?} */

        const bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        /** @type {?} */

        const panelHeightTop = Math.abs(this._offsetY);
        /** @type {?} */

        const totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        /** @type {?} */

        const panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

        if (panelHeightBottom > bottomSpaceAvailable) {
          this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        } else if (panelHeightTop > topSpaceAvailable) {
          this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        } else {
          this._transformOrigin = this._getOriginBasedOnOption();
        }
      }
      /**
       * Adjusts the overlay panel up to fit in the viewport.
       * @private
       * @param {?} panelHeightBottom
       * @param {?} bottomSpaceAvailable
       * @return {?}
       */


      _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
        // Browsers ignore fractional scroll offsets, so we need to round.

        /** @type {?} */
        const distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.

        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.

        if (this._scrollTop <= 0) {
          this._scrollTop = 0;
          this._offsetY = 0;
          this._transformOrigin = "50% bottom 0px";
        }
      }
      /**
       * Adjusts the overlay panel down to fit in the viewport.
       * @private
       * @param {?} panelHeightTop
       * @param {?} topSpaceAvailable
       * @param {?} maxScroll
       * @return {?}
       */


      _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
        // Browsers ignore fractional scroll offsets, so we need to round.

        /** @type {?} */
        const distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.

        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.

        if (this._scrollTop >= maxScroll) {
          this._scrollTop = maxScroll;
          this._offsetY = 0;
          this._transformOrigin = "50% top 0px";
          return;
        }
      }
      /**
       * Sets the transform origin point based on the selected option.
       * @private
       * @return {?}
       */


      _getOriginBasedOnOption() {
        /** @type {?} */
        const itemHeight = this._getItemHeight();
        /** @type {?} */


        const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        /** @type {?} */

        const originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
        return "50% ".concat(originY, "px 0px");
      }
      /**
       * Calculates the amount of items in the select. This includes options and group labels.
       * @private
       * @return {?}
       */


      _getItemCount() {
        return this.options.length + this.optionGroups.length;
      }
      /**
       * Calculates the height of the select's options.
       * @private
       * @return {?}
       */


      _getItemHeight() {
        return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * \@docs-private
       * @param {?} ids
       * @return {?}
       */


      setDescribedByIds(ids) {
        this._ariaDescribedby = ids.join(' ');
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * \@docs-private
       * @return {?}
       */


      onContainerClick() {
        this.focus();
        this.open();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * \@docs-private
       * @return {?}
       */


      get shouldLabelFloat() {
        return this._panelOpen || !this.empty;
      }

    }

    MatSelect.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
      args: [{
        selector: 'mat-select',
        exportAs: 'matSelect',
        template: "<div cdk-overlay-origin class=\"mat-select-trigger\" aria-hidden=\"true\" (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger><div class=\"mat-select-value\" [ngSwitch]=\"empty\"><span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\u00A0'}}</span> <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\"><span *ngSwitchDefault>{{triggerValue || '\u00A0'}}</span><ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content></span></div><div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div></div><ng-template cdk-connected-overlay cdkConnectedOverlayLockPosition cdkConnectedOverlayHasBackdrop cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayOpen]=\"panelOpen\" [cdkConnectedOverlayPositions]=\"_positions\" [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\" [cdkConnectedOverlayOffsetY]=\"_offsetY\" (backdropClick)=\"close()\" (attach)=\"_onAttached()\" (detach)=\"close()\"><div class=\"mat-select-panel-wrap\" [@transformPanelWrap]><div #panel class=\"mat-select-panel {{ _getPanelTheme() }}\" [ngClass]=\"panelClass\" [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\" (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\" [style.transformOrigin]=\"_transformOrigin\" [style.font-size.px]=\"_triggerFontSize\" (keydown)=\"_handleKeydown($event)\"><ng-content></ng-content></div></div></ng-template>",
        styles: [".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}"],
        inputs: ['disabled', 'disableRipple', 'tabIndex'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
        host: {
          'role': 'listbox',
          '[attr.id]': 'id',
          '[attr.tabindex]': 'tabIndex',
          '[attr.aria-label]': '_getAriaLabel()',
          '[attr.aria-labelledby]': '_getAriaLabelledby()',
          '[attr.aria-required]': 'required.toString()',
          '[attr.aria-disabled]': 'disabled.toString()',
          '[attr.aria-invalid]': 'errorState',
          '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
          '[attr.aria-multiselectable]': 'multiple',
          '[attr.aria-describedby]': '_ariaDescribedby || null',
          '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
          '[class.mat-select-disabled]': 'disabled',
          '[class.mat-select-invalid]': 'errorState',
          '[class.mat-select-required]': 'required',
          '[class.mat-select-empty]': 'empty',
          'class': 'mat-select',
          '(keydown)': '_handleKeydown($event)',
          '(focus)': '_onFocus()',
          '(blur)': '_onBlur()'
        },
        animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"],
          useExisting: MatSelect
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTION_PARENT_COMPONENT"],
          useExisting: MatSelect
        }]
      }]
    }];
    /** @nocollapse */

    MatSelect.ctorParameters = () => [{
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Attribute"],
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [MAT_SELECT_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["LiveAnnouncer"]
    }];

    MatSelect.propDecorators = {
      trigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
        args: ['trigger', {
          static: false
        }]
      }],
      panel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
        args: ['panel', {
          static: false
        }]
      }],
      overlayDir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
        args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"], {
          static: false
        }]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], {
          descendants: true
        }]
      }],
      optionGroups: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptgroup"]]
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      customTrigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"],
        args: [MatSelectTrigger, {
          static: false
        }]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      disableOptionCentering: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
        args: ['aria-labelledby']
      }],
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      typeaheadDebounceInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      sortComparator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
      }],
      openedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
      }],
      _openedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
        args: ['opened']
      }],
      _closedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
        args: ['closed']
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class MatSelectModule {}

    MatSelectModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
        exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
        declarations: [MatSelect, MatSelectTrigger],
        providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=select.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/select/typings/index.ngfactory.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@angular/material/select/typings/index.ngfactory.js ***!
    \**************************************************************************/

  /*! exports provided: MatSelectModuleNgFactory, RenderType_MatSelect, View_MatSelect_0, View_MatSelect_Host_0, MatSelectNgFactory */

  /***/
  function node_modulesAngularMaterialSelectTypingsIndexNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectModuleNgFactory", function () {
      return MatSelectModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MatSelect", function () {
      return RenderType_MatSelect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSelect_0", function () {
      return View_MatSelect_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MatSelect_Host_0", function () {
      return View_MatSelect_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectNgFactory", function () {
      return MatSelectNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var MatSelectModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], [])]);
    });

    var styles_MatSelect = [".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}"];

    var RenderType_MatSelect = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_MatSelect,
      data: {
        "animation": [{
          type: 7,
          name: "transformPanelWrap",
          definitions: [{
            type: 1,
            expr: "* => void",
            animation: {
              type: 11,
              selector: "@transformPanel",
              animation: [{
                type: 9,
                options: null
              }],
              options: {
                optional: true
              }
            },
            options: null
          }],
          options: {}
        }, {
          type: 7,
          name: "transformPanel",
          definitions: [{
            type: 0,
            name: "void",
            styles: {
              type: 6,
              styles: {
                transform: "scaleY(0.8)",
                minWidth: "100%",
                opacity: 0
              },
              offset: null
            },
            options: undefined
          }, {
            type: 0,
            name: "showing",
            styles: {
              type: 6,
              styles: {
                opacity: 1,
                minWidth: "calc(100% + 32px)",
                transform: "scaleY(1)"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 0,
            name: "showing-multiple",
            styles: {
              type: 6,
              styles: {
                opacity: 1,
                minWidth: "calc(100% + 64px)",
                transform: "scaleY(1)"
              },
              offset: null
            },
            options: undefined
          }, {
            type: 1,
            expr: "void => *",
            animation: {
              type: 4,
              styles: null,
              timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
            },
            options: null
          }, {
            type: 1,
            expr: "* => void",
            animation: {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0
                },
                offset: null
              },
              timings: "100ms 25ms linear"
            },
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_MatSelect_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "mat-select-placeholder"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.placeholder || "\u00A0";

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_MatSelect_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.triggerValue || "\u00A0";

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_MatSelect_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], null, null);
    }

    function View_MatSelect_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "span", [["class", "mat-select-value-text"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], {
        ngSwitch: [0, "ngSwitch"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatSelect_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatSelect_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {
        ngSwitchCase: [0, "ngSwitchCase"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !!_co.customTrigger;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = true;

        _ck(_v, 5, 0, currVal_1);
      }, null);
    }

    function View_MatSelect_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "div", [["class", "mat-select-panel-wrap"]], [[24, "@transformPanelWrap", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[2, 0], ["panel", 1]], null, 3, "div", [], [[24, "@transformPanel", 0], [4, "transformOrigin", null], [4, "font-size", "px"]], [[null, "@transformPanel.done"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("@transformPanel.done" === en) {
          var pd_0 = _co._panelDoneAnimatingStream.next($event.toState) !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _co._handleKeydown($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 1)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "mat-select-panel ", _co._getPanelTheme(), "");

        var currVal_5 = _co.panelClass;

        _ck(_v, 3, 0, currVal_4, currVal_5);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = undefined;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co.multiple ? "showing-multiple" : "showing";
        var currVal_2 = _co._transformOrigin;
        var currVal_3 = _co._triggerFontSize;

        _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_MatSelect_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        trigger: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 2, {
        panel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 3, {
        overlayDir: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, [[1, 0], ["trigger", 1]], null, 9, "div", [["aria-hidden", "true"], ["cdk-overlay-origin", ""], ["class", "mat-select-trigger"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.toggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, [["origin", 4]], 0, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["CdkOverlayOrigin"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 5, "div", [["class", "mat-select-value"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], {
        ngSwitch: [0, "ngSwitch"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatSelect_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {
        ngSwitchCase: [0, "ngSwitchCase"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_MatSelect_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], {
        ngSwitchCase: [0, "ngSwitchCase"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["class", "mat-select-arrow-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "div", [["class", "mat-select-arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("backdropClick" === en) {
          var pd_0 = _co.close() !== false;
          ad = pd_0 && ad;
        }

        if ("attach" === en) {
          var pd_1 = _co._onAttached() !== false;
          ad = pd_1 && ad;
        }

        if ("detach" === en) {
          var pd_2 = _co.close() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, View_MatSelect_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, [[3, 4]], 0, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["CdkConnectedOverlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ɵc"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]]], {
        origin: [0, "origin"],
        positions: [1, "positions"],
        offsetY: [2, "offsetY"],
        minWidth: [3, "minWidth"],
        backdropClass: [4, "backdropClass"],
        scrollStrategy: [5, "scrollStrategy"],
        open: [6, "open"],
        hasBackdrop: [7, "hasBackdrop"],
        lockPosition: [8, "lockPosition"]
      }, {
        backdropClick: "backdropClick",
        attach: "attach",
        detach: "detach"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.empty;

        _ck(_v, 6, 0, currVal_0);

        var currVal_1 = true;

        _ck(_v, 8, 0, currVal_1);

        var currVal_2 = false;

        _ck(_v, 10, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4);

        var currVal_4 = _co._positions;
        var currVal_5 = _co._offsetY;
        var currVal_6 = _co._triggerRect == null ? null : _co._triggerRect.width;
        var currVal_7 = "cdk-overlay-transparent-backdrop";
        var currVal_8 = _co._scrollStrategy;
        var currVal_9 = _co.panelOpen;
        var currVal_10 = "";
        var currVal_11 = "";

        _ck(_v, 14, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11);
      }, null);
    }

    function View_MatSelect_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "mat-select", [["class", "mat-select"], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._handleKeydown($event) !== false;
          ad = pd_0 && ad;
        }

        if ("focus" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._onFocus() !== false;
          ad = pd_1 && ad;
        }

        if ("blur" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._onBlur() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, View_MatSelect_0, RenderType_MatSelect)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 2080768, null, 3, _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ViewportRuler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"]], [8, null], [8, null], _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MAT_SELECT_SCROLL_STRATEGY"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        options: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        optionGroups: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, {
        customTrigger: 0
      })], function (_ck, _v) {
        _ck(_v, 3, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).id;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).tabIndex;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._getAriaLabel();

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._getAriaLabelledby();

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).required.toString();

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).disabled.toString();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).errorState;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).panelOpen ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._optionIds : null;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).multiple;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._ariaDescribedby || null;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._getAriaActiveDescendant();

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).disabled;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).errorState;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).required;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).empty;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14]);
      });
    }

    var MatSelectNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("mat-select", _angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"], View_MatSelect_Host_0, {
      disabled: "disabled",
      disableRipple: "disableRipple",
      tabIndex: "tabIndex",
      panelClass: "panelClass",
      placeholder: "placeholder",
      required: "required",
      multiple: "multiple",
      disableOptionCentering: "disableOptionCentering",
      compareWith: "compareWith",
      value: "value",
      ariaLabel: "aria-label",
      ariaLabelledby: "aria-labelledby",
      errorStateMatcher: "errorStateMatcher",
      typeaheadDebounceInterval: "typeaheadDebounceInterval",
      sortComparator: "sortComparator",
      id: "id"
    }, {
      openedChange: "openedChange",
      _openedStream: "opened",
      _closedStream: "closed",
      selectionChange: "selectionChange",
      valueChange: "valueChange"
    }, ["mat-select-trigger", "*"]);
    /***/

  },

  /***/
  "./node_modules/bezier-easing/src/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/bezier-easing/src/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBezierEasingSrcIndexJs(module, exports) {
    /**
     * https://github.com/gre/bezier-easing
     * BezierEasing - use bezier curve for transition easing function
     * by Gaëtan Renaudeau 2014 - 2015 – MIT License
     */
    // These values are established by empiricism with tests (tradeoff: performance VS precision)
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
    var float32ArraySupported = typeof Float32Array === 'function';

    function A(aA1, aA2) {
      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }

    function B(aA1, aA2) {
      return 3.0 * aA2 - 6.0 * aA1;
    }

    function C(aA1) {
      return 3.0 * aA1;
    } // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.


    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    } // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.


    function getSlope(aT, aA1, aA2) {
      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }

    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX,
          currentT,
          i = 0;

      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;

        if (currentX > 0.0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

      return currentT;
    }

    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);

        if (currentSlope === 0.0) {
          return aGuessT;
        }

        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }

      return aGuessT;
    }

    function LinearEasing(x) {
      return x;
    }

    module.exports = function bezier(mX1, mY1, mX2, mY2) {
      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
      }

      if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
      } // Precompute samples table


      var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }

      function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;

        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }

        --currentSample; // Interpolate to provide an initial guess for t

        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);

        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }

      return function BezierEasing(x) {
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) {
          return 0;
        }

        if (x === 1) {
          return 1;
        }

        return calcBezier(getTForX(x), mY1, mY2);
      };
    };
    /***/

  },

  /***/
  "./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar-smooth-scroll.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar-smooth-scroll.js ***!
    \****************************************************************************/

  /*! exports provided: SMOOTH_SCROLL_OPTIONS, SmoothScroll, SmoothScrollManager, SmoothScrollModule */

  /***/
  function node_modulesNgxScrollbarFesm2015NgxScrollbarSmoothScrollJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SMOOTH_SCROLL_OPTIONS", function () {
      return SMOOTH_SCROLL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmoothScroll", function () {
      return SmoothScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmoothScrollManager", function () {
      return SmoothScrollManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmoothScrollModule", function () {
      return SmoothScrollModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var bezier_easing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! bezier-easing */
    "./node_modules/bezier-easing/src/index.js");
    /* harmony import */


    var bezier_easing__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_7__);

    const SMOOTH_SCROLL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('SMOOTH_SCROLL_OPTIONS'); // @dynamic

    let SmoothScrollManager = class SmoothScrollManager {
      constructor(_document, _platform, customDefaultOptions) {
        this._document = _document;
        this._platform = _platform; // Keeps track of the ongoing SmoothScroll functions so they can be handled in case of duplication.
        // Each scrolled element gets a destroyer stream which gets deleted immediately after it completes.
        // Purpose: If user called a scroll function again on the same element before the scrolls completes,
        // it cancels the ongoing scroll and starts a new one

        this._onGoingScrolls = new Map();
        this._defaultOptions = Object.assign({
          duration: 468,
          easing: {
            x1: 0.42,
            y1: 0,
            x2: 0.58,
            y2: 1
          }
        }, customDefaultOptions);
      }

      get _w() {
        return this._document.defaultView;
      }
      /**
       * Timing method
       */


      get _now() {
        return this._w.performance && this._w.performance.now ? this._w.performance.now.bind(this._w.performance) : Date.now;
      }
      /**
       * changes scroll position inside an element
       */


      _scrollElement(el, x, y) {
        el.scrollLeft = x;
        el.scrollTop = y;
      }
      /**
       * Handles a given parameter of type HTMLElement, ElementRef or selector
       */


      _getElement(el, parent) {
        if (typeof el === 'string') {
          return (parent || this._document).querySelector(el);
        }

        return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceElement"])(el);
      }
      /**
       * Initializes a destroyer stream, re-initializes it if the element is already being scrolled
       */


      _initSmoothScroll(el) {
        if (this._onGoingScrolls.has(el)) {
          this._onGoingScrolls.get(el).next();
        }

        return this._onGoingScrolls.set(el, new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]()).get(el);
      }
      /**
       * Checks if smooth scroll has reached, cleans up the smooth scroll stream and resolves its promise
       */


      _isFinished(context, destroyed, resolve) {
        if (context.currentX !== context.x || context.currentY !== context.y) {
          return true;
        }

        destroyed.next();
        resolve();
        return false;
      }
      /**
       * Terminates an ongoing smooth scroll
       */


      _interrupted(el, destroyed) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(el, 'wheel', {
          passive: true,
          capture: true
        }), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(el, 'touchmove', {
          passive: true,
          capture: true
        }), destroyed).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
      }
      /**
       * Deletes the destroyer function, runs if the smooth scroll has finished or interrupted
       */


      _destroy(el, destroyed) {
        destroyed.complete();

        this._onGoingScrolls.delete(el);
      }
      /**
       * A function called recursively that, given a context, steps through scrolling
       */


      _step(context) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](subscriber => {
          let elapsed = (this._now() - context.startTime) / context.duration; // avoid elapsed times higher than one

          elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

          const value = context.easing(elapsed);
          context.currentX = context.startX + (context.x - context.startX) * value;
          context.currentY = context.startY + (context.y - context.startY) * value;

          this._scrollElement(context.scrollable, context.currentX, context.currentY); // Proceed to the step


          rxjs__WEBPACK_IMPORTED_MODULE_5__["animationFrameScheduler"].schedule(() => subscriber.next(context));
        });
      }

      _applyScrollToOptions(el, options) {
        if (!options.duration) {
          this._scrollElement(el, options.left, options.top);

          return Promise.resolve();
        } // Initialize a destroyer stream, reinitialize it if the element is already being scrolled


        const destroyed = this._initSmoothScroll(el);

        const context = {
          scrollable: el,
          startTime: this._now(),
          startX: el.scrollLeft,
          startY: el.scrollTop,
          x: options.left == null ? el.scrollLeft : ~~options.left,
          y: options.top == null ? el.scrollTop : ~~options.top,
          duration: options.duration,
          easing: bezier_easing__WEBPACK_IMPORTED_MODULE_7___default()(options.easing.x1, options.easing.y1, options.easing.x2, options.easing.y2)
        };
        return new Promise(resolve => {
          // Scroll each step recursively
          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["expand"])(() => this._step(context).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeWhile"])(currContext => this._isFinished(currContext, destroyed, resolve)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._interrupted(el, destroyed)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => this._destroy(el, destroyed))).subscribe();
        });
      }
      /**
       * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
       * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param scrollable element
       * @param customOptions specified the offsets to scroll to.
       */


      scrollTo(scrollable, customOptions) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this._platform)) {
          const el = this._getElement(scrollable);

          const isRtl = getComputedStyle(el).direction === 'rtl';
          const rtlScrollAxisType = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])();
          const options = Object.assign(Object.assign(Object.assign({}, this._defaultOptions), customOptions), {
            // Rewrite start & end offsets as right or left offsets.
            left: customOptions.left == null ? isRtl ? customOptions.end : customOptions.start : customOptions.left,
            right: customOptions.right == null ? isRtl ? customOptions.start : customOptions.end : customOptions.right
          }); // Rewrite the bottom offset as a top offset.

          if (options.bottom != null) {
            options.top = el.scrollHeight - el.clientHeight - options.bottom;
          } // Rewrite the right offset as a left offset.


          if (isRtl && rtlScrollAxisType !== 0
          /* NORMAL */
          ) {
              if (options.left != null) {
                options.right = el.scrollWidth - el.clientWidth - options.left;
              }

              if (rtlScrollAxisType === 2
              /* INVERTED */
              ) {
                  options.left = options.right;
                } else if (rtlScrollAxisType === 1
              /* NEGATED */
              ) {
                  options.left = options.right ? -options.right : options.right;
                }
            } else {
            if (options.right != null) {
              options.left = el.scrollWidth - el.clientWidth - options.right;
            }
          }

          return this._applyScrollToOptions(el, options);
        }

        return Promise.resolve();
      }
      /**
       * Scroll to element by reference or selector
       */


      scrollToElement(scrollable, target, customOptions) {
        const scrollableEl = this._getElement(scrollable);

        const targetEl = this._getElement(target, scrollableEl);

        const options = Object.assign(Object.assign({}, customOptions), {
          left: targetEl.offsetLeft + (customOptions.left || 0),
          top: targetEl.offsetTop + (customOptions.top || 0)
        });
        return targetEl ? this.scrollTo(scrollableEl, options) : Promise.resolve();
      }

    };

    SmoothScrollManager.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [SMOOTH_SCROLL_OPTIONS]
      }]
    }];

    SmoothScrollManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function SmoothScrollManager_Factory() {
        return new SmoothScrollManager(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(SMOOTH_SCROLL_OPTIONS, 8));
      },
      token: SmoothScrollManager,
      providedIn: "root"
    });
    SmoothScrollManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(SMOOTH_SCROLL_OPTIONS)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, Object])], SmoothScrollManager);
    let SmoothScroll = class SmoothScroll {
      constructor(element, smoothScroll) {
        this.element = element;
        this.smoothScroll = smoothScroll;
      }

      scrollTo(options) {
        return this.smoothScroll.scrollTo(this.element, options);
      }

      scrollToElement(target, options) {
        return this.smoothScroll.scrollToElement(this.element, target, options);
      }

    };

    SmoothScroll.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: SmoothScrollManager
    }];

    SmoothScroll = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[smoothScroll], [smooth-scroll]',
      exportAs: 'smoothScroll'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], SmoothScrollManager])], SmoothScroll);
    let SmoothScrollModule = class SmoothScrollModule {};
    SmoothScrollModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [SmoothScroll],
      exports: [SmoothScroll]
    })], SmoothScrollModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-scrollbar-smooth-scroll.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar.js":
  /*!**************************************************************!*\
    !*** ./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar.js ***!
    \**************************************************************/

  /*! exports provided: NG_SCROLLBAR_OPTIONS, NgScrollbar, NgScrollbarModule, ScrollViewport, ScrollbarManager, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn */

  /***/
  function node_modulesNgxScrollbarFesm2015NgxScrollbarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_SCROLLBAR_OPTIONS", function () {
      return NG_SCROLLBAR_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgScrollbar", function () {
      return NgScrollbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgScrollbarModule", function () {
      return NgScrollbarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollViewport", function () {
      return ScrollViewport;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollbarManager", function () {
      return ScrollbarManager;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return HideNativeScrollbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return NativeScrollbarSizeFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return NgAttr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return ResizeObserverFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return ResizeSensor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return ThumbXDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return ThumbYDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return ThumbAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return TrackXDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return TrackYDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return TrackAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return ScrollbarY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return ScrollbarX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return Scrollbar;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-scrollbar/smooth-scroll */
    "./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar-smooth-scroll.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function preventSelection(doc) {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => {
        doc.onselectstart = () => false;
      });
    }

    function enableSelection(doc) {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => {
        doc.onselectstart = null;
      });
    }

    function stopPropagation() {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(e => e.stopPropagation());
    }
    /**
     * Check if pointer is within scrollbar bounds
     */


    function isWithinBounds(e, rect) {
      return e.clientX >= rect.left && e.clientX <= rect.left + rect.width && e.clientY >= rect.top && e.clientY <= rect.top + rect.height;
    }

    let ScrollViewport = class ScrollViewport {
      constructor(viewPort, document) {
        this.viewPort = viewPort;
        this.document = document;
        this.nativeElement = viewPort.nativeElement;
      } // Get viewport size, clientHeight or clientWidth


      get clientHeight() {
        return this.nativeElement.clientHeight;
      }

      get clientWidth() {
        return this.nativeElement.clientWidth;
      }

      get scrollHeight() {
        return this.nativeElement.scrollHeight;
      }

      get scrollWidth() {
        return this.nativeElement.scrollWidth;
      } // Get viewport scroll offset, scrollTop or scrollLeft


      get scrollTop() {
        return this.nativeElement.scrollTop;
      }

      get scrollLeft() {
        return this.nativeElement.scrollLeft;
      } // Get the available scrollable size


      get scrollMaxX() {
        return this.scrollWidth - this.clientWidth;
      }

      get scrollMaxY() {
        return this.scrollHeight - this.clientHeight;
      }

      get contentHeight() {
        return this.contentWrapperElement.clientHeight;
      }
      /**
       * Activate viewport pointer events such as 'hovered' and 'clicked' events
       */


      activatePointerEvents(propagate, destroyed) {
        this.hovered = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"](subscriber => {
          // Stream that emits when pointer is moved over the viewport (used to set the hovered state)
          const mouseMoveStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.nativeElement, 'mousemove', {
            passive: true
          });
          const mouseMove = propagate ? mouseMoveStream : mouseMoveStream.pipe(stopPropagation()); // Stream that emits when pointer leaves the viewport (used to remove the hovered state)

          const mouseLeave = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(() => false));
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(mouseMove, mouseLeave).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(e => subscriber.next(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(destroyed)).subscribe();
        });
        this.clicked = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"](subscriber => {
          const mouseDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.nativeElement, 'mousedown', {
            passive: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(e => subscriber.next(e)));
          const mouseUp = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.nativeElement, 'mouseup', {
            passive: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => subscriber.next(false)));
          mouseDown.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(() => mouseUp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(destroyed)).subscribe();
        });
      }
      /**
       * Set this directive as a non-functional wrapper, called when a custom viewport is used
       */


      setAsWrapper() {
        // In this case the default viewport and the default content wrapper will act as a mask
        this.nativeElement.className = 'ng-native-scrollbar-hider ng-scroll-layer';

        if (this.nativeElement.firstElementChild) {
          this.nativeElement.firstElementChild.className = 'ng-scroll-layer';
        }
      }
      /**
       * Set this directive as  the viewport, called when no custom viewport is used
       */


      setAsViewport(customClassName) {
        this.nativeElement.className = "ng-native-scrollbar-hider ng-scroll-viewport ".concat(customClassName); // Check if the custom viewport has only one child and set it as the content wrapper

        if (this.nativeElement.firstElementChild) {
          this.contentWrapperElement = this.nativeElement.firstElementChild;
          this.contentWrapperElement.classList.add('ng-scroll-content');
        }
      }
      /**
       * Scroll viewport vertically
       */


      scrollYTo(value) {
        this.nativeElement.scrollTop = value;
      }
      /**
       * Scroll viewport horizontally
       */


      scrollXTo(value) {
        this.nativeElement.scrollLeft = value;
      }

    };

    ScrollViewport.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];

    ScrollViewport = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[scrollViewport]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])], ScrollViewport);
    const NG_SCROLLBAR_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NG_SCROLLBAR_OPTIONS');
    const defaultOptions = {
      viewClass: '',
      trackClass: '',
      thumbClass: '',
      track: 'vertical',
      appearance: 'compact',
      visibility: 'native',
      position: 'native',
      pointerEventsMethod: 'viewport',
      trackClickScrollDuration: 300,
      minThumbSize: 20,
      windowResizeDebounce: 0,
      sensorDebounce: 0,
      scrollAuditTime: 0,
      viewportPropagateMouseMove: true
    };
    let ScrollbarManager = class ScrollbarManager {
      constructor(options) {
        this.globalOptions = options ? Object.assign(Object.assign({}, defaultOptions), options) : defaultOptions;
        this.rtlScrollAxisType = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["getRtlScrollAxisType"])();
      }

    };

    ScrollbarManager.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [NG_SCROLLBAR_OPTIONS]
      }]
    }];

    ScrollbarManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollbarManager_Factory() {
        return new ScrollbarManager(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(NG_SCROLLBAR_OPTIONS, 8));
      },
      token: ScrollbarManager,
      providedIn: "root"
    });
    ScrollbarManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(NG_SCROLLBAR_OPTIONS)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ScrollbarManager);
    let NgScrollbar = class NgScrollbar {
      constructor(el, zone, changeDetectorRef, dir, smoothScroll, manager) {
        this.el = el;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.dir = dir;
        this.smoothScroll = smoothScroll;
        this.manager = manager;
        this._disabled = false;
        this._sensorDisabled = this.manager.globalOptions.sensorDisabled;
        this._pointerEventsDisabled = this.manager.globalOptions.pointerEventsDisabled;
        this._viewportPropagateMouseMove = this.manager.globalOptions.viewportPropagateMouseMove;
        /** A class forwarded to scrollable viewport element */

        this.viewClass = this.manager.globalOptions.viewClass;
        /** A class forwarded to the scrollbar track element */

        this.trackClass = this.manager.globalOptions.trackClass;
        /** A class forwarded to the scrollbar thumb element */

        this.thumbClass = this.manager.globalOptions.thumbClass;
        /** Minimum scrollbar thumb size */

        this.minThumbSize = this.manager.globalOptions.minThumbSize;
        /** The duration which the scrolling takes to reach its target when scrollbar rail is clicked */

        this.trackClickScrollDuration = this.manager.globalOptions.trackClickScrollDuration;
        /**
         * Sets the pointer events method
         * Use viewport pointer events  to handle dragging and track click (This makes scrolling work when mouse is over the scrollbar)
         * Use scrollbar pointer events to handle dragging and track click
         */

        this.pointerEventsMethod = this.manager.globalOptions.pointerEventsMethod;
        /**
         * Sets the supported scroll track of the viewport, there are 3 options:
         *
         * - `vertical` Use both vertical and horizontal scrollbar
         * - `horizontal` Use both vertical and horizontal scrollbar
         * - `all` Use both vertical and horizontal scrollbar
         */

        this.track = this.manager.globalOptions.track;
        /**
         * When to show the scrollbar, and there are 3 options:
         *
         * - `native` (default) Scrollbar will be visible when viewport is scrollable like with native scrollbar
         * - `hover` Scrollbars are hidden by default, only visible on scrolling or hovering
         * - `always` Scrollbars are always shown even if the viewport is not scrollable
         */

        this.visibility = this.manager.globalOptions.visibility;
        /**
         *  Sets the appearance of the scrollbar, there are 2 options:
         *
         * - `standard` (default) scrollbar space will be reserved just like with native scrollbar.
         * - `compact` scrollbar doesn't reserve any space, they are placed over the viewport.
         */

        this.appearance = this.manager.globalOptions.appearance;
        /**
         * Sets the position of each scrollbar, there are 4 options:
         *
         * - `native` (Default) Use the default position like in native scrollbar.
         * - `invertY` Inverts vertical scrollbar position
         * - `invertX` Inverts Horizontal scrollbar position
         * - `invertAll` Inverts both scrollbar positions
         */

        this.position = this.manager.globalOptions.position;
        /** Debounce interval for detecting changes via ResizeObserver */

        this.sensorDebounce = this.manager.globalOptions.sensorDebounce;
        /** Scroll Audit Time */

        this.scrollAuditTime = this.manager.globalOptions.scrollAuditTime;
        /** Steam that emits when scrollbar is updated */

        this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Set of attributes added on the scrollbar wrapper */

        this.state = {};
        /** Stream that destroys components' observables */

        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
      }
      /** Disable custom scrollbar and switch back to native scrollbar */


      get disabled() {
        return this._disabled;
      }

      set disabled(disabled) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(disabled);
      }
      /** Whether ResizeObserver is disabled */


      get sensorDisabled() {
        return this._sensorDisabled;
      }

      set sensorDisabled(disabled) {
        this._sensorDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(disabled);
      }
      /** A flag used to enable/disable the scrollbar thumb dragged event */


      get pointerEventsDisabled() {
        return this._pointerEventsDisabled;
      }

      set pointerEventsDisabled(disabled) {
        this._pointerEventsDisabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(disabled);
      }
      /** Enable viewport mousemove event propagation (only when pointerEventsMethod="viewport") */


      get viewportPropagateMouseMove() {
        return this._viewportPropagateMouseMove;
      }

      set viewportPropagateMouseMove(disabled) {
        this._viewportPropagateMouseMove = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(disabled);
      }

      get nativeElement() {
        return this.el.nativeElement;
      }
      /**
       * Update local state with each change detection
       */


      updateState() {
        let verticalUsed = false;
        let horizontalUsed = false;
        let isVerticallyScrollable = false;
        let isHorizontallyScrollable = false; // Check if vertical scrollbar should be displayed

        if (this.track === 'all' || this.track === 'vertical') {
          isVerticallyScrollable = this.viewport.scrollHeight > this.viewport.clientHeight;
          verticalUsed = this.visibility === 'always' || isVerticallyScrollable;
        } // Check if horizontal scrollbar should be displayed


        if (this.track === 'all' || this.track === 'horizontal') {
          isHorizontallyScrollable = this.viewport.scrollWidth > this.viewport.clientWidth;
          horizontalUsed = this.visibility === 'always' || isHorizontallyScrollable;
        } // Update inner wrapper attributes


        this._updateState({
          position: this.position,
          track: this.track,
          appearance: this.appearance,
          visibility: this.visibility,
          deactivated: this.disabled,
          dir: this.dir.value,
          pointerEventsMethod: this.pointerEventsMethod,
          verticalUsed,
          horizontalUsed,
          isVerticallyScrollable,
          isHorizontallyScrollable
        });
      }

      _updateState(state) {
        this.state = Object.assign(Object.assign({}, this.state), state);
        this.changeDetectorRef.detectChanges();
      }

      getScrolledByDirection(property) {
        let event;
        return this.scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(e => event = e), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pluck"])('target', property), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(([prev, curr]) => prev !== curr), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(() => event));
      }
      /**
       * Set hovered state if a scrollbar is being hovered
       */


      setHovered(hovered) {
        this.zone.run(() => this._updateState(Object.assign({}, hovered)));
      }
      /**
       * Set dragging state if a scrollbar is being dragged
       */


      setDragging(dragging) {
        this.zone.run(() => this._updateState(Object.assign({}, dragging)));
      }
      /**
       * Set clicked state if a scrollbar track is being click
       */


      setClicked(scrollbarClicked) {
        this.zone.run(() => this._updateState({
          scrollbarClicked
        }));
      }

      ngOnInit() {
        // Set the viewport based on user choice
        this.zone.runOutsideAngular(() => {
          if (this.customViewPort) {
            this.viewport = this.customViewPort;
            this.defaultViewPort.setAsWrapper();
          } else {
            this.viewport = this.defaultViewPort;
          } // Activate the selected viewport


          this.viewport.setAsViewport(this.viewClass);
          let scrollStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.viewport.nativeElement, 'scroll', {
            passive: true
          }); // Throttle scroll event if 'scrollAuditTime' is set

          scrollStream = this.scrollAuditTime ? scrollStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["auditTime"])(this.scrollAuditTime)) : scrollStream; // Initialize scroll streams

          this.scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"](subscriber => scrollStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed)).subscribe(subscriber));
          this.verticalScrolled = this.getScrolledByDirection('scrollTop');
          this.horizontalScrolled = this.getScrolledByDirection('scrollLeft');
        });
      }

      ngAfterViewChecked() {
        this.updateState();
      }

      ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
      }
      /**
       * Update local state and the internal scrollbar controls
       */


      update() {
        if (!this.state.horizontalUsed) {
          // Auto-height: Set component height to content height
          this.nativeElement.style.height = "".concat(this.viewport.contentHeight, "px");
        }

        this.updated.next();
        this.changeDetectorRef.detectChanges();
      }
      /**
       * Smooth scroll functions
       */


      scrollTo(options) {
        return this.smoothScroll.scrollTo(this.viewport.nativeElement, options);
      }
      /**
       * Scroll to element by reference or selector
       */


      scrollToElement(target, options) {
        return this.smoothScroll.scrollToElement(this.viewport.nativeElement, target, options);
      }

    };

    NgScrollbar.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
    }, {
      type: ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__["SmoothScrollManager"]
    }, {
      type: ScrollbarManager
    }];

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], NgScrollbar.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], NgScrollbar.prototype, "sensorDisabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], NgScrollbar.prototype, "pointerEventsDisabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], NgScrollbar.prototype, "viewportPropagateMouseMove", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgScrollbar.prototype, "viewClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgScrollbar.prototype, "trackClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgScrollbar.prototype, "thumbClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NgScrollbar.prototype, "minThumbSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NgScrollbar.prototype, "trackClickScrollDuration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgScrollbar.prototype, "pointerEventsMethod", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgScrollbar.prototype, "track", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgScrollbar.prototype, "visibility", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgScrollbar.prototype, "appearance", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], NgScrollbar.prototype, "position", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NgScrollbar.prototype, "sensorDebounce", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], NgScrollbar.prototype, "scrollAuditTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NgScrollbar.prototype, "updated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ScrollViewport, {
      static: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ScrollViewport)], NgScrollbar.prototype, "defaultViewPort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(ScrollViewport, {
      static: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ScrollViewport)], NgScrollbar.prototype, "customViewPort", void 0);
    NgScrollbar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ng-scrollbar',
      exportAs: 'ngScrollbar',
      template: "<div class=\"ng-scrollbar-wrapper\" [ngAttr]=\"state\">\n  <div class=\"ng-scroll-viewport-wrapper\"\n       (resizeSensor)=\"update()\"\n       [sensorDebounce]=\"sensorDebounce\"\n       [sensorDisabled]=\"sensorDisabled\">\n    <div scrollViewport\n         hideNativeScrollbar>\n      <div>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n  <ng-container *ngIf=\"!disabled\">\n    <scrollbar-x *ngIf=\"state.horizontalUsed\"\n                 [attr.scrollable]=\"state.isHorizontallyScrollable\"\n                 [attr.fit]=\"state.verticalUsed\">\n    </scrollbar-x>\n    <scrollbar-y *ngIf=\"state.verticalUsed\"\n                 [attr.scrollable]=\"state.isVerticallyScrollable\"\n                 [attr.fit]=\"state.horizontalUsed\">\n    </scrollbar-y>\n  </ng-container>\n</div>\n\n",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      host: {
        '[class.ng-scrollbar]': 'true'
      },
      styles: ["::ng-deep .ng-scrollbar-measure{left:0;overflow:scroll;position:fixed;top:-9999px;scrollbar-width:none;-ms-overflow-style:none}::ng-deep .ng-scrollbar-measure::-webkit-scrollbar{display:none}:host{--scrollbar-border-radius:7px;--scrollbar-padding:4px;--scrollbar-track-color:transparent;--scrollbar-thumb-color:rgba(0, 0, 0, 0.2);--scrollbar-thumb-hover-color:var(--scrollbar-thumb-color);--scrollbar-size:5px;--scrollbar-hover-size:var(--scrollbar-size);--scrollbar-thumb-transition:height ease-out 150ms,width ease-out 150ms;--scrollbar-track-transition:height ease-out 150ms,width ease-out 150ms;display:block;position:relative;height:100%;max-height:100%;max-width:100%}:host>.ng-scrollbar-wrapper{--scrollbar-total-size:calc(var(--scrollbar-size) + var(--scrollbar-padding) * 2);--vertical-scrollbar-size:var(--scrollbar-size);--horizontal-scrollbar-size:var(--scrollbar-size);--vertical-scrollbar-total-size:calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);--horizontal-scrollbar-total-size:calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2)}:host>.ng-scrollbar-wrapper[verticalDragging=true],:host>.ng-scrollbar-wrapper[verticalHovered=true]{--vertical-scrollbar-size:var(--scrollbar-hover-size);--vertical-scrollbar-total-size:calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}:host>.ng-scrollbar-wrapper[horizontalDragging=true],:host>.ng-scrollbar-wrapper[horizontalHovered=true]{--horizontal-scrollbar-size:var(--scrollbar-hover-size);--horizontal-scrollbar-total-size:calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:0;right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:var(--scrollbar-total-size);right:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:var(--scrollbar-total-size);right:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{padding-left:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{left:0;right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{padding-right:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{top:0;bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{padding-bottom:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=scrollbar]>.ng-scroll-viewport-wrapper{top:var(--scrollbar-total-size);bottom:0}:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{padding-top:var(--scrollbar-total-size)}:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{scrollbar-width:none;-ms-overflow-style:none}:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport::-webkit-scrollbar,:host>.ng-scrollbar-wrapper[deactivated=false]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport::-webkit-scrollbar{display:none}:host>.ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider{bottom:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider{left:0;right:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-native-scrollbar-hider,:host>.ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl]>.ng-scroll-viewport-wrapper>.ng-native-scrollbar-hider{right:0;left:var(--native-scrollbar-size)}:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]>.scrollbar-control{opacity:0;transition-property:opacity;transition-duration:.4s;transition-delay:.8s}:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:active>.scrollbar-control,:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:focus>.scrollbar-control,:host>.ng-scrollbar-wrapper[deactivated=false][visibility=hover]:hover>.scrollbar-control{opacity:1;transition-duration:.4s;transition-delay:0s}:host>.ng-scrollbar-wrapper[horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{overflow-x:auto;overflow-y:hidden}:host>.ng-scrollbar-wrapper[verticalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[verticalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{overflow-y:auto;overflow-x:hidden}:host>.ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,:host>.ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{overflow:auto}.ng-scroll-viewport-wrapper{overflow:hidden}.ng-scroll-viewport{-webkit-overflow-scrolling:touch;contain:strict;will-change:scroll-position}::ng-deep .ng-scroll-content{position:relative!important;display:inline-block;min-width:100%}.ng-scroll-layer,.ng-scroll-viewport-wrapper,.ng-scrollbar-wrapper,::ng-deep .ng-scroll-viewport{position:absolute;left:0;right:0;top:0;bottom:0}", "::ng-deep .ng-scrollbar-wrapper[pointerEventsMethod=viewport]>.scrollbar-control{pointer-events:none}::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>*>*>::ng-deep.ng-scroll-viewport,::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::ng-deep .ng-scrollbar-wrapper>.scrollbar-control{position:absolute;display:flex;justify-content:center;align-items:center;transition:var(--scrollbar-track-transition)}::ng-deep .ng-scrollbar-wrapper>.scrollbar-control[scrollable=false] .ng-scrollbar-thumb{display:none}::ng-deep .ng-scrollbar-track{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-track-color);overflow:hidden;transition:var(--scrollbar-track-transition);cursor:default}::ng-deep .ng-scrollbar-thumb{box-sizing:border-box;position:relative;border-radius:inherit;background-color:var(--scrollbar-thumb-color);transform:translateZ(0);transition:var(--scrollbar-thumb-transition)}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__["SmoothScrollManager"], ScrollbarManager])], NgScrollbar);
    let NativeScrollbarSizeFactory = class NativeScrollbarSizeFactory {
      constructor(document, manager, platform) {
        this.document = document;
        this.manager = manager;
        this.platform = platform;
        this._scrollbarSize = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](this.getNativeScrollbarSize());
        this.scrollbarSize = this._scrollbarSize.asObservable(); // Calculate native scrollbar size on window resize event, because the size changes if use zoomed in/out

        if (platform.isBrowser) {
          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.document.defaultView, 'resize', {
            passive: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(this.manager.globalOptions.windowResizeDebounce), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(() => this.getNativeScrollbarSize()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(size => this._scrollbarSize.next(size))).subscribe();
        }
      }
      /**
       * Get native scrollbar size
       */


      getNativeScrollbarSize() {
        // Hide iOS browsers native scrollbar
        if (this.platform.IOS) {
          return 6;
        }

        const box = this.document.createElement('div');
        box.className = 'ng-scrollbar-measure';
        this.document.body.appendChild(box);
        const size = box.getBoundingClientRect().right;
        this.document.body.removeChild(box);
        return size;
      }

    };

    NativeScrollbarSizeFactory.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }, {
      type: ScrollbarManager
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
    }];

    NativeScrollbarSizeFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function NativeScrollbarSizeFactory_Factory() {
        return new NativeScrollbarSizeFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(ScrollbarManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
      },
      token: NativeScrollbarSizeFactory,
      providedIn: "root"
    });
    NativeScrollbarSizeFactory = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, ScrollbarManager, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]])], NativeScrollbarSizeFactory);
    let HideNativeScrollbar = class HideNativeScrollbar {
      constructor(el, hideNativeScrollbar) {
        this.hideNativeScrollbar = hideNativeScrollbar;
        this._subscriber = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        this._subscriber = hideNativeScrollbar.scrollbarSize.subscribe(size => {
          el.nativeElement.style.setProperty('--native-scrollbar-size', "-".concat(size, "px"));
        });
      }

      ngOnDestroy() {
        this._subscriber.unsubscribe();
      }

    };

    HideNativeScrollbar.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: NativeScrollbarSizeFactory
    }];

    HideNativeScrollbar = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[hideNativeScrollbar]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], NativeScrollbarSizeFactory])], HideNativeScrollbar);
    let NgAttr = class NgAttr {
      constructor(el) {
        this.el = el;
      }

      set ngAttr(attrs) {
        for (const [key, value] of Object.entries(attrs)) {
          this.el.nativeElement.setAttribute(key, value);
        }
      }

    };

    NgAttr.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }];

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], NgAttr.prototype, "ngAttr", null);
    NgAttr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ngAttr]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], NgAttr);
    /**
     * Factory that initialize the ResizeObserver if available in the browser
     * Otherwise, it lazy-loads the ResizeObserver polyfill
     */

    let ResizeObserverFactory = class ResizeObserverFactory {
      constructor(document, platform) {
        this.resizeObserverSource = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](null);
        this.resizeObserverLoader = this.resizeObserverSource.asObservable();

        if (platform.isBrowser) {
          const resizeObserverApi = document.defaultView.ResizeObserver ? Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(document.defaultView.ResizeObserver) : Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(__webpack_require__.e(
          /*! import() */
          6).then(__webpack_require__.bind(null,
          /*! @juggle/resize-observer */
          "./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js"))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(module => module.ResizeObserver), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(e => {
            console.log('Unable to load ResizeObserver polyfill', e);
            return rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
          }));
          this.resizeObserverSource.next(resizeObserverApi);
        }
      }

    };

    ResizeObserverFactory.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
    }];

    ResizeObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ResizeObserverFactory_Factory() {
        return new ResizeObserverFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
      },
      token: ResizeObserverFactory,
      providedIn: "root"
    });
    ResizeObserverFactory = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]])], ResizeObserverFactory);
    let ResizeSensor = class ResizeSensor {
      constructor(zone, platform, resizeObserverFactory, scrollbar) {
        this.zone = zone;
        this.platform = platform;
        this.resizeObserverFactory = resizeObserverFactory;
        this.scrollbar = scrollbar;
        this._disabled = false;
        this._subscription = null;
        this.resizeSensor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (!scrollbar) {
          throw new Error('[NgScrollbar Resize Sensor Directive]: Host element must be an NgScrollbar component.');
        }
      }
      /** Debounce interval for emitting the changes. */


      get debounce() {
        return this._debounce;
      }

      set debounce(value) {
        this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(value);

        this._subscribe();
      }
      /** Whether ResizeObserver is disabled. */


      get disabled() {
        return this._disabled;
      }

      set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        this._disabled ? this._unsubscribe() : this._subscribe();
      }

      ngAfterContentInit() {
        if (!this._subscription && !this._disabled) {
          this._subscribe();
        }
      }

      ngOnDestroy() {
        this._unsubscribe();
      }

      _createObserver(ResizeObserver) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"](observer => {
          this._resizeObserver = new ResizeObserver(() => observer.next());

          this._resizeObserver.observe(this.scrollbar.viewport.nativeElement);

          if (this.scrollbar.viewport.contentWrapperElement) {
            this._resizeObserver.observe(this.scrollbar.viewport.contentWrapperElement);
          }
        });
      }

      _subscribe() {
        this._unsubscribe();

        if (this.platform.isBrowser) {
          this.zone.runOutsideAngular(() => {
            this._subscription = this.resizeObserverFactory.resizeObserverLoader.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(moduleObservable => moduleObservable), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(ResizeObserver => {
              if (ResizeObserver) {
                const stream = this._createObserver(ResizeObserver);

                return this.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(this._debounce)) : stream;
              } else {
                return rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
              }
            })).subscribe(() => this.resizeSensor.emit());
          });
        }
      }

      _unsubscribe() {
        if (this._resizeObserver) {
          this._resizeObserver.disconnect();
        }

        if (this._subscription) {
          this._subscription.unsubscribe();
        }
      }

    };

    ResizeSensor.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
    }, {
      type: ResizeObserverFactory
    }, {
      type: NgScrollbar
    }];

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sensorDebounce'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], ResizeSensor.prototype, "debounce", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('sensorDisabled'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ResizeSensor.prototype, "disabled", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ResizeSensor.prototype, "resizeSensor", void 0);
    ResizeSensor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[resizeSensor]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], ResizeObserverFactory, NgScrollbar])], ResizeSensor);

    class TrackAdapter {
      constructor(cmp, trackElement, document) {
        this.cmp = cmp;
        this.trackElement = trackElement;
        this.document = document;
      } // Stream that emits when the track element is clicked


      get clicked() {
        const mouseDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.trackElement, 'mousedown', {
          passive: true
        }).pipe(stopPropagation(), preventSelection(this.document));
        const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.document, 'mouseup', {
          passive: true
        }).pipe(stopPropagation(), enableSelection(this.document), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(() => rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(mouseDown, mouseup);
      } // Stream that emits when the track element is hovered


      get hovered() {
        const mouseEnter = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.trackElement, 'mouseenter', {
          passive: true
        }).pipe(stopPropagation(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(() => true));
        const mouseLeave = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.trackElement, 'mouseleave', {
          passive: true
        }).pipe(stopPropagation(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(() => false));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(mouseEnter, mouseLeave);
      } // Get track client rect


      get clientRect() {
        return this.trackElement.getBoundingClientRect();
      }
      /**
       * Stream that emits when scrollbar track is clicked
       */


      onTrackClicked(e, thumbSize, scrollSize) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(e).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pluck"])(this.pageProperty), // Calculate scrollTo position
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(pageOffset => {
          const clickOffset = pageOffset - this.offset;
          const offset = clickOffset - thumbSize / 2;
          const ratio = offset / this.size;
          return ratio * scrollSize;
        }), // Smooth scroll to position
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(value => {
          this.cmp.scrollTo(Object.assign(Object.assign({}, this.mapToScrollToOption(value)), {
            duration: Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceNumberProperty"])(this.cmp.trackClickScrollDuration)
          }));
        }));
      }

    }

    class ThumbAdapter {
      constructor(cmp, thumbElement, document) {
        this.cmp = cmp;
        this.thumbElement = thumbElement;
        this.document = document; // Stream that emits dragging state

        this._dragging = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.dragging = this._dragging.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])());
      }

      get trackMax() {
        return this.track.size - this.size;
      } // Get thumb client rect


      get clientRect() {
        return this.thumbElement.getBoundingClientRect();
      } // Stream that emits when scrollbar thumb is clicked


      get clicked() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.thumbElement, 'mousedown', {
          passive: true
        }).pipe(stopPropagation());
      } // Calculate and update thumb position and size


      update() {
        const size = calculateThumbSize(this.track.size, this.viewportScrollSize, this.cmp.minThumbSize);
        const position = calculateThumbPosition(this.viewportScrollOffset, this.viewportScrollMax, this.trackMax);
        rxjs__WEBPACK_IMPORTED_MODULE_8__["animationFrameScheduler"].schedule(() => this.updateStyles(this.handleDirection(position, this.trackMax), size));
      }
      /**
       * Stream that emits the 'scrollTo' position when a scrollbar thumb element is dragged
       * This function is called by thumb drag event using viewport or scrollbar pointer events
       */


      dragged(event) {
        let trackMaxStart;
        let scrollMaxStart;
        const dragStart = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(event).pipe(preventSelection(this.document), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => {
          // Capture scrollMax and trackMax once
          trackMaxStart = this.trackMax;
          scrollMaxStart = this.viewportScrollMax;
          this.setDragging(true);
        }));
        const dragging = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.document, 'mousemove', {
          capture: true,
          passive: true
        }).pipe(stopPropagation());
        const dragEnd = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.document, 'mouseup', {
          capture: true
        }).pipe(stopPropagation(), enableSelection(this.document), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => this.setDragging(false)));
        return dragStart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pluck"])(this.pageProperty), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(pageOffset => pageOffset - this.dragStartOffset), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(mouseDownOffset => dragging.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pluck"])(this.clientProperty), // Calculate how far the pointer is from the top/left of the scrollbar (minus the dragOffset).
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(mouseOffset => mouseOffset - this.track.offset), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(offset => scrollMaxStart * (offset - mouseDownOffset) / trackMaxStart), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(position => this.handleDrag(position, scrollMaxStart)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(position => this.scrollTo(position)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(dragEnd))));
      }

    }

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TrackAdapter)], ThumbAdapter.prototype, "track", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ThumbAdapter.prototype, "dragging", void 0);
    /**
     * Calculate scrollbar thumb size
     */

    function calculateThumbSize(trackSize, contentSize, minThumbSize) {
      const scrollbarRatio = trackSize / contentSize;
      const thumbSize = scrollbarRatio * trackSize;
      return Math.max(~~thumbSize, minThumbSize);
    }
    /**
     * Calculate scrollbar thumb position
     */


    function calculateThumbPosition(scrollPosition, scrollMax, trackMax) {
      return scrollPosition * trackMax / scrollMax;
    }

    let ThumbXDirective = class ThumbXDirective extends ThumbAdapter {
      constructor(cmp, element, document, dir) {
        super(cmp, element.nativeElement, document);
        this.cmp = cmp;
        this.element = element;
        this.document = document;
        this.dir = dir;
      }

      get clientProperty() {
        return 'clientX';
      }

      get pageProperty() {
        return 'pageX';
      }

      get viewportScrollSize() {
        return this.cmp.viewport.scrollWidth;
      }

      get viewportScrollOffset() {
        return this.cmp.viewport.scrollLeft;
      }

      get viewportScrollMax() {
        return this.cmp.viewport.scrollMaxX;
      }

      get dragStartOffset() {
        return this.clientRect.left;
      }

      get size() {
        return this.thumbElement.clientWidth;
      }

      updateStyles(position, size) {
        this.thumbElement.style.width = "".concat(size, "px");
        this.thumbElement.style.transform = "translate3d(".concat(position, "px, 0, 0)");
      }

      handleDrag(position, scrollMax) {
        if (this.dir.value === 'rtl') {
          if (this.cmp.manager.rtlScrollAxisType === 1
          /* NEGATED */
          ) {
              return position - scrollMax;
            }

          if (this.cmp.manager.rtlScrollAxisType === 2
          /* INVERTED */
          ) {
              return scrollMax - position;
            } // Keeping this as a memo
          // if (this.rtlScrollAxisType === RtlScrollAxisType.NORMAL) {
          //   return position;
          // }

        }

        return position;
      }

      handleDirection(position, trackMax) {
        if (this.dir.value === 'rtl') {
          if (this.cmp.manager.rtlScrollAxisType === 2
          /* INVERTED */
          ) {
              return -position;
            }

          if (this.cmp.manager.rtlScrollAxisType === 0
          /* NORMAL */
          ) {
              return position - trackMax;
            } // Keeping this as a memo
          // if (this.rtlScrollAxisType === RtlScrollAxisType.NEGATED) {
          //   return position;
          // }

        }

        return position;
      }

      setDragging(value) {
        this.cmp.setDragging({
          horizontalDragging: value
        });
      }

      scrollTo(position) {
        this.cmp.viewport.scrollXTo(position);
      }

    };

    ThumbXDirective.ctorParameters = () => [{
      type: NgScrollbar
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
    }];

    ThumbXDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[scrollbarThumbX]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgScrollbar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]])], ThumbXDirective);
    let ThumbYDirective = class ThumbYDirective extends ThumbAdapter {
      constructor(cmp, element, document) {
        super(cmp, element.nativeElement, document);
        this.cmp = cmp;
        this.element = element;
        this.document = document;
      }

      get pageProperty() {
        return 'pageY';
      }

      get viewportScrollSize() {
        return this.cmp.viewport.scrollHeight;
      }

      get viewportScrollOffset() {
        return this.cmp.viewport.scrollTop;
      }

      get viewportScrollMax() {
        return this.cmp.viewport.scrollMaxY;
      }

      get clientProperty() {
        return 'clientY';
      }

      get dragStartOffset() {
        return this.clientRect.top;
      }

      get size() {
        return this.thumbElement.clientHeight;
      }

      updateStyles(position, size) {
        this.thumbElement.style.height = "".concat(size, "px");
        this.thumbElement.style.transform = "translate3d(0px, ".concat(position, "px, 0)");
      }

      handleDrag(position) {
        return position;
      }

      handleDirection(position) {
        return position;
      }

      setDragging(value) {
        this.cmp.setDragging({
          verticalDragging: value
        });
      }

      scrollTo(position) {
        this.cmp.viewport.scrollYTo(position);
      }

    };

    ThumbYDirective.ctorParameters = () => [{
      type: NgScrollbar
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];

    ThumbYDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[scrollbarThumbY]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgScrollbar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])], ThumbYDirective);
    let TrackXDirective = class TrackXDirective extends TrackAdapter {
      constructor(cmp, trackElement, document) {
        super(cmp, trackElement.nativeElement, document);
        this.cmp = cmp;
        this.document = document;
      }

      get pageProperty() {
        return 'pageX';
      }

      get offset() {
        return this.clientRect.left;
      }

      get size() {
        return this.trackElement.clientWidth;
      }

      mapToScrollToOption(value) {
        return {
          left: value
        };
      }

    };

    TrackXDirective.ctorParameters = () => [{
      type: NgScrollbar
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];

    TrackXDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[scrollbarTrackX]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgScrollbar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])], TrackXDirective);
    let TrackYDirective = class TrackYDirective extends TrackAdapter {
      constructor(cmp, trackElement, document) {
        super(cmp, trackElement.nativeElement, document);
        this.cmp = cmp;
        this.document = document;
      }

      get pageProperty() {
        return 'pageY';
      }

      get offset() {
        return this.clientRect.top;
      }

      get size() {
        return this.trackElement.clientHeight;
      }

      mapToScrollToOption(value) {
        return {
          top: value
        };
      }

    };

    TrackYDirective.ctorParameters = () => [{
      type: NgScrollbar
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];

    TrackYDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[scrollbarTrackY]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgScrollbar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])], TrackYDirective);

    class Scrollbar {
      constructor(cmp, platform, document, zone) {
        this.cmp = cmp;
        this.platform = platform;
        this.document = document;
        this.zone = zone; // Stream that emits to unsubscribe from all streams

        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
      }
      /**
       * Activate scrollbar pointer events
       */


      activatePointerEvents() {
        // Stream that emits when scrollbar thumb is dragged
        let thumbDragEvent = rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]; // Stream that emits when scrollbar track is clicked

        let trackClickEvent = rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]; // Stream that emits when scrollbar track is hovered

        let trackHoveredEvent = rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]; // Set the method used for the pointer events option

        if (this.cmp.pointerEventsMethod === 'viewport') {
          // Pointer events using the viewport
          this.viewportTrackClicked = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.viewportThumbClicked = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"](); // Activate the pointer events of the viewport directive

          this.cmp.viewport.activatePointerEvents(this.cmp.viewportPropagateMouseMove, this.destroyed); // Set streams

          thumbDragEvent = this.viewportThumbClicked;
          trackClickEvent = this.viewportTrackClicked;
          trackHoveredEvent = this.cmp.viewport.hovered.pipe( // Check if track is hovered
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(e => isWithinBounds(e, this.track.clientRect)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), // Enable / disable text selection
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(hovered => this.document.onselectstart = hovered ? () => false : null));
          this.cmp.viewport.clicked.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(e => {
            if (e) {
              if (isWithinBounds(e, this.thumb.clientRect)) {
                this.viewportThumbClicked.next(e);
              } else if (isWithinBounds(e, this.track.clientRect)) {
                this.cmp.setClicked(true);
                this.viewportTrackClicked.next(e);
              }
            } else {
              this.cmp.setClicked(false);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed)).subscribe();
        } else {
          // Pointer events method is using 'scrollbar'
          thumbDragEvent = this.thumb.clicked;
          trackClickEvent = this.track.clicked;
          trackHoveredEvent = this.track.hovered;
        }

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])( // Activate scrollbar hovered event
        trackHoveredEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(e => this.setHovered(e))), // Activate scrollbar thumb drag event
        thumbDragEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(e => this.thumb.dragged(e))), // Activate scrollbar track click event
        trackClickEvent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(e => this.track.onTrackClicked(e, this.thumb.size, this.viewportScrollSize))));
      }

      ngOnInit() {
        this.zone.runOutsideAngular(() => {
          // Activate pointer events on Desktop only
          if (!(this.platform.IOS || this.platform.ANDROID) && !this.cmp.pointerEventsDisabled) {
            this.activatePointerEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed)).subscribe();
          } // Stream that emits when host component is updated


          const updated = this.cmp.updated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => this.onUpdated())); // Update scrollbar thumb when viewport is scrolled and when scrollbar component is updated

          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.cmp.scrolled, updated).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => this.thumb.update()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed)).subscribe(); // Initialize scrollbar

          rxjs__WEBPACK_IMPORTED_MODULE_8__["asyncScheduler"].schedule(() => this.thumb.update(), 100);
        });
      }

      ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete(); // Clean up viewport streams if used

        if (this.viewportThumbClicked && this.viewportTrackClicked) {
          this.viewportTrackClicked.complete();
          this.viewportThumbClicked.complete();
        }
      }

    }

    let ScrollbarY = class ScrollbarY extends Scrollbar {
      constructor(cmp, platform, document, zone) {
        super(cmp, platform, document, zone);
        this.cmp = cmp;
        this.platform = platform;
        this.document = document;
        this.zone = zone;
      }

      get viewportScrollSize() {
        return this.cmp.viewport.scrollHeight;
      }

      setHovered(value) {
        this.cmp.setHovered({
          verticalHovered: value
        });
      }

      onUpdated() {}

    };

    ScrollbarY.ctorParameters = () => [{
      type: NgScrollbar
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }];

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TrackYDirective, {
      static: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TrackYDirective)], ScrollbarY.prototype, "track", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ThumbYDirective, {
      static: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ThumbYDirective)], ScrollbarY.prototype, "thumb", void 0);
    ScrollbarY = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'scrollbar-y',
      host: {
        '[class.scrollbar-control]': 'true'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: "\n    <div scrollbarTrackY class=\"ng-scrollbar-track {{cmp.trackClass}}\">\n      <div scrollbarThumbY [track]=\"track\" class=\"ng-scrollbar-thumb {{cmp.thumbClass}}\"></div>\n    </div>\n  ",
      styles: ["::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control{width:var(--vertical-scrollbar-total-size)}::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track{width:var(--vertical-scrollbar-size);height:calc(100% - var(--scrollbar-padding) * 2)}::ng-deep .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{height:0;width:100%}::ng-deep .ng-scrollbar-wrapper[verticalDragging=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb,::ng-deep .ng-scrollbar-wrapper[verticalHovered=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}::ng-deep .ng-scrollbar-wrapper[deactivated=false]>scrollbar-y.scrollbar-control{top:0;bottom:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr]>scrollbar-y.scrollbar-control{right:0;left:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertAll]>scrollbar-y.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertY]>scrollbar-y.scrollbar-control{left:0;right:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl]>scrollbar-y.scrollbar-control{left:0;right:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertAll]>scrollbar-y.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertY]>scrollbar-y.scrollbar-control{left:unset;right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all]>scrollbar-y.scrollbar-control[fit=true]{bottom:var(--scrollbar-total-size);top:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertAll]>scrollbar-y.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertX]>scrollbar-y.scrollbar-control[fit=true]{top:var(--scrollbar-total-size);bottom:0}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgScrollbar, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], ScrollbarY);
    let ScrollbarX = class ScrollbarX extends Scrollbar {
      constructor(el, cmp, platform, document, zone) {
        super(cmp, platform, document, zone);
        this.el = el;
        this.cmp = cmp;
        this.platform = platform;
        this.document = document;
        this.zone = zone;
      }

      get viewportScrollSize() {
        return this.cmp.viewport.scrollWidth;
      }

      get thickness() {
        return this.el.nativeElement.clientHeight;
      }

      setHovered(value) {
        this.cmp.setHovered({
          horizontalHovered: value
        });
      }

      onUpdated() {
        // Auto-height: Set root component height to content height
        this.cmp.nativeElement.style.height = this.cmp.appearance === 'standard' ? "".concat(this.cmp.viewport.contentHeight + this.thickness, "px") : "".concat(this.cmp.viewport.contentHeight, "px");
      }

    };

    ScrollbarX.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    }, {
      type: NgScrollbar
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }];

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(TrackXDirective, {
      static: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", TrackXDirective)], ScrollbarX.prototype, "track", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ThumbXDirective, {
      static: true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ThumbXDirective)], ScrollbarX.prototype, "thumb", void 0);
    ScrollbarX = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'scrollbar-x',
      host: {
        '[class.scrollbar-control]': 'true'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: "\n    <div scrollbarTrackX class=\"ng-scrollbar-track {{cmp.trackClass}}\">\n      <div scrollbarThumbX [track]=\"track\" class=\"ng-scrollbar-thumb {{cmp.thumbClass}}\"></div>\n    </div>\n  ",
      styles: ["::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control{height:var(--horizontal-scrollbar-total-size)}::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track{height:var(--horizontal-scrollbar-size);width:calc(100% - var(--scrollbar-padding) * 2)}::ng-deep .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{width:0;height:100%}::ng-deep .ng-scrollbar-wrapper[horizontalDragging=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb,::ng-deep .ng-scrollbar-wrapper[horizontalHovered=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}::ng-deep .ng-scrollbar-wrapper[position=invertAll]>scrollbar-x.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[position=invertX]>scrollbar-x.scrollbar-control{top:0;bottom:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false]>scrollbar-x.scrollbar-control{left:0;right:0;bottom:0;top:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][position=invertAll]>scrollbar-x.scrollbar-control,::ng-deep .ng-scrollbar-wrapper[deactivated=false][position=invertX]>scrollbar-x.scrollbar-control{top:0;bottom:unset}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertAll]>scrollbar-x.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertY]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertAll]>scrollbar-x.scrollbar-control[fit=true],::ng-deep .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertY]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], NgScrollbar, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], ScrollbarX);
    var NgScrollbarModule_1;
    let NgScrollbarModule = NgScrollbarModule_1 = class NgScrollbarModule {
      static withConfig(options) {
        return {
          ngModule: NgScrollbarModule_1,
          providers: [{
            provide: NG_SCROLLBAR_OPTIONS,
            useValue: options
          }]
        };
      }

    };
    NgScrollbarModule = NgScrollbarModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__["SmoothScrollModule"]],
      declarations: [NgScrollbar, ScrollViewport, HideNativeScrollbar, NgAttr, ResizeSensor, ThumbYDirective, ThumbXDirective, TrackXDirective, TrackYDirective, ScrollbarY, ScrollbarX],
      exports: [NgScrollbar, ScrollViewport]
    })], NgScrollbarModule);
    /*
     * Public API Surface of ngx-scrollbar
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-scrollbar.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-scrollbar/ngx-scrollbar.ngfactory.js":
  /*!***************************************************************!*\
    !*** ./node_modules/ngx-scrollbar/ngx-scrollbar.ngfactory.js ***!
    \***************************************************************/

  /*! exports provided: NgScrollbarModuleNgFactory, RenderType_NgScrollbar, View_NgScrollbar_0, View_NgScrollbar_Host_0, NgScrollbarNgFactory, RenderType_ɵl, View_ɵl_0, View_ɵl_Host_0, ɵlNgFactory, RenderType_ɵm, View_ɵm_0, View_ɵm_Host_0, ɵmNgFactory */

  /***/
  function node_modulesNgxScrollbarNgxScrollbarNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgScrollbarModuleNgFactory", function () {
      return NgScrollbarModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_NgScrollbar", function () {
      return RenderType_NgScrollbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_NgScrollbar_0", function () {
      return View_NgScrollbar_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_NgScrollbar_Host_0", function () {
      return View_NgScrollbar_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgScrollbarNgFactory", function () {
      return NgScrollbarNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ɵl", function () {
      return RenderType_ɵl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ɵl_0", function () {
      return View_ɵl_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ɵl_Host_0", function () {
      return View_ɵl_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵlNgFactory", function () {
      return ɵlNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ɵm", function () {
      return RenderType_ɵm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ɵm_0", function () {
      return View_ɵm_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ɵm_Host_0", function () {
      return View_ɵm_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵmNgFactory", function () {
      return ɵmNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-scrollbar */
    "./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-scrollbar/smooth-scroll */
    "./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar-smooth-scroll.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var NgScrollbarModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbarModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__["SmoothScrollModule"], ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__["SmoothScrollModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbarModule"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbarModule"], [])]);
    });

    var styles_NgScrollbar = [".ng-scrollbar-measure{left:0;overflow:scroll;position:fixed;top:-9999px;scrollbar-width:none;-ms-overflow-style:none}  .ng-scrollbar-measure::-webkit-scrollbar{display:none}[_nghost-%COMP%]{--scrollbar-border-radius:7px;--scrollbar-padding:4px;--scrollbar-track-color:transparent;--scrollbar-thumb-color:rgba(0, 0, 0, 0.2);--scrollbar-thumb-hover-color:var(--scrollbar-thumb-color);--scrollbar-size:5px;--scrollbar-hover-size:var(--scrollbar-size);--scrollbar-thumb-transition:height ease-out 150ms,width ease-out 150ms;--scrollbar-track-transition:height ease-out 150ms,width ease-out 150ms;display:block;position:relative;height:100%;max-height:100%;max-width:100%}[_nghost-%COMP%] > .ng-scrollbar-wrapper[_ngcontent-%COMP%]{--scrollbar-total-size:calc(var(--scrollbar-size) + var(--scrollbar-padding) * 2);--vertical-scrollbar-size:var(--scrollbar-size);--horizontal-scrollbar-size:var(--scrollbar-size);--vertical-scrollbar-total-size:calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);--horizontal-scrollbar-total-size:calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalDragging=true][_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalHovered=true][_ngcontent-%COMP%]{--vertical-scrollbar-size:var(--scrollbar-hover-size);--vertical-scrollbar-total-size:calc(var(--vertical-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}[_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalDragging=true][_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalHovered=true][_ngcontent-%COMP%]{--horizontal-scrollbar-size:var(--scrollbar-hover-size);--horizontal-scrollbar-total-size:calc(var(--horizontal-scrollbar-size) + var(--scrollbar-padding) * 2);cursor:default}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:0;right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:var(--scrollbar-total-size);right:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:var(--scrollbar-total-size);right:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=ltr][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]{padding-left:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{left:0;right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertAll][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][verticalUsed=true][position=invertY][dir=rtl][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]{padding-right:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{top:0;bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]{padding-bottom:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=scrollbar][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{top:var(--scrollbar-total-size);bottom:0}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertAll][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][appearance=standard][horizontalUsed=true][position=invertX][pointerEventsMethod=viewport][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]{padding-top:var(--scrollbar-total-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport::-webkit-scrollbar, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-native-scrollbar-hider, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%]{bottom:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-native-scrollbar-hider, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%]{left:0;right:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-native-scrollbar-hider, [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][verticalUsed=true][dir=rtl][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-native-scrollbar-hider[_ngcontent-%COMP%]{right:0;left:var(--native-scrollbar-size)}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%] > .scrollbar-control[_ngcontent-%COMP%]{opacity:0;transition-property:opacity;transition-duration:.4s;transition-delay:.8s}[_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:active > .scrollbar-control[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:focus > .scrollbar-control[_ngcontent-%COMP%], [_nghost-%COMP%] > .ng-scrollbar-wrapper[deactivated=false][visibility=hover][_ngcontent-%COMP%]:hover > .scrollbar-control[_ngcontent-%COMP%]{opacity:1;transition-duration:.4s;transition-delay:0s}[_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]{overflow-x:auto;overflow-y:hidden}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden}[_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] >  .ng-scroll-viewport, [_nghost-%COMP%] > .ng-scrollbar-wrapper[verticalUsed=true][horizontalUsed=true][_ngcontent-%COMP%] > .ng-scroll-viewport-wrapper[_ngcontent-%COMP%] > .ng-scroll-viewport[_ngcontent-%COMP%]{overflow:auto}.ng-scroll-viewport-wrapper[_ngcontent-%COMP%]{overflow:hidden}.ng-scroll-viewport[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch;contain:strict;will-change:scroll-position}  .ng-scroll-content{position:relative!important;display:inline-block;min-width:100%}.ng-scroll-layer[_ngcontent-%COMP%], .ng-scroll-viewport-wrapper[_ngcontent-%COMP%], .ng-scrollbar-wrapper[_ngcontent-%COMP%],   .ng-scroll-viewport{position:absolute;left:0;right:0;top:0;bottom:0}", ".ng-scrollbar-wrapper[pointerEventsMethod=viewport]>.scrollbar-control{pointer-events:none}  .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>*>*> .ng-scroll-viewport,   .ng-scrollbar-wrapper[horizontalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>*>*> .ng-scroll-viewport,   .ng-scrollbar-wrapper[scrollbarClicked=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport,   .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>*>*> .ng-scroll-viewport,   .ng-scrollbar-wrapper[verticalDragging=true]>.ng-scroll-viewport-wrapper>.ng-scroll-viewport{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}  .ng-scrollbar-wrapper>.scrollbar-control{position:absolute;display:flex;justify-content:center;align-items:center;transition:var(--scrollbar-track-transition)}  .ng-scrollbar-wrapper>.scrollbar-control[scrollable=false] .ng-scrollbar-thumb{display:none}  .ng-scrollbar-track{height:100%;width:100%;z-index:1;border-radius:var(--scrollbar-border-radius);background-color:var(--scrollbar-track-color);overflow:hidden;transition:var(--scrollbar-track-transition);cursor:default}  .ng-scrollbar-thumb{box-sizing:border-box;position:relative;border-radius:inherit;background-color:var(--scrollbar-thumb-color);transform:translateZ(0);transition:var(--scrollbar-thumb-transition)}"];

    var RenderType_NgScrollbar = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_NgScrollbar,
      data: {}
    });

    function View_NgScrollbar_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "scrollbar-x", [], [[1, "scrollable", 0], [1, "fit", 0], [2, "scrollbar-control", null]], null, null, View_ɵm_0, RenderType_ɵm)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵm"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.state.isHorizontallyScrollable;
        var currVal_1 = _co.state.verticalUsed;
        var currVal_2 = true;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_NgScrollbar_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "scrollbar-y", [], [[1, "scrollable", 0], [1, "fit", 0], [2, "scrollbar-control", null]], null, null, View_ɵl_0, RenderType_ɵl)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵl"], [ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.state.isVerticallyScrollable;
        var currVal_1 = _co.state.horizontalUsed;
        var currVal_2 = true;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_NgScrollbar_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NgScrollbar_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NgScrollbar_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.state.horizontalUsed;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.state.verticalUsed;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_NgScrollbar_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
        defaultViewPort: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 10, "div", [["class", "ng-scrollbar-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵc"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        ngAttr: [0, "ngAttr"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 6, "div", [["class", "ng-scroll-viewport-wrapper"]], null, [[null, "resizeSensor"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("resizeSensor" === en) {
          var pd_0 = _co.update() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 1196032, null, 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵd"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"]], {
        debounce: [0, "debounce"],
        disabled: [1, "disabled"]
      }, {
        resizeSensor: "resizeSensor"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 4, "div", [["hideNativeScrollbar", ""], ["scrollViewport", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, [[1, 4]], 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ScrollViewport"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 147456, null, 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵb"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NgScrollbar_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.state;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.sensorDebounce;
        var currVal_2 = _co.sensorDisabled;

        _ck(_v, 4, 0, currVal_1, currVal_2);

        var currVal_3 = !_co.disabled;

        _ck(_v, 11, 0, currVal_3);
      }, null);
    }

    function View_NgScrollbar_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "ng-scrollbar", [], [[2, "ng-scrollbar", null]], null, null, View_NgScrollbar_0, RenderType_NgScrollbar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 8634368, null, 1, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], ngx_scrollbar_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__["SmoothScrollManager"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ScrollbarManager"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 1, {
        customViewPort: 0
      })], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = true;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var NgScrollbarNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-scrollbar", ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], View_NgScrollbar_Host_0, {
      disabled: "disabled",
      sensorDisabled: "sensorDisabled",
      pointerEventsDisabled: "pointerEventsDisabled",
      viewportPropagateMouseMove: "viewportPropagateMouseMove",
      viewClass: "viewClass",
      trackClass: "trackClass",
      thumbClass: "thumbClass",
      minThumbSize: "minThumbSize",
      trackClickScrollDuration: "trackClickScrollDuration",
      pointerEventsMethod: "pointerEventsMethod",
      track: "track",
      visibility: "visibility",
      appearance: "appearance",
      position: "position",
      sensorDebounce: "sensorDebounce",
      scrollAuditTime: "scrollAuditTime"
    }, {
      updated: "updated"
    }, ["*"]);

    var styles_ɵl = [".ng-scrollbar-wrapper>scrollbar-y.scrollbar-control{width:var(--vertical-scrollbar-total-size)}  .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track{width:var(--vertical-scrollbar-size);height:calc(100% - var(--scrollbar-padding) * 2)}  .ng-scrollbar-wrapper>scrollbar-y.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{height:0;width:100%}  .ng-scrollbar-wrapper[verticalDragging=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb,   .ng-scrollbar-wrapper[verticalHovered=true]>scrollbar-y.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}  .ng-scrollbar-wrapper[deactivated=false]>scrollbar-y.scrollbar-control{top:0;bottom:0}  .ng-scrollbar-wrapper[deactivated=false][dir=ltr]>scrollbar-y.scrollbar-control{right:0;left:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertAll]>scrollbar-y.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][dir=ltr][position=invertY]>scrollbar-y.scrollbar-control{left:0;right:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=rtl]>scrollbar-y.scrollbar-control{left:0;right:unset}  .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertAll]>scrollbar-y.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][dir=rtl][position=invertY]>scrollbar-y.scrollbar-control{left:unset;right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all]>scrollbar-y.scrollbar-control[fit=true]{bottom:var(--scrollbar-total-size);top:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertAll]>scrollbar-y.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][position=invertX]>scrollbar-y.scrollbar-control[fit=true]{top:var(--scrollbar-total-size);bottom:0}"];

    var RenderType_ɵl = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ɵl,
      data: {}
    });

    function View_ɵl_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
        track: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, {
        thumb: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "div", [["scrollbarTrackY", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, [[1, 4]], 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵj"], [ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [["scrollbarThumbY", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[2, 4]], 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵg"], [ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], {
        track: [0, "track"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.track;

        _ck(_v, 5, 0, currVal_2);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "ng-scrollbar-track ", _co.cmp.trackClass, "");

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "ng-scrollbar-thumb ", _co.cmp.thumbClass, "");

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_ɵl_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "scrollbar-y", [], [[2, "scrollbar-control", null]], null, null, View_ɵl_0, RenderType_ɵl)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵl"], [ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = true;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var ɵlNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("scrollbar-y", ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵl"], View_ɵl_Host_0, {}, {}, []);

    var styles_ɵm = [".ng-scrollbar-wrapper>scrollbar-x.scrollbar-control{height:var(--horizontal-scrollbar-total-size)}  .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track{height:var(--horizontal-scrollbar-size);width:calc(100% - var(--scrollbar-padding) * 2)}  .ng-scrollbar-wrapper>scrollbar-x.scrollbar-control>.ng-scrollbar-track>.ng-scrollbar-thumb{width:0;height:100%}  .ng-scrollbar-wrapper[horizontalDragging=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb,   .ng-scrollbar-wrapper[horizontalHovered=true]>scrollbar-x.scrollbar-control .ng-scrollbar-thumb{background-color:var(--scrollbar-thumb-hover-color)}  .ng-scrollbar-wrapper[position=invertAll]>scrollbar-x.scrollbar-control,   .ng-scrollbar-wrapper[position=invertX]>scrollbar-x.scrollbar-control{top:0;bottom:unset}  .ng-scrollbar-wrapper[deactivated=false]>scrollbar-x.scrollbar-control{left:0;right:0;bottom:0;top:unset}  .ng-scrollbar-wrapper[deactivated=false][position=invertAll]>scrollbar-x.scrollbar-control,   .ng-scrollbar-wrapper[deactivated=false][position=invertX]>scrollbar-x.scrollbar-control{top:0;bottom:unset}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertAll]>scrollbar-x.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][dir=ltr][position=invertY]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl]>scrollbar-x.scrollbar-control[fit=true]{left:var(--scrollbar-total-size);right:0}  .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertAll]>scrollbar-x.scrollbar-control[fit=true],   .ng-scrollbar-wrapper[deactivated=false][track=all][dir=rtl][position=invertY]>scrollbar-x.scrollbar-control[fit=true]{right:var(--scrollbar-total-size);left:0}"];

    var RenderType_ɵm = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ɵm,
      data: {}
    });

    function View_ɵm_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, {
        track: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, {
        thumb: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "div", [["scrollbarTrackX", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, [[1, 4]], 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵi"], [ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "div", [["scrollbarThumbX", ""]], [[8, "className", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, [[2, 4]], 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵf"], [ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]], {
        track: [0, "track"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.track;

        _ck(_v, 5, 0, currVal_2);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "ng-scrollbar-track ", _co.cmp.trackClass, "");

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "ng-scrollbar-thumb ", _co.cmp.thumbClass, "");

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_ɵm_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "scrollbar-x", [], [[2, "scrollbar-control", null]], null, null, View_ɵm_0, RenderType_ɵm)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 245760, null, 0, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵm"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["NgScrollbar"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = true;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var ɵmNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("scrollbar-x", ngx_scrollbar__WEBPACK_IMPORTED_MODULE_1__["ɵm"], View_ɵm_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/common-blocks/progress-bar/progress-bar.component.ngfactory.js":
  /*!********************************************************************************!*\
    !*** ./src/app/common-blocks/progress-bar/progress-bar.component.ngfactory.js ***!
    \********************************************************************************/

  /*! exports provided: RenderType_ProgressBarComponent, View_ProgressBarComponent_0, View_ProgressBarComponent_Host_0, ProgressBarComponentNgFactory */

  /***/
  function srcAppCommonBlocksProgressBarProgressBarComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ProgressBarComponent", function () {
      return RenderType_ProgressBarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProgressBarComponent_0", function () {
      return View_ProgressBarComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProgressBarComponent_Host_0", function () {
      return View_ProgressBarComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponentNgFactory", function () {
      return ProgressBarComponentNgFactory;
    });
    /* harmony import */


    var _progress_bar_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./progress-bar.component.sass.shim.ngstyle */
    "./src/app/common-blocks/progress-bar/progress-bar.component.sass.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./progress-bar.component */
    "./src/app/common-blocks/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _services_resource_loads_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/resource-loads.service */
    "./src/app/services/resource-loads.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ProgressBarComponent = [_progress_bar_component_sass_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ProgressBarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ProgressBarComponent,
      data: {}
    });

    function View_ProgressBarComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "progress-difficulty-point"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
        "left.%": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "progress-difficulty-img-wrapper"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](8, {
        "left.%": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "img", [["class", "progress-difficulty-img"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) {
        var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit.Position);

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _ck(_v, 8, 0, _v.context.$implicit.Position);

        _ck(_v, 7, 0, currVal_1);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _co.resourceLoadsService.getDifficultyImage(_v.context.$implicit.Difficulty);

        _ck(_v, 9, 0, currVal_2);
      });
    }

    function View_ProgressBarComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProgressBarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.difficulty;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_ProgressBarComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        wrapper: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
        canvas: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, [[1, 0], ["wrapper", 1]], null, 3, "div", [["class", "progress-bar-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, [[2, 0], ["canvas", 1]], null, 0, "canvas", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProgressBarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.difficulty;

        _ck(_v, 5, 0, currVal_0);
      }, null);
    }

    function View_ProgressBarComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-progress-bar", [], null, null, null, View_ProgressBarComponent_0, RenderType_ProgressBarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 0, _progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"], [_services_resource_loads_service__WEBPACK_IMPORTED_MODULE_4__["ResourceLoadsService"]], null, null)], null, null);
    }

    var ProgressBarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-progress-bar", _progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"], View_ProgressBarComponent_Host_0, {
      isGreen: "isGreen",
      value: "value",
      difficulty: "difficulty"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/common-blocks/progress-bar/progress-bar.component.sass.shim.ngstyle.js":
  /*!****************************************************************************************!*\
    !*** ./src/app/common-blocks/progress-bar/progress-bar.component.sass.shim.ngstyle.js ***!
    \****************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppCommonBlocksProgressBarProgressBarComponentSassShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.progress-bar-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.progress-difficulty-point[_ngcontent-%COMP%] {\n  background: #989898;\n  border: 0.2vw solid #0e040b;\n  border-radius: 1vh;\n  width: 0.7vw;\n  min-width: 10px;\n  height: 160%;\n  position: absolute;\n  -webkit-transform: translate(-55%, -100%);\n          transform: translate(-55%, -100%);\n  z-index: 2;\n}\n\n.progress-difficulty-img-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 4vw;\n  max-width: 4vw;\n  height: 170%;\n  position: absolute;\n  top: 155%;\n  -webkit-transform: translateX(-55%);\n          transform: translateX(-55%);\n  z-index: 3;\n}\n\n.progress-difficulty-img[_ngcontent-%COMP%] {\n  height: 100%;\n}"];
    /***/
  },

  /***/
  "./src/app/common-blocks/progress-bar/progress-bar.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/common-blocks/progress-bar/progress-bar.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ProgressBarComponent */

  /***/
  function srcAppCommonBlocksProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
      return ProgressBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    class ProgressBarComponent {
      constructor(resourceLoadsService) {
        this.resourceLoadsService = resourceLoadsService;
      }

      ngAfterViewInit() {
        const wrapperWidth = this.wrapper.nativeElement.getBoundingClientRect().width;
        const wrapperHeight = this.wrapper.nativeElement.clientHeight;
        const canvas = this.canvas.nativeElement;
        const ctx = canvas.getContext('2d');
        canvas.height = wrapperHeight;
        canvas.width = wrapperWidth;
        const progress = Math.floor(wrapperWidth / 100 * 90 / 100 * this.value);
        const options = {
          width: canvas.width / 100 * 90,
          borders: {
            borderOne: wrapperHeight / 100 * 95,
            borderTwo: wrapperHeight / 100 * 53,
            borderThree: wrapperHeight / 100 * 34,
            borderOnProgress: wrapperHeight / 100 * 55,
            progress: wrapperHeight / 100 * 29
          },
          moveTo: {
            x: wrapperHeight / 100 * 52,
            y: wrapperHeight / 100 * 50
          }
        };

        const line = (width, borderHeight, color) => {
          if (width < 12) {
            return;
          }

          ctx.beginPath();
          ctx.moveTo(options.moveTo.x, options.moveTo.y);
          ctx.lineTo(width, options.moveTo.y);
          ctx.lineWidth = borderHeight;
          ctx.strokeStyle = color;
          ctx.lineCap = 'round';
          ctx.stroke();
        };

        const getColor = () => {
          const completeColor = {
            border: '#006020',
            mainColor: '#009933'
          };
          const notCompleteColor = {
            border: '#bc9603',
            mainColor: '#fed700'
          };

          if (this.isGreen || this.value >= 100) {
            return completeColor;
          }

          return notCompleteColor;
        };

        const getProgress = value => {
          if (value < 12 && value > 0) {
            return 12;
          }

          return value;
        };

        line(options.width, options.borders.borderOne, '#000');
        line(options.width, options.borders.borderTwo, '#666');
        line(options.width, options.borders.borderThree, '#999');
        let count = 10;

        if (getProgress(progress) > 12) {
          const timer = setInterval(() => {
            line(count, options.borders.borderOnProgress, getColor().border);
            line(count, options.borders.progress, getColor().mainColor);
            count += wrapperWidth / 150;

            if (count >= progress) {
              window.clearInterval(timer);
              ctx.clearRect(0, 0, wrapperWidth, wrapperHeight);
              line(options.width, options.borders.borderOne, '#000');
              line(options.width, options.borders.borderTwo, '#666');
              line(options.width, options.borders.borderThree, '#999');
              line(progress, options.borders.borderOnProgress, getColor().border);
              line(progress, options.borders.progress, getColor().mainColor);
            }
          }, 4);
        } else {
          line(getProgress(progress), options.borders.borderOnProgress, getColor().border);
          line(getProgress(progress), options.borders.progress, getColor().mainColor);
        }
      }

    }
    /***/

  },

  /***/
  "./src/app/shared/scroll-bar.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/scroll-bar.module.ts ***!
    \*********************************************/

  /*! exports provided: ScrollbarModule */

  /***/
  function srcAppSharedScrollBarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollbarModule", function () {
      return ScrollbarModule;
    });

    class ScrollbarModule {}
    /***/

  }
}]);