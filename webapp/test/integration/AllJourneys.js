/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/nav1/nav1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/nav1/nav1/test/integration/pages/View1",
	"com/nav1/nav1/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.nav1.nav1.view.",
		autoWait: true
	});
});