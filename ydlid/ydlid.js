if (!this.DLDone) {
	DLDone = {};
}

DLDone.OnDLChanged = function (o) {

	if (o.state !== undefined) {
		if (o.state.current == "complete") {
			document.getElementById('dlSound').play();
		}
	}

};

chrome.downloads.onChanged.addListener(DLDone.OnDLChanged);