// UI要素取得
const noteText = document.getElementById("note-text");
const saveButton = document.getElementById("save-button");
const clearButton = document.getElementById("clear-button");

// ポップアップを展開時、保存ノート読み込み
chrome.storage.local.get("note", function(data) {
  noteText.value = data.note || "";
});

// Saveボタン
saveButton.addEventListener("click", function() {
  chrome.storage.local.set({ note: noteText.value }, function() {
    console.log("Saved");
  });
});

// Deleteボタン
clearButton.addEventListener("click", function() {
  noteText.value = "";
  chrome.storage.local.remove("note", function() {
    console.log("Deleted");
  });
});
