// TODO: Modify this function
function generateShortCode(storeId, transactionId) {
    // RETURN INFORMATION OF STORE AND TRANSACTION (ORGANIZE RETRIEVED INFORMATION)
    return `Store ID: ${storeId}, Transaction ID: ${transactionId}`;
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
    // Only a user with access to the code can imply what each number means 
    // constant to organize/split ShortCode into the store Id, the date and transaction Id (helps with organizing data and helping the user)

    const organize= shortCode.split("/");

    return {
        storeId: organize[0], // store id goes here, after organizing data with /
        shopDate: new Date(), // the date the customer shopped,
        transactionId: organize[1], // transaction id goes here
    };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

    var storeIds = [175, 42, 0, 9]
    var transactionIds = [9675, 23, 123, 7]

    storeIds.forEach(function (storeId) {
        transactionIds.forEach(function (transactionId) {
            var shortCode = generateShortCode(storeId, transactionId);
            var decodeResult = decodeShortCode(shortCode);
            $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
            AddTestResult("Length <= 9", shortCode.length <= 9);
            AddTestResult("Is String", (typeof shortCode === 'string'));
            AddTestResult("Is Today", IsToday(decodeResult.shopDate));
            AddTestResult("StoreId", storeId === decodeResult.storeId);
            AddTestResult("TransId", transactionId === decodeResult.transactionId);
        })
    })
}

function IsToday(inputDate) {
    // Get today's date
    var todaysDate = new Date();
    // call setHours to take the time out of the comparison
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
    var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}



