/*
  Kaufkiste JSON storage endpoint for Google Apps Script.

  Setup:
  1. Create a new Apps Script project.
  2. Paste this file into Code.gs.
  3. Optional: set DOCUMENT_ID to the ID of a Google Doc that should contain the JSON.
     If DOCUMENT_ID stays empty, the script creates/updates a Drive file named kaufkiste.json.
  4. Deploy as Web app:
     - Execute as: Me
     - Who has access: Anyone with the link
  5. Copy the /exec URL into Kaufkiste as JSON read link and JSON write link.
*/

var DOCUMENT_ID = "";
var FILE_NAME = "kaufkiste.json";

function doGet(e) {
  var payload = readPayload_();
  var callback = e && e.parameter && e.parameter.callback;

  if (callback) {
    return ContentService
      .createTextOutput(callback + "(" + payload + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(payload)
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var payload = (e && e.parameter && e.parameter.payload) ||
    (e && e.postData && e.postData.contents) ||
    "{}";

  JSON.parse(payload);
  writePayload_(payload);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, updatedAt: new Date().toISOString() }))
    .setMimeType(ContentService.MimeType.JSON);
}

function readPayload_() {
  if (DOCUMENT_ID) {
    var doc = DocumentApp.openById(DOCUMENT_ID);
    return doc.getBody().getText().trim() || "{}";
  }

  var file = getOrCreateFile_();
  return file.getBlob().getDataAsString() || "{}";
}

function writePayload_(payload) {
  if (DOCUMENT_ID) {
    var doc = DocumentApp.openById(DOCUMENT_ID);
    var body = doc.getBody();
    body.clear();
    body.setText(payload);
    doc.saveAndClose();
    return;
  }

  getOrCreateFile_().setContent(payload);
}

function getOrCreateFile_() {
  var files = DriveApp.getFilesByName(FILE_NAME);
  if (files.hasNext()) return files.next();
  return DriveApp.createFile(FILE_NAME, "{}", MimeType.PLAIN_TEXT);
}
