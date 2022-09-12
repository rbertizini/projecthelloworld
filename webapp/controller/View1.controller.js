sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel",
        "../js/formatter",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(Controller, MessageToast, JSONModel, ResourceModel, formatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("app01.projecthelloworld.controller.View1", {
            formatter: formatter,

            //Função filtro
            onFilterInvoices: function(oEvent) {

                // build filter array
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");

                if (sQuery) {
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
                }

                // filter binding
                var oList = this.byId("invoiceList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },

            onFilterInvoices2: function(oEvent) {

                // build filter array
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");

                if (sQuery) {
                    aFilter.push(new Filter("ShipperName", FilterOperator.Contains, sQuery));
                }

                // filter binding
                var oList = this.byId("invoiceList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },



            onInit: function() {

                //oData inicial
                var oData = {
                    recipient: {
                        name: "World"
                    }
                };

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                var oInvoice = new JSONModel("Invoices.json");
                this.getView().setModel(oInvoice, "batata");

                var i18nModel = new ResourceModel({
                    bundleName: "app01.projecthelloworld.i18n.i18n"
                });
                this.getView().setModel(i18nModel, "i18n");

            },
            onShowHello: function() {

                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);

                alert(sMsg);
                MessageToast.show(sMsg);
            }
        });
    });