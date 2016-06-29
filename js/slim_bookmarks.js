/**
 *
 * @source: https://github.com/Chocobo1/slim_bookmarks/blob/gh-pages/js/slim_bookmarks.js
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2016  Mike Tzou (Chocobo1)
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

function main()
{
	const reader = new FileReader();
	reader.onload = function(e) {
		// manipulate file
		const rawData = e.target.result;
		const params = {
			addDate: document.getElementById("idAddDate").checked,
			lastModified: document.getElementById("idLastModified").checked,
			iconUri: document.getElementById("idIconUri").checked,
			icon: document.getElementById("idIcon").checked,
			webPanel: document.getElementById("idWebPanel").checked,
			lastCharset: document.getElementById("idLastCharset").checked,
			shortcutUrl: document.getElementById("idShortcutUrl").checked,
			dd: document.getElementById("idDd").checked,
			tags: document.getElementById("idTags").checked
		};
		const finalStr = removeFields(rawData, params);

		// save to file
		const file = e.target._file;
		const blob = new Blob([finalStr], {type: file.type});
		saveAs(blob, "slimmed_" + file.name);  // FileSaver.js: https://github.com/eligrey/FileSaver.js/
	};

	const eleFiles = document.getElementById("idInputFiles");
	eleFiles.addEventListener("change", function(e) {
		const filesList = eleFiles.files;

		for (let i = 0; i < filesList.length; ++i) {
			reader._file = filesList[i];  // doesn't work with multiple files
			reader.readAsText(filesList[i]);
		}
	});
}

function removeFields(str, params)
{
	let retStr = str;

	if (params.addDate)
		retStr = retStr.replace(/ ADD_DATE=\".*?\"/gi, "");

	if (params.lastModified)
		retStr = retStr.replace(/ LAST_MODIFIED=\".*?\"/gi, "");

	if (params.icon)
		retStr = retStr.replace(/ ICON=\".*?\"/gi, "");

	if (params.iconUri)
		retStr = retStr.replace(/ ICON_URI=\".*?\"/gi, "");

	if (params.dd)
		retStr = retStr.replace(/\s*<DD>.*/gi, "");

	if (params.lastCharset)
		retStr = retStr.replace(/ LAST_CHARSET=\".*?\"/gi, "");

	if (params.webPanel)
		retStr = retStr.replace(/ WEB_PANEL=\".*?\"/gi, "");

	if (params.shortcutUrl)
		retStr = retStr.replace(/ SHORTCUTURL=\".*?\"/gi, "");

	if (params.tags)
		retStr = retStr.replace(/ TAGS=\".*?\"(?=[\s>])/gi, "");

/*
	const eleDebugText = document.getElementById("idDebugText");
	eleDebugText.textContent = retStr;
*/

	return retStr;
}

main();
