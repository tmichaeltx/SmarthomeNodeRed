/*  This started from the default, template html for uibuilder that was then stripped down to only the inclusions
    of VueJS & bootstrap-vue and they connecting from/to the Node-RED server.
    Note for those items where it must differ, there are 2 versions of several lines of js.
    1 for when the file is in the root folder for uibuilder and 1 for when it is in a sub folder.

    Noteworthy is that both the html and the js files must be altered in this way. The version not being used is commented out.
*/
'use strict'
/** @see https://github.com/TotallyInformation/node-red-contrib-uibuilder/wiki/Front-End-Library---available-properties-and-methods */

var app1 = new Vue(
    {
        el: '#app',
        /** Load external component files
        *  Make sure there is no leading / in the name
        *  To load from the common folder use like: 'common/component-name.vue' */
        components: {
            'sample-form-checkbox-individual-switch-style': httpVueLoader('../common/samples/sample-form-checkbox-individual-switch-style.vue'),
            'wip-individual-switch-style': httpVueLoader('../common/wip/wip-individual-switch-style.vue'),
            'wip-switch-individual-slot-practice': httpVueLoader('../common/wip/wip-switch-individual-slot-practice.vue'),
            'wip-frame': httpVueLoader('../common/wip/wip-frame.vue'),
            'wip-app-other': httpVueLoader('../common/wip/wip-app-other.vue'),
            'wip-app-other2': httpVueLoader('../common/wip/wip-app-other2.vue'),
            'wip-app-other3': httpVueLoader('../common/wip/wip-app-other3.vue'),
            'click-counter': {
                template: '<button @click="mikecount++">{{count}} plus {{mikecount}}</button>',
                data() {
                    return {
                        count: 0
                    }
                },
                props: ['mikecount']
            }
        }, // --- End of components --- //



        data: {
            startMsg: 'Vue has started, waiting for messages',
            feVersion: '',
            counterBtn: 0,
            inputText: null,
            inputChkBox: false,
            socketConnectedState: false,
            serverTimeOffset: '[unknown]',
            imgProps: { width: 75, height: 75 },

            msgRecvd: '[Nothing]',
            msgsReceived: 0,
            msgCtrl: '[Nothing]',
            msgsControl: 0,

            msgSent: '[Nothing]',
            msgsSent: 0,
            msgCtrlSent: '[Nothing]',
            msgsCtrlSent: 0,
        }, // --- End of data --- //



        computed: {
            hLastRcvd: function () {
                var msgRecvd = this.msgRecvd
                if (typeof msgRecvd === 'string') return 'Last Message Received = ' + msgRecvd
                else return 'Last Message Received = ' + this.syntaxHighlight(msgRecvd)
            },
            hLastSent: function () {
                var msgSent = this.msgSent
                if (typeof msgSent === 'string') return 'Last Message Sent = ' + msgSent
                else return 'Last Message Sent = ' + this.syntaxHighlight(msgSent)
            },
            hLastCtrlRcvd: function () {
                var msgCtrl = this.msgCtrl
                if (typeof msgCtrl === 'string') return 'Last Control Message Received = ' + msgCtrl
                else return 'Last Control Message Received = ' + this.syntaxHighlight(msgCtrl)
            },
            hLastCtrlSent: function () {
                var msgCtrlSent = this.msgCtrlSent
                if (typeof msgCtrlSent === 'string') return 'Last Control Message Sent = ' + msgCtrlSent
                else return 'Last Control Message Sent = ' + this.syntaxHighlight(msgCtrlSent)
            },
            hLastRcvd: function () {
                var msgRecvd = this.msgRecvd
                if (typeof msgRecvd === 'string') return 'Last Message Received = ' + msgRecvd
                else return 'Last Message Received = ' + this.syntaxHighlight(msgRecvd)
            },
            hLastSent: function () {
                var msgSent = this.msgSent
                if (typeof msgSent === 'string') return 'Last Message Sent = ' + msgSent
                else return 'Last Message Sent = ' + this.syntaxHighlight(msgSent)
            },
            hLastCtrlRcvd: function () {
                var msgCtrl = this.msgCtrl
                if (typeof msgCtrl === 'string') return 'Last Control Message Received = ' + msgCtrl
                else return 'Last Control Message Received = ' + this.syntaxHighlight(msgCtrl)
            },
            hLastCtrlSent: function () {
                var msgCtrlSent = this.msgCtrlSent
                if (typeof msgCtrlSent === 'string') return 'Last Control Message Sent = ' + msgCtrlSent
                //else return 'Last Message Sent = ' + this.callMethod('syntaxHighlight', [msgCtrlSent])
                else return 'Last Control Message Sent = ' + this.syntaxHighlight(msgCtrlSent)
            },
        }, // --- End of computed --- //



        methods: {
            increment: function (event) {
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
            syntaxHighlight: function (json) {
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
        }, // --- End of methods --- //



        // Available hooks: init,mounted,updated,destroyed
        mounted: function () {
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
            uibuilder.onChange('msg', function (newVal) {
                vueApp.msgRecvd = newVal
            }
            )

            // As we receive new messages, we get an updated count as well
            uibuilder.onChange('msgsReceived', function (newVal) {
                vueApp.msgsReceived = newVal
            }
            )

            // If we receive a control message from Node-RED, we can get the new data here - we pass it to a Vue variable
            uibuilder.onChange('ctrlMsg', function (newVal) {
                vueApp.msgCtrl = newVal
            }
            )

            // Updated count of control messages received
            uibuilder.onChange('msgsCtrl', function (newVal) {
                vueApp.msgsControl = newVal
            }
            )


            // You probably only need these to help you understand the order of processing //
            // If a message is sent back to Node-RED, we can grab a copy here if we want to
            uibuilder.onChange('sentMsg', function (newVal) {
                vueApp.msgSent = newVal
            }
            )

            // Updated count of sent messages
            uibuilder.onChange('msgsSent', function (newVal) {
                vueApp.msgsSent = newVal
            }
            )

            // If we send a control message to Node-RED, we can get a copy of it here
            uibuilder.onChange('sentCtrlMsg', function (newVal) {
                vueApp.msgCtrlSent = newVal
            }
            )

            // And we can get an updated count
            uibuilder.onChange('msgsSentCtrl', function (newVal) {
                vueApp.msgsCtrlSent = newVal
            }
            )

            // If Socket.IO connects/disconnects, we get true/false here
            uibuilder.onChange('ioConnected', function (newVal) {
                vueApp.socketConnectedState = newVal
            }
            )

            // If Server Time Offset changes
            uibuilder.onChange('serverTimeOffset', function (newVal) {
                vueApp.serverTimeOffset = newVal
            }
            )
        } // --- End of mounted hook --- //
    }
) // --- End of app1 --- //