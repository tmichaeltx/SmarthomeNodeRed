/*  This started from the default, template html for uibuilder that was then stripped down to only the inclusions
    of VueJS & bootstrap-vue and they connecting from/to the Node-RED server.
    Note for those items where it must differ, there are 2 versions of several lines of js.
    1 for when the file is in the root folder for uibuilder and 1 for when it is in a sub folder.

    Noteworthy is that both the html and the js files must be altered in this way. The version not being used is commented out.
*/
'use strict'
/** @see https://github.com/TotallyInformation/node-red-contrib-uibuilder/wiki/Front-End-Library---available-properties-and-methods */
var app1 = new Vue({
    el: '#app',
        /** Load external component files
        *  Make sure there is no leading / in the name
        *  To load from the common folder use like: 'common/component-name.vue' */
    components: {
        'sample-alert-overview': httpVueLoader('../common/samples/sample-alert-overview.vue'),
        'sample-alert-fading': httpVueLoader('../common/samples/sample-alert-fading.vue'),
        'sample-alert-autodismissing': httpVueLoader('../common/samples/sample-alert-autodismissing.vue'),
        'sample-aspect': httpVueLoader('../common/samples/sample-aspect.vue'),
        'sample-avatar-overview': httpVueLoader('../common/samples/sample-avatar-overview.vue'),
        'sample-avatar-actionable-avatars-button': httpVueLoader('../common/samples/sample-avatar-actionable-avatars-button.vue'),
        'sample-breadcrumb-overview': httpVueLoader('../common/samples/sample-breadcrumb-overview.vue'),
        'sample-buttons-pressed-state-and-toggling': httpVueLoader('../common/samples/sample-buttons-pressed-state-and-toggling.vue'),
        'sample-calendar-overview': httpVueLoader('../common/samples/sample-calendar-overview.vue'),
        'sample-calendar-disabled-and-readonly-states': httpVueLoader('../common/samples/sample-calendar-disabled-and-readonly-states.vue'),
        'sample-calendar-minimum-and-maximum-dates': httpVueLoader('../common/samples/sample-calendar-minimum-and-maximum-dates.vue'),
        'sample-calendar-disabling-dates': httpVueLoader('../common/samples/sample-calendar-disabling-dates.vue'),
        'sample-calendar-default-slot': httpVueLoader('../common/samples/sample-calendar-default-slot.vue'),
        'sample-calendar-adding-css-classes': httpVueLoader('../common/samples/sample-calendar-adding-css-classes.vue'),
        'sample-calendar-internationalization': httpVueLoader('../common/samples/sample-calendar-internationalization.vue'),
        'sample-carousel': httpVueLoader('../common/samples/sample-carousel.vue'),
        'sample-collapse-v-model-support': httpVueLoader('../common/samples/sample-collapse-v-model-support.vue'),
        'sample-collapse-accordian-support': httpVueLoader('../common/samples/sample-collapse-accordian-support.vue'),
        'sample-dropdown-supported-sub-components-b-dropdown-form': httpVueLoader('../common/samples/sample-dropdown-supported-sub-components-b-dropdown-form.vue'),
        'sample-form-overview': httpVueLoader('../common/samples/sample-form-overview.vue'),
        'sample-form-feedback-helpers': httpVueLoader('../common/samples/sample-form-feedback-helpers.vue'),
        'sample-form-datalist-helper': httpVueLoader('../common/samples/sample-form-datalist-helper.vue'),
        'sample-form-checkbox': httpVueLoader('../common/samples/sample-form-checkbox.vue'),
        'sample-form-checkbox-multiple': httpVueLoader('../common/samples/sample-form-checkbox-multiple.vue'),
        'sample-form-checkbox-changing-the-option-field-names': httpVueLoader('../common/samples/sample-form-checkbox-changing-the-option-field-names.vue'),
        'sample-form-checkbox-inline-and-stacke-checkboxes': httpVueLoader('../common/samples/sample-form-checkbox-inline-and-stacke-checkboxes.vue'),
        'sample-form-checkbox-individual-checkbox-button-style': httpVueLoader('../common/samples/sample-form-checkbox-individual-checkbox-button-style.vue'),
        'sample-form-checkbox-grouped-button-style-checkboxes': httpVueLoader('../common/samples/sample-form-checkbox-grouped-button-style-checkboxes.vue'),
        'sample-form-checkbox-individual-switch-style': httpVueLoader('../common/samples/sample-form-checkbox-individual-switch-style.vue'),
        'sample-form-checkbox-grouped-switch-style-checkboxes': httpVueLoader('../common/samples/sample-form-checkbox-grouped-switch-style-checkboxes.vue'),
        'sample-form-checkbox-non-custom-check-inputs': httpVueLoader('../common/samples/sample-form-checkbox-non-custom-check-inputs.vue'),
        'sample-form-checkbox-contextual-state-and-validation': httpVueLoader('../common/samples/sample-form-checkbox-contextual-state-and-validation.vue'),
        'sample-form-checkbox-indeterminate-tri-state-support': httpVueLoader('../common/samples/sample-form-checkbox-indeterminate-tri-state-support.vue'),
        'sample-form-checkbox-indeterminate-use-case-example': httpVueLoader('../common/samples/sample-form-checkbox-indeterminate-use-case-example.vue'),
        'sample-form-datepicker-overview': httpVueLoader('../common/samples/sample-form-datepicker-overview.vue'),
        'sample-form-datepicker-disable-and-readonly-states': httpVueLoader('../common/samples/sample-form-datepicker-disable-and-readonly-states.vue'),
        'sample-form-datepicker-date-constraints-minimum-and-maximum-dates': httpVueLoader('../common/samples/sample-form-datepicker-date-constraints-minimum-and-maximum-dates.vue'),
        'sample-form-datepicker-disabling-dates': httpVueLoader('../common/samples/sample-form-datepicker-disabling-dates.vue'),
        'sample-form-datepicker-button-only-mode': httpVueLoader('../common/samples/sample-form-datepicker-button-only-mode.vue'),
        'sample-form-datepicker-full-width-calendar-dropdown': httpVueLoader('../common/samples/sample-form-datepicker-full-width-calendar-dropdown.vue'),
        'sample-form-datepicker-internationalization': httpVueLoader('../common/samples/sample-form-datepicker-internationalization.vue'),
        'sample-form-file-input': httpVueLoader('../common/samples/sample-form-file-input.vue'),
        'sample-form-file-file-name-formatter-function': httpVueLoader('../common/samples/sample-form-file-file-name-formatter-function.vue'),
        'sample-form-file-clearing-the-file-selection': httpVueLoader('../common/samples/sample-form-file-clearing-the-file-selection.vue'),
        'sample-form-group': httpVueLoader('../common/samples/sample-form-group.vue'),
        'sample-form-input-overview': httpVueLoader('../common/samples/sample-form-input-overview.vue'),
        'sample-form-input-input-type': httpVueLoader('../common/samples/sample-form-input-input-type.vue'),
        'sample-form-input-range-type-input': httpVueLoader('../common/samples/sample-form-input-range-type-input.vue'),
        'sample-form-input-contextual-states-live-example': httpVueLoader('../common/samples/sample-form-input-contextual-states-live-example.vue'),
        'sample-form-input-formatter-support': httpVueLoader('../common/samples/sample-form-input-formatter-support.vue'),
        'sample-form-debounce-support': httpVueLoader('../common/samples/sample-form-debounce-support.vue'),
        'sample-form-radio-individual-radios': httpVueLoader('../common/samples/sample-form-radio-individual-radios.vue'),
        'sample-form-radio-grouped-radios': httpVueLoader('../common/samples/sample-form-radio-grouped-radios.vue'),
        'sample-form-radio-mixed-options': httpVueLoader('../common/samples/sample-form-radio-mixed-options.vue'),
        'sample-form-radio-changing-the-option-field-names': httpVueLoader('../common/samples/sample-form-radio-changing-the-option-field-names.vue'),
        'sample-form-radio-inline-or-stacked-radios': httpVueLoader('../common/samples/sample-form-radio-inline-or-stacked-radios.vue'),
        'sample-form-radio-button-style-radios': httpVueLoader('../common/samples/sample-form-radio-button-style-radios.vue'),
        'sample-form-radio-non-custom-style-radio-inputs': httpVueLoader('../common/samples/sample-form-radio-non-custom-style-radio-inputs.vue'),
        'sample-form-radio-contextual-state-with-feedback-example': httpVueLoader('../common/samples/sample-form-radio-contextual-state-with-feedback-example.vue'),
        'sample-form-rating-overview': httpVueLoader('../common/samples/sample-form-rating-overview.vue'),
        'sample-form-rating-readonly': httpVueLoader('../common/samples/sample-form-rating-readonly.vue'),
        'sample-form-rating-styling-variant-and-color': httpVueLoader('../common/samples/sample-form-rating-styling-variant-and-color.vue'),
        'sample-form-rating-styling-variant-and-custom-color': httpVueLoader('../common/samples/sample-form-rating-styling-variant-and-custom-color.vue'),
        'sample-form-rating-styling-number-of-stars': httpVueLoader('../common/samples/sample-form-rating-styling-number-of-stars.vue'),
        'sample-form-rating-styling-show-value': httpVueLoader('../common/samples/sample-form-rating-styling-show-value.vue'),
        'sample-form-rating-styling-control-sizing': httpVueLoader('../common/samples/sample-form-rating-styling-control-sizing.vue'),
        'sample-form-rating-styling-inline-mode': httpVueLoader('../common/samples/sample-form-rating-styling-inline-mode.vue'),
        'sample-form-rating-styling-borderless': httpVueLoader('../common/samples/sample-form-rating-styling-borderless.vue'),
        'sample-form-rating-styling-clear-button': httpVueLoader('../common/samples/sample-form-rating-styling-clear-button.vue'),
        'sample-form-rating-styling-using-in-input-groups': httpVueLoader('../common/samples/sample-form-rating-styling-using-in-input-groups.vue'),
        'sample-form-rating-styling-internationalization': httpVueLoader('../common/samples/sample-form-rating-styling-internationalization.vue'),
        'sample-form-select-overview': httpVueLoader('../common/samples/sample-form-select-overview.vue'),
        'sample-form-select-group-options': httpVueLoader('../common/samples/sample-form-select-group-options.vue'),
        'sample-form-select-manually-provide-options': httpVueLoader('../common/samples/sample-form-select-manually-provide-options.vue'),
        'sample-form-select-options-prop': httpVueLoader('../common/samples/sample-form-select-options-prop.vue'),
        'sample-form-select-changing-the-option-field-names': httpVueLoader('../common/samples/sample-form-select-changing-the-option-field-names.vue'),
        'sample-form-select-value-in-single-mode': httpVueLoader('../common/samples/sample-form-select-value-in-single-mode.vue'),
        'sample-form-select-select-sizing-displayed-rows': httpVueLoader('../common/samples/sample-form-select-select-sizing-displayed-rows.vue'),
        'sample-form-select-select-value-in-multiple-mode': httpVueLoader('../common/samples/sample-form-select-select-value-in-multiple-mode.vue'),
        'sample-form-spinbutton-overview': httpVueLoader('../common/samples/sample-form-spinbutton-overview.vue'),
        'sample-form-spinbutton-min-max-and-step': httpVueLoader('../common/samples/sample-form-spinbutton-min-max-and-step.vue'),
        'sample-form-spinbutton-inline': httpVueLoader('../common/samples/sample-form-spinbutton-inline.vue'),
        'sample-form-spinbutton-verticle': httpVueLoader('../common/samples/sample-form-spinbutton-verticle.vue'),
        'sample-form-spinbutton-number-formatting-and-locale': httpVueLoader('../common/samples/sample-form-spinbutton-number-formatting-and-locale.vue'),
        'sample-form-spinbutton-with-formatter': httpVueLoader('../common/samples/sample-form-spinbutton-with-formatter.vue'),
        'sample-form-spinbutton-disabled-and-readonly-states': httpVueLoader('../common/samples/sample-form-spinbutton-disabled-and-readonly-states.vue'),
        'sample-form-spinbutton-events': httpVueLoader('../common/samples/sample-form-spinbutton-events.vue'),
        'sample-form-tag-basic-usage': httpVueLoader('../common/samples/sample-form-tag-basic-usage.vue'),
        'sample-form-tag-creation-using-separators': httpVueLoader('../common/samples/sample-form-tag-creation-using-separators.vue'),
        'sample-form-tag-last-tag-removal-via-backspace-keypress': httpVueLoader('../common/samples/sample-form-tag-last-tag-removal-via-backspace-keypress.vue'),
        'sample-form-tag-styling-options': httpVueLoader('../common/samples/sample-form-tag-styling-options.vue'),
        'sample-form-tag-validation': httpVueLoader('../common/samples/sample-form-tag-validation.vue'),
        'sample-form-tag-detecting-new-invalid-and-duplicate-tags': httpVueLoader('../common/samples/sample-form-tag-detecting-new-invalid-and-duplicate-tags.vue'),
        'sample-form-tag-using-native-browser-inputs': httpVueLoader('../common/samples/sample-form-tag-using-native-browser-inputs.vue'),
        'sample-form-tag-using-custom-form-components': httpVueLoader('../common/samples/sample-form-tag-using-custom-form-components.vue'),
        'sample-form-tag-pre-defined-set-of-tags': httpVueLoader('../common/samples/sample-form-tag-pre-defined-set-of-tags.vue'),
        'sample-form-tag-advanced-custom-rendering-usage': httpVueLoader('../common/samples/sample-form-tag-advanced-custom-rendering-usage.vue'),
        'sample-form-tag-tagged-input-using-dropdown': httpVueLoader('../common/samples/sample-form-tag-tagged-input-using-dropdown.vue'),
        'sample-form-textarea-overview': httpVueLoader('../common/samples/sample-form-textarea-overview.vue'),
        'sample-form-textarea-contextual-states': httpVueLoader('../common/samples/sample-form-textarea-contextual-states.vue'),
        'sample-form-textarea-formatter-support': httpVueLoader('../common/samples/sample-form-textarea-formatter-support.vue'),
        'sample-form-textarea-readonly-plain-text': httpVueLoader('../common/samples/sample-form-textarea-readonly-plain-text.vue'),
        'sample-form-textarea-debounce-support': httpVueLoader('../common/samples/sample-form-textarea-debounce-support.vue'),
        'sample-form-timepicker-overview': httpVueLoader('../common/samples/sample-form-timepicker-overview.vue'),
        'sample-form-timepicker-disabled-and-readonly-states': httpVueLoader('../common/samples/sample-form-timepicker-disabled-and-readonly-states.vue'),
        'sample-form-timepicker-styling-enabling-seconds-spinbutton': httpVueLoader('../common/samples/sample-form-timepicker-styling-enabling-seconds-spinbutton.vue'),
        'sample-form-timepicker-button-only-mode': httpVueLoader('../common/samples/sample-form-timepicker-button-only-mode.vue'),
        'sample-form-timepicker-internationalization': httpVueLoader('../common/samples/sample-form-timepicker-internationalization.vue'),
        'sample-image-rounded-corners': httpVueLoader('../common/samples/sample-image-rounded-corners.vue'),
        'sample-image-blank-or-solid-color-images': httpVueLoader('../common/samples/sample-image-blank-or-solid-color-images.vue'),
        'sample-image-lazy-load': httpVueLoader('../common/samples/sample-image-lazy-load.vue'),
        'sample-modal-using-v-model-property': httpVueLoader('../common/samples/sample-modal-using-v-model-property.vue'),
        'sample-modal-prevent-closing': httpVueLoader('../common/samples/sample-modal-prevent-closing.vue'),
        'sample-modal-using-show': httpVueLoader('../common/samples/sample-modal-using-show.vue'),
        'sample-modal-variants': httpVueLoader('../common/samples/sample-modal-variants.vue'),
        'sample-modal-ok-message-box': httpVueLoader('../common/samples/sample-modal-ok-message-box.vue'),
        'sample-modal-confirm-message-box': httpVueLoader('../common/samples/sample-modal-confirm-message-box.vue'),
        'sample-modal-message-box-advance-usage': httpVueLoader('../common/samples/sample-modal-message-box-advance-usage.vue'),
        'sample-overlay-overview': httpVueLoader('../common/samples/sample-overlay-overview.vue'),
        'sample-overlay-backdrop-color': httpVueLoader('../common/samples/sample-overlay-backdrop-color.vue'),
        'sample-overlay-corner-rounding': httpVueLoader('../common/samples/sample-overlay-corner-rounding.vue'),
        'sample-overlay-custom-overlay-content': httpVueLoader('../common/samples/sample-overlay-custom-overlay-content.vue'),
        'sample-overlay-non-wrapping-mode': httpVueLoader('../common/samples/sample-overlay-non-wrapping-mode.vue'),
        'sample-overlay-adjusted': httpVueLoader('../common/samples/sample-overlay-adjusted.vue'),
        'sample-overlay-loading-button': httpVueLoader('../common/samples/sample-overlay-loading-button.vue'),
        'sample-overlay-busy-state-input-group': httpVueLoader('../common/samples/sample-overlay-busy-state-input-group.vue'),
        'sample-overlay-form-confirmation-prompt-and-upload-status': httpVueLoader('../common/samples/sample-overlay-form-confirmation-prompt-and-upload-status.vue'),
        'sample-pagination-overview': httpVueLoader('../common/samples/sample-pagination-overview.vue'),
        'sample-pagination-button-content': httpVueLoader('../common/samples/sample-pagination-button-content.vue'),
        'sample-pagination-goto-first-last-button-type': httpVueLoader('../common/samples/sample-pagination-goto-first-last-button-type.vue'),
        'sample-pagination-button-size': httpVueLoader('../common/samples/sample-pagination-button-size.vue'),
        'sample-pagination-pill-style': httpVueLoader('../common/samples/sample-pagination-pill-style.vue'),
        'sample-pagination-alignment': httpVueLoader('../common/samples/sample-pagination-alignment.vue'),
        'sample-pagination-nav-overview': httpVueLoader('../common/samples/sample-pagination-nav-overview.vue'),
        'sample-pagination-nav-page-number-generation': httpVueLoader('../common/samples/sample-pagination-nav-page-number-generation.vue'),
        'sample-pagination-nav-array-of-pages': httpVueLoader('../common/samples/sample-pagination-nav-array-of-pages.vue'),
        'sample-pagination-goto-fist-last-button-type': httpVueLoader('../common/samples/sample-pagination-goto-fist-last-button-type.vue'),
        'sample-popover-component-basic-usage': httpVueLoader('../common/samples/sample-popover-component-basic-usage.vue'),
        'sample-popover-programmatically-show-and-hide-popover': httpVueLoader('../common/samples/sample-popover-programmatically-show-and-hide-popover.vue'),
        'sample-popover-programmatically-show-and-hide-popover-2': httpVueLoader('../common/samples/sample-popover-programmatically-show-and-hide-popover-2.vue'),
        'sample-popover-programmatically-disabling-popover': httpVueLoader('../common/samples/sample-popover-programmatically-disabling-popover.vue'),
        'sample-popover-programmatically-disabling-popover-2': httpVueLoader('../common/samples/sample-popover-programmatically-disabling-popover-2.vue'),
        'sample-popover-reactive-content': httpVueLoader('../common/samples/sample-popover-reactive-content.vue'),
        'sample-progress-overview': httpVueLoader('../common/samples/sample-progress-overview.vue'),
        'sample-progress-labels': httpVueLoader('../common/samples/sample-progress-labels.vue'),
        'sample-progress-custom-progress-label': httpVueLoader('../common/samples/sample-progress-custom-progress-label.vue'),
        'sample-progress-width-and-height': httpVueLoader('../common/samples/sample-progress-width-and-height.vue'),
        'sample-progress-height': httpVueLoader('../common/samples/sample-progress-height.vue'),
        'sample-progress-solid-background-variants': httpVueLoader('../common/samples/sample-progress-solid-background-variants.vue'),
        'sample-progress-striped-backgrounds': httpVueLoader('../common/samples/sample-progress-striped-backgrounds.vue'),
        'sample-progress-animated-backgrounds': httpVueLoader('../common/samples/sample-progress-animated-backgrounds.vue'),
        'sample-progress-multiple-bars': httpVueLoader('../common/samples/sample-progress-multiple-bars.vue'),
        'sample-sidebar-backdrop': httpVueLoader('../common/samples/sample-sidebar-backdrop.vue'),
        'sample-spinner-color-variants': httpVueLoader('../common/samples/sample-spinner-color-variants.vue'),
        'sample-tables': httpVueLoader('../common/samples/sample-tables.vue'),
        'sample-tables-variants-for-table-cells': httpVueLoader('../common/samples/sample-tables-variants-for-table-cells.vue'),
        'sample-tables-fields-as-a-simple-array': httpVueLoader('../common/samples/sample-tables-fields-as-a-simple-array.vue'),
        'sample-tables-basic-table-styles': httpVueLoader('../common/samples/sample-tables-basic-table-styles.vue'),
        'sample-tables-basic-row-style': httpVueLoader('../common/samples/sample-tables-basic-row-style.vue'),
        'sample-tables-responsive': httpVueLoader('../common/samples/sample-tables-responsive.vue'),
        'sample-tables-always-stacked': httpVueLoader('../common/samples/sample-tables-always-stacked.vue'),
        'sample-tables-caption': httpVueLoader('../common/samples/sample-tables-caption.vue'),
        'sample-tables-busy-state': httpVueLoader('../common/samples/sample-tables-busy-state.vue'),
        'sample-tables-scoped-field-slots': httpVueLoader('../common/samples/sample-tables-scoped-field-slots.vue'),
        'sample-tables-formatter-callback': httpVueLoader('../common/samples/sample-tables-formatter-callback.vue'),
        'sample-tables-header-and-footer-custom': httpVueLoader('../common/samples/sample-tables-header-and-footer-custom.vue'),
        'sample-tables-adding-additional-rows-to-the-header': httpVueLoader('../common/samples/sample-tables-adding-additional-rows-to-the-header.vue'),
        'sample-tables-sticky-headers': httpVueLoader('../common/samples/sample-tables-sticky-headers.vue'),
        'sample-tables-sticky-columns': httpVueLoader('../common/samples/sample-tables-sticky-columns.vue'),
        'sample-tables-row-details-support': httpVueLoader('../common/samples/sample-tables-row-details-support.vue'),
        'sample-tables-row-select-support': httpVueLoader('../common/samples/sample-tables-row-select-support.vue'),
        'sample-tables-body-translation-support': httpVueLoader('../common/samples/sample-tables-body-translation-support.vue'),
        'sample-tables-sorting': httpVueLoader('../common/samples/sample-tables-sorting.vue'),
        'sample-tables-sort-icon-alignment': httpVueLoader('../common/samples/sample-tables-sort-icon-alignment.vue'),
        'sample-tables-complete-example': httpVueLoader('../common/samples/sample-tables-complete-example.vue'),
        'sample-tables-apply-custom-classes': httpVueLoader('../common/samples/sample-tables-apply-custom-classes.vue'),
        'sample-tables-external-controls': httpVueLoader('../common/samples/sample-tables-external-controls.vue'),
        'sample-tables-dynamic-tabs': httpVueLoader('../common/samples/sample-tables-dynamic-tabs.vue'),
        'sample-time-overview': httpVueLoader('../common/samples/sample-time-overview.vue'),
        'sample-time-seconds-spinbutton': httpVueLoader('../common/samples/sample-time-seconds-spinbutton.vue'),
        'sample-time-border-and-padding': httpVueLoader('../common/samples/sample-time-border-and-padding.vue'),
        'sample-time-default-slot': httpVueLoader('../common/samples/sample-time-default-slot.vue'),
        'sample-time-internationalization': httpVueLoader('../common/samples/sample-time-internationalization.vue'),
        'sample-time-toasts-on-demand': httpVueLoader('../common/samples/sample-time-toasts-on-demand.vue'),
        'sample-toasts-variants': httpVueLoader('../common/samples/sample-toasts-variants.vue'),
        'sample-toasts-toaster-target': httpVueLoader('../common/samples/sample-toasts-toaster-target.vue'),
        'sample-toasts-links': httpVueLoader('../common/samples/sample-toasts-links.vue'),
        'sample-toasts-advanced-usage': httpVueLoader('../common/samples/sample-toasts-advanced-usage.vue'),
        'sample-toasts-alerts-versus-toasts': httpVueLoader('../common/samples/sample-toasts-alerts-versus-toasts.vue'),
        'sample-tooltips-programmatically-show': httpVueLoader('../common/samples/sample-tooltips-programmatically-show.vue'),
        'sample-tooltips-programmatically-control': httpVueLoader('../common/samples/sample-tooltips-programmatically-control.vue'),
        'sample-tooltips-programmatically-disabling': httpVueLoader('../common/samples/sample-tooltips-programmatically-disabling.vue'),
        }, // --- End of components --- //

    data: {
        startMsg    : 'Vue has started, waiting for messages',
        feVersion   : '',
        counterBtn  : 0,
        inputText   : null,
        inputChkBox : false,
        socketConnectedState : false,
        serverTimeOffset     : '[unknown]',
        imgProps             : { width: 75, height: 75 },

        msgRecvd    : '[Nothing]',
        msgsReceived: 0,
        msgCtrl     : '[Nothing]',
        msgsControl : 0,

        msgSent     : '[Nothing]',
        msgsSent    : 0,
        msgCtrlSent : '[Nothing]',
        msgsCtrlSent: 0,
        //! Added for Auto dismissing alerts
        dismissSecs: 5,
        dismissCountDown: 0,
        //! End of Added for Auto dismissing alerts//
        //! Added for Aspect Demonstration
        aspect: '16:9',
        aspects: [
          { text: '4:3 (SD)', value: '4:3' },
          { text: '1:1 (Square)', value: '1:1' },
          { text: '16:9 (HD)', value: '16:9' },
          { text: '1.85:1 (Widescreen)', value: '1.85:1' },
          { text: '2:1 (Univisium/Superscope)', value: '2:1' },
          { text: '21:9 (Anamorphic)', value: '21:9' },
          { text: '1.43:1 (IMAX)', value: '1.43:1' },
          { text: '3:2 (35mm Film)', value: '3:2' },
          { text: '3:1 (APS-P)', value: '3:1' },
          { text: '4/3 (Same as 4:3)', value: 4 / 3 },
          { text: '16/9 (Same as 16:9)', value: 16 / 9 },
          { text: '3 (Same as 3:1)', value: 3 },
          { text: '2 (Same as 2:1)', value: 2 },
          { text: '1.85 (Same as 1.85:1)', value: 1.85 },
          { text: '1.5', value: 1.5 },
          { text: '1 (Same as 1:1)', value: 1 }
        ],
        //! End of Added for Aspect Demonstration //
        //! Added for Breadcrumbs
        items: [
            {
                text: 'Admin',
                href: '#'
            },
            {
                text: 'Manage',
                href: '#'
            },
            {
                text: 'Library',
                active: true
            }
            ],
        //! End of Added for Breadcrumbs
        //! Added for Buttons Pressed State and Toggling
        myToggle: false,
        buttons: [
            { caption: 'Toggle 1', state: true },
            { caption: 'Toggle 2', state: false },
            { caption: 'Toggle 3', state: true },
            { caption: 'Toggle 4', state: false }
        ],
        //! End of Added for Buttons Pressed State and Toggling
        //! Added for Calendar
        value: '',
        context: null,
        //! End of Added for Calendar
        //! Added for Calendar Disabled and readonly states
        state: 'disabled',
        //! End of Added for Calendar Disabled and readonly states
        //! Added for Calendar Data Constraints
//This is empty, but to implement would have info added        
        //! End of Added for Calendar Data Constraints
        //! Added for Calendar Data Constraints
        value: '',
        //! End of Added for Calendar Data Constraints

    }, // --- End of data --- //
    
    
    
    computed: {
        hLastRcvd: function() {
            var msgRecvd = this.msgRecvd
            if (typeof msgRecvd === 'string') return 'Last Message Received = ' + msgRecvd
                else return 'Last Message Received = ' + this.syntaxHighlight(msgRecvd)
        },
        hLastSent: function() {
            var msgSent = this.msgSent
            if (typeof msgSent === 'string') return 'Last Message Sent = ' + msgSent
                else return 'Last Message Sent = ' + this.syntaxHighlight(msgSent)
        },
        hLastCtrlRcvd: function() {
            var msgCtrl = this.msgCtrl
            if (typeof msgCtrl === 'string') return 'Last Control Message Received = ' + msgCtrl
             else return 'Last Control Message Received = ' + this.syntaxHighlight(msgCtrl)
        },
        hLastCtrlSent: function() {
            var msgCtrlSent = this.msgCtrlSent
            if (typeof msgCtrlSent === 'string') return 'Last Control Message Sent = ' + msgCtrlSent
                else return 'Last Control Message Sent = ' + this.syntaxHighlight(msgCtrlSent)
        },
        //! Added for Buttons Pressed State and Toggling
        btnStates() {
            return this.buttons.map(btn => btn.state)
          },
        //! End of Added for Buttons Pressed State and Toggling
        hLastRcvd: function() {
            var msgRecvd = this.msgRecvd
            if (typeof msgRecvd === 'string') return 'Last Message Received = ' + msgRecvd
            else return 'Last Message Received = ' + this.syntaxHighlight(msgRecvd)
        },
        hLastSent: function() {
            var msgSent = this.msgSent
            if (typeof msgSent === 'string') return 'Last Message Sent = ' + msgSent
            else return 'Last Message Sent = ' + this.syntaxHighlight(msgSent)
        },
        hLastCtrlRcvd: function() {
            var msgCtrl = this.msgCtrl
            if (typeof msgCtrl === 'string') return 'Last Control Message Received = ' + msgCtrl
            else return 'Last Control Message Received = ' + this.syntaxHighlight(msgCtrl)
        },
        hLastCtrlSent: function() {
            var msgCtrlSent = this.msgCtrlSent
            if (typeof msgCtrlSent === 'string') return 'Last Control Message Sent = ' + msgCtrlSent
            //else return 'Last Message Sent = ' + this.callMethod('syntaxHighlight', [msgCtrlSent])
            else return 'Last Control Message Sent = ' + this.syntaxHighlight(msgCtrlSent)
        },
        //! Added for Calendar Disabled and readonly states
        disabled() {
            return this.state === 'disabled'
            },
            readonly() {
            return this.state === 'readonly'
            },
        //! End of Added for Calendar Disabled and readonly states

    }, // --- End of computed --- //
    
    
    
    methods: {
        increment: function(event) {
            // Increment the count by one
            this.counterBtn = this.counterBtn + 1
            var topic = this.msgRecvd.topic || 'uibuilder/vue'
            uibuilder.send({
                'topic': topic,
                'payload': {
                    'type': 'counterBtn',
                    'btnCount': this.counterBtn,
                    'message': this.inputText,
                    'inputChkBox': this.inputChkBox
                }
            })
        }, // --- End of increment --- //


        // return formatted HTML version of JSON object
        syntaxHighlight: function(json) {
            json = JSON.stringify(json, undefined, 4)
            json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                var cls = 'number'
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key'
                    } else {
                        cls = 'string'
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean'
                } else if (/null/.test(match)) {
                    cls = 'null'
                }
                return '<span class="' + cls + '">' + match + '</span>'
            }
            )
            return json
        }, // --- End of syntaxHighlight --- //
        //! Added for Auto dismissing alerts
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
          },
          showAlert() {
            this.dismissCountDown = this.dismissSecs
          },
        //! End of Added for Auto dismissing alerts//
        //! Added for Actionable Avatars
        onClick() {
            this.$bvModal.msgBoxOk('User name: Fred Flintstone', {
              title: 'User Info',
              size: 'sm',
              buttonSize: 'sm',
              okVariant: 'success',
              headerClass: 'p-2 border-bottom-0',
              footerClass: 'p-2 border-top-0'
            })
        },
        //! End of Added for Actionable Avatars
        //! Added for Calendar
        onContext(ctx) {
            this.context = ctx
          },
        //! End of Added for Calendar
        //! Added for Calendar Disabling Dates
        dateDisabled(ymd, date) {
            // Disable weekends (Sunday = `0`, Saturday = `6`) and
            // disable days that fall on the 13th of the month
            const weekday = date.getDay()
            const day = date.getDate()
            // Return `true` if the date should be disabled
            return weekday === 0 || weekday === 6 || day === 13
          },
        //! End of Added for Calendar Disabling Dates
        //! Added for Calendar Default Slot
        setToday() {
            const now = new Date()
            this.value = new Date(now.getFullYear(), now.getMonth(), now.getDate())
          },
          clearDate() {
            this.value = ''
          },
        //! End of Added for Calendar Default Slot
        //! Added for Calendar Adding CSS classes to specific dates
        dateClass(ymd, date) {
            const day = date.getDate()
            return day >= 10 && day <= 20 ? 'table-info' : ''
          },
        //! End of Added for Calendar Adding CSS classes to specific dates
    }, // --- End of methods --- //



    // Available hooks: init,mounted,updated,destroyed
    mounted: function(){
                    /** **REQUIRED** Start uibuilder comms with Node-RED @since v2.0.0-dev3
                     * Pass the namespace and ioPath variables if hosting page is not in the instance root folder
                     * The namespace is the "url" you put in uibuilder's configuration in the Editor.
                     * e.g. If you get continual `uibuilderfe:ioSetup: SOCKET CONNECT ERROR` error messages.
                     * e.g. uibuilder.start('uib', '/uibuilder/vendor/socket.io') // change to use your paths/names
                     */
            //! root folder version of start
                    //uibuilder.start()
            //! sub folder version of start
                    uibuilder.start('/uibuilder7', '/uibuilder/vendor/socket.io')
                    var vueApp = this
                    // Example of retrieving data from uibuilder
                    vueApp.feVersion = uibuilder.get('version')

                    // If msg changes - msg is updated when a standard msg is received from Node-RED over Socket.IO
                    // newVal relates to the attribute being listened to.
                    uibuilder.onChange('msg', function(newVal){
                        vueApp.msgRecvd = newVal
                    }
                    )

                    // As we receive new messages, we get an updated count as well
                    uibuilder.onChange('msgsReceived', function(newVal){
                        vueApp.msgsReceived = newVal
                    }
                    )

                    // If we receive a control message from Node-RED, we can get the new data here - we pass it to a Vue variable
                    uibuilder.onChange('ctrlMsg', function(newVal){
                        vueApp.msgCtrl = newVal
                    }
                    )
                    
                    // Updated count of control messages received
                    uibuilder.onChange('msgsCtrl', function(newVal){
                        vueApp.msgsControl = newVal
                    }
                    )


                    // You probably only need these to help you understand the order of processing //
                    // If a message is sent back to Node-RED, we can grab a copy here if we want to
                    uibuilder.onChange('sentMsg', function(newVal){
                        vueApp.msgSent = newVal
                    }
                    )
                    
                    // Updated count of sent messages
                    uibuilder.onChange('msgsSent', function(newVal){
                        vueApp.msgsSent = newVal
                    }
                    )

                    // If we send a control message to Node-RED, we can get a copy of it here
                    uibuilder.onChange('sentCtrlMsg', function(newVal){
                        vueApp.msgCtrlSent = newVal
                    }
                    )
                    
                    // And we can get an updated count
                    uibuilder.onChange('msgsSentCtrl', function(newVal){
                        vueApp.msgsCtrlSent = newVal
                    }
                    )

                    // If Socket.IO connects/disconnects, we get true/false here
                    uibuilder.onChange('ioConnected', function(newVal){
                        vueApp.socketConnectedState = newVal
                    }
                    )

                    // If Server Time Offset changes
                    uibuilder.onChange('serverTimeOffset', function(newVal){
                        vueApp.serverTimeOffset = newVal
                    }
                    )
    } // --- End of mounted hook --- //
}
) // --- End of app1 --- //