'use strict'

/** @see https://github.com/TotallyInformation/node-red-contrib-uibuilder/wiki/Front-End-Library---available-properties-and-methods */

var app1 = new Vue({
    el: '#app',
    data: {
        //items 1 and 2 a placeholder examples
        item1       : 'This is a string data item',
        item2       : 0,
        //the next 2 are likely unneeded for this simple example
        serverTimeOffset     : '[unknown]',
        imgProps             : { width: 75, height: 75 },
        //used for Node-Red interaction
        msgRecvd    : '[Nothing]',
        msgsReceived: 0,
        msgCtrl     : '[Nothing]',
        msgsControl : 0,
        msgSent     : '[Nothing]',
        msgsSent    : 0,
        msgCtrlSent : '[Nothing]',
        msgsCtrlSent: 0
    }, // --- End of data --- //
    computed: {
        //used like data items but essentially are computationally derived data items that are
        //  recomputed whenever the input has changed.
        //  They are not needed for the simple example but will be good examples once interaction with
        //      Node-Red comes into play
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
        }
    }, // --- End of computed --- //
    methods: {
        //A function that sends an object back to Node-Red. 
        //  It is not needed for the simple example but will be good example once interaction with
        //      Node-Red comes into play
        increment: function(event) {
            var topic = this.msgRecvd.topic || 'uibuilder/vue'
            uibuilder.send({
                'topic': topic,
                'payload': {
                    'type': 'counterBtn',
                    'btnCount': this.counterBtn,
                    'message': this.inputText,
                    'inputChkBox': this.inputChkBox
                }
            }
            )
        } // --- End of increment --- //
    }, // --- End of methods --- //
    // Available hooks: init,mounted,updated,destroyed
    mounted: function(){
        /** **REQUIRED** Start uibuilder comms with Node-RED @since v2.0.0-dev3
         * Pass the namespace and ioPath variables if hosting page is not in the instance root folder
         * The namespace is the "url" you put in uibuilder's configuration in the Editor.
         * e.g. If you get continual `uibuilderfe:ioSetup: SOCKET CONNECT ERROR` error messages.
         * e.g. uibuilder.start('uib', '/nr/uibuilder/vendor/socket.io') // change to use your paths/names
         */
        //! uibuilder.start
         uibuilder.start()
        var vueApp = this
        // If msg changes - msg is updated when a standard msg is received from Node-RED over Socket.IO
        // newVal relates to the attribute being listened to.
        uibuilder.onChange('msg', function(newVal){
            //console.info('[indexjs:uibuilder.onChange] msg received from Node-RED server:', newVal)
            vueApp.msgRecvd = newVal
        })

        //message interaction tracking (from here to the end).
        //  It is entirely a how to and not relevant to simple example

        // As we receive new messages, we get an updated count as well
        //! uibuilder.onchange
        uibuilder.onChange('msgsReceived', function(newVal){
            vueApp.msgsReceived = newVal
        })
        // If we receive a control message from Node-RED, we can get the new data here - we pass it to a Vue variable
        //! uibuilder.onchange
        uibuilder.onChange('ctrlMsg', function(newVal){
            vueApp.msgCtrl = newVal
        })
        // Updated count of control messages received
        //! uibuilder.onchange
        uibuilder.onChange('msgsCtrl', function(newVal){
            vueApp.msgsControl = newVal
        })

        // You probably only need these to help you understand the order of processing //
        // If a message is sent back to Node-RED, we can grab a copy here if we want to
        //! uibuilder.onchange
        uibuilder.onChange('sentMsg', function(newVal){
            vueApp.msgSent = newVal
        })
        // Updated count of sent messages
        //! uibuilder.onchange
        uibuilder.onChange('msgsSent', function(newVal){
            vueApp.msgsSent = newVal
        })
        // If we send a control message to Node-RED, we can get a copy of it here
        //! uibuilder.onchange
        uibuilder.onChange('sentCtrlMsg', function(newVal){
            vueApp.msgCtrlSent = newVal
        })
        // And we can get an updated count
        //! uibuilder.onchange
        uibuilder.onChange('msgsSentCtrl', function(newVal){
            vueApp.msgsCtrlSent = newVal
        })

        // If Socket.IO connects/disconnects, we get true/false here
        //! uibuilder.onchange
        uibuilder.onChange('ioConnected', function(newVal){
            vueApp.socketConnectedState = newVal
        })
        // If Server Time Offset changes
        //! uibuilder.onchange
        uibuilder.onChange('serverTimeOffset', function(newVal){
            //console.info('[indexjs:uibuilder.onChange:serverTimeOffset] Offset of time between the browser and the server has changed to:', newVal)
            vueApp.serverTimeOffset = newVal
        })
    } // --- End of mounted hook --- //
}) // --- End of app1 --- //