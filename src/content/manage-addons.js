"use strict";

var stylemManageAddons = {

	getSortButtons: function() {
		return document.getElementById('userstyle-sorting').getElementsByTagName('button');
	},

	getActiveSort: function() {
		var buttons = stylemManageAddons.getSortButtons();
		var checkedButton = Array.filter(buttons, function(b) { return b.hasAttribute('checkState'); })[0];
		if (checkedButton == null) {
			checkedButton = buttons[0];
		}
		var ascending = checkedButton.getAttribute('checkState') != "1";
		var sortBy = checkedButton.getAttribute('sortBy').split(',');
		return [sortBy, ascending];
	},

	changeSort: function(event) {
		var button = event.target;

		// remove checkState from other buttons
		var buttons = stylemManageAddons.getSortButtons();
		Array.filter(buttons, function(b) { return b != button; }).forEach(function(b) { b.removeAttribute("checkState");b.removeAttribute("checked");});

		button.setAttribute('checkState', button.getAttribute('checkState') == "2" ? "1" : "2");
		button.setAttribute("checked", "true");

		stylemManageAddons.applySort();
	},

	applySort: function() {
		var list = document.getElementById('addon-list');
		// this stuff doesn't matter, we're overriding sortElements below
		sortList(list, "name", true);
	},

	startInstallFromUrls: function(button) {
		var startedCallback = function() {
			button.setAttribute("image", "chrome://browser/skin/tabbrowser/connecting.png");
			button.setAttribute("disabled", "true");
		}
		var endedCallback = function() {
			button.setAttribute("image", "");
			button.setAttribute("disabled", "");
		}
		stylishCommon.startInstallFromUrls(startedCallback, endedCallback);
	},

	openAdd: function() {
		// get the chrome window so we can open in tab if necessary
		var win = Components.classes["@mozilla.org/embedcomp/window-watcher;1"].getService(Components.interfaces.nsIWindowWatcher).activeWindow;
		stylishCommon.addCode('', win);
	}
}

// add some more properties so we can sort on them
stylemManageAddons._createItem = createItem,
createItem = function(o, aIsInstall, aIsRemote) {
	var item = stylemManageAddons._createItem(o, aIsInstall, aIsRemote);
	if ("mAddon" in item && item.mAddon.type == "userstyle") {
		item.setAttribute("styleTypes", item.mAddon.styleTypes);
		item.setAttribute("reportable", item.mAddon.style.idUrl == null ? false : (item.mAddon.style.idUrl.indexOf("http://userstyles.org/") == 0));
	}
	return item;
}

// override sortElements so that we can use a different sort on load
stylemManageAddons._sortElements = sortElements;
sortElements = function(aList, aSortBy, aAscending) {
	if (aList.length == 0 || aList[0].getAttribute("type") != "userstyle") {
		stylemManageAddons._sortElements(aList, aSortBy, aAscending);
		return;
	}
	var sort = stylemManageAddons.getActiveSort();
	stylemManageAddons._sortElements(aList, sort[0], sort[1]);
}
