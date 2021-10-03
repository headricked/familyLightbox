/*******************************************************************************
 * GET TIMESTAMP
 ******************************************************************************/
function getTimestamp() {
  var x = document.lastModified;
  document.getElementById("timestamp").innerHTML = x;
}