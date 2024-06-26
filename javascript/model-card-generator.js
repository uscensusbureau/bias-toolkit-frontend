const modelCardSubmitForm = document.getElementById("model-card-form");
const projectVersion = 0.2;
modelCardSubmitForm.addEventListener("submit", startDownload);
let filename = "model-card";

const markdownMap = {
	'h1': '#',
	'h2': '##',
	'h3': '###',
	'ul': '*',
};

function startDownload(event) {
	event.preventDefault();
	const anchor = document.createElement("a");
	const formData = collectFormData();
	// add origin note and link
	const projectLink = 'https://bias/xd.gov/resources/model-card-generator/tool/';
	const originNote = `This model card was generated with the Bias Toolkit Model Card Generator version ${projectVersion}. To learn more, visit ${projectLink}.`;
	formData.push([originNote]);

	const modelCardData = formData.join("\r\n");
	const downloadedBlob = new Blob([modelCardData], { type: "text/markdown" });

	const url = window.URL.createObjectURL(downloadedBlob);

	anchor.href = url;
	anchor.download = `${filename}.md`;
	anchor.style.display = "none";
	document.body.append(anchor);

	anchor.click();
	anchor.remove();
	window.URL.revokeObjectURL(url);

	return false;
}

function collectFormData() {
	const forms = document.querySelectorAll('form');
	const form = forms[0];
	const formRows = [];

	Array.from(form.elements).forEach((input) => {
	const { value, id, dataset } = input;
	let { mdTitle, mdType, mdHeading } = dataset;
	let labelMdType = 'h2';
	if (id !== 'form-btn') { // don't add button props to markdown file
		if (mdTitle === 'label') {
		const labelEl = document.getElementById(`${id}-label`);
		labelMdType = 'h3';
		mdTitle = (labelEl.innerText || labelEl.textContent);
		if (mdTitle[mdTitle.length - 1] === '*') {
			// remove trailing 'required' asterisk from label text
			mdTitle = mdTitle.slice(0, -1);
		}
		}
		if (mdHeading !== undefined) {
		formRows.push(`${markdownMap['h2']} ${mdHeading}`);
		}
		if (mdTitle === 'ModelName') {
		filename = `${input.value} Model Card`;
		formRows.push(`${markdownMap['h1']} ${filename}`);
		} else {
		formRows.push(`${markdownMap[labelMdType]} ${mdTitle}`);
		formRows.push(`${markdownMap[mdType]} ${value}`);
		}
	}
	});

	return formRows;
}
