sap.ui.define([], function() {
    "use strict";
    return {
        statusText: function(sStatus) {
            switch (sStatus) {
                case "A":
                    return 'Aprovado';
                case "B":
                    return 'Novo';
                case "C":
                    return 'Atrasado';
                default:
                    return sStatus;
            }
        }
    };
});