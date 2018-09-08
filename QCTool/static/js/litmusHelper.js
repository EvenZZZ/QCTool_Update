var linker = angular.module('Linker', []).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});


linker.factory('Data', function () {
    var Data = {};
    Data.warningDisplay = "show";
    Data.listDisplay = "hidden";
    Data.litmusURL = "";
    Data.config = [
        {
            name: "Apple Mail 7",
            suffix: "appmail7"
        },
        {
            name: "Apple Mail 8",
            suffix: "appmail8"
        },
        {
            name: "Lotus Notes 7",
            suffix: "notes7"
        },
        {
            name: "Lotus Notes 8",
            suffix: "notes8"
        },
        {
            name: "Lotus Notes 8.5",
            suffix: "notes85"
        },
        {
            name: "IBM Notes 9",
            suffix: "notes9"
        },
        {
            name: "Outlook 2000",
            suffix: "ol2000"
        },
        {
            name: "Outlook 2002",
            suffix: "ol2002"
        },
        {
            name: "Outlook 2003",
            suffix: "ol2003"
        },
        {
            name: "Outlook 2007",
            suffix: "ol2007"
        },
        {
            name: "Outlook 2010",
            suffix: "ol2010"
        },
        {
            name: "Outlook 2011",
            suffix: "ol2011"
        },
        {
            name: "Outlook 2013",
            suffix: "ol2013"
        },
        {
            name: "Outlook 2013 120 DPI",
            suffix: "ol2013dpi120"
        },
        {
            name: "Outlook 2016",
            suffix: "ol2015"
        },
        {
            name: "Thunderbird 38",
            suffix: "thunderbirdlatest"
        },
        {
            name: "Android 4.4",
            suffix: "android4"
        },
        {
            name: "Gmail App (Android)",
            suffix: "androidgmailapp"
        },
        {
            name: "iPhone 5s (iOS 7)",
            suffix: "iphone5s"
        },
        {
            name: "iPhone 5s (iOS 8)",
            suffix: "iphone5sios8"
        },
        {
            name: "iPhone 6",
            suffix: "iphone6"
        },
        {
            name: "iPhone 6 Plus",
            suffix: "iphone6plus"
        },
        {
            name: "iPhone 6s",
            suffix: "iphone6s"
        },
        {
            name: "iPhone 6s Plus",
            suffix: "iphone6splus"
        },
        {
            name: "iPad (Retina)",
            suffix: "ipad"
        },
        {
            name: "iPad Mini",
            suffix: "ipadmini"
        },
        {
            name: "AOL Mail (Explorer)",
            suffix: "aolonline"
        },
        {
            name: "AOL Mail (Firefox)",
            suffix: "ffaolonline"
        },
        {
            name: "AOL Mail (Chrome)",
            suffix: "chromeaolonline"
        },
        {
            name: "Gmail (Explorer)",
            suffix: "gmailnew"
        },
        {
            name: "Gmail (Firefox)",
            suffix: "ffgmailnew"
        },
        {
            name: "Gmail (Chrome)",
            suffix: "chromegmailnew"
        },
        {
            name: "Google Apps (Explorer)",
            suffix: "googleapps"
        },
        {
            name: "Google Apps (Chrome)",
            suffix: "chromegoogleapps"
        },
        {
            name: "Google Apps (Firefox)",
            suffix: "ffgoogleapps"
        },
        {
            name: "Office 365 (Explorer)",
            suffix: "office365"
        },
        {
            name: "Office 365 (Firefox)",
            suffix: "ffoffice365"
        },
        {
            name: "Office 365 (Chrome)",
            suffix: "chromeoffice365"
        },
        {
            name: "Outlook.com (Explorer)",
            suffix: "outlookcom"
        },
        {
            name: "Outlook.com (Firefox)",
            suffix: "ffoutlookcom"
        },
        {
            name: "Outlook.com (Chrome)",
            suffix: "chromeoutlookcom"
        },
        {
            name: "Yahoo! Mail (Explorer)",
            suffix: "yahoo"
        },
        {
            name: "Yahoo! Mail (Firefox)",
            suffix: "ffyahoo"
        },
        {
            name: "Yahoo! Mail (Chrome)",
            suffix: "chromeyahoo"
        }
    ];
    return Data;
});


function renderLink($scope, Data){
    $scope.data = Data;
    $scope.config = Data.config;
    $scope.renderLink = function (device) {
        //var renderURL = Data.stripURL + "results#";
        return baseUrl = Data.litmusURL + "#" + device.suffix;
    }
}

function linkInput($scope, Data){
    $scope.data = Data;
    $scope.change = function () {
        var regex1 = /(^http(s)?:\/\/litmus.com\/checklist\/tests\/\d+$)/;
        var result1 = Data.litmusURL.match(regex1);
        var regex2 = /(^http(s)?:\/\/litmus.com\/pub\/\w+$)/;
        var result2 = Data.litmusURL.match(regex2);
        if(result1 || result2){
            Data.warningDisplay = "hidden";
            Data.listDisplay = "show";
        }else{
            Data.stripURL = ""
            Data.warningDisplay = "show";
            Data.listDisplay = "hidden";
        }
    }
}