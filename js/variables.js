const projectID = "e119c525-f9f1-44a2-86db-9e4bb07a18fa";
const namingstandardID ="d5a0e865-dea7-532e-b4c8-dfbcbb8b36cd"
const hubID= "b.24d2d632-e01b-4ca0-b988-385be827cb04"
const bucketKey = "wip.dm.emea.2"
const defaultFolder = "urn:adsk.wipemea:fs.folder:co.TTt9faNOTnGEWOC8ji055g" // KELTBRAY - WIP Folder
const templateFolderID = "urn:adsk.wipemea:fs.folder:co.l8r6vS_BQ_GkrVQzgTrQzw" // APPROVED_TEMPLATES Folder

const uploadfolders = [
    {folderName:"KELTBRAY - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.TTt9faNOTnGEWOC8ji055g"},
    {folderName:"ALP - ALPHA FENCING - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.rDjdwZHFSp6Ee1BQ5rl3CQ"}, // 0D.SUB-CONTRACTORs - ALP  WIP
    {folderName:"BHS - BAKER HICKS - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.C7KA83Y2Q-KlPVGuXZXS3Q"}, // 0D.SUB-CONTRACTORs - BHS - BAKER HICKS  WIP
    {folderName:"CLE - CLEVELAND - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.L0VYCzIuRbqv0DLEHkBjtw"}, // 0D.SUB-CONTRACTORs - CLE WIP
    {folderName:"DSC - DAVID SMITH CONTRACTORS - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.sEmzYxJ-Tu2yRWVXgkJCuQ"}, // 0D.SUB-CONTRACTORs - DSC  WIP
    {folderName:"GRM - GRAMPIAN GEOTECHNICAL - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.WG2nMXrER3iYLE5sSrBlKg"}, // 0D.SUB-CONTRACTORs - GRM - GRAMPIAN GEOTECHNICAL  WIP
    {folderName:"HTM - HATTON TRAFFIC MANAGEMENT - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.4--FVVhGT62O7VqORc17LA"}, // 0D.SUB-CONTRACTORs - HTM - HATTON TRAFFIC MANAGEMENT  WIP
    {folderName:"NOS - NICOL OF SKENE - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.Lu6RU8hqS3qoab2zEpgSoQ"}, // 0D.SUB-CONTRACTORs - NOS - BAKER HICKS  WIP
    {folderName:"WIN - WINGATE - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.PM3ASkyKTYed__3kzLcA7w"} // 0D.SUB-CONTRACTORs - WIN - WINGATE  WIP
]

const StatesList = [
    { code: "S0", description: "S0 In Progress" },
    { code: "S1", description: "S1 Coordination" },
    { code: "S2", description: "S2 For Information" },
    { code: "S3", description: "S3 Review comment" },
    { code: "S4", description: "S4 Review Approve" },
    { code: "S5", description: "S5 Review Accept" },
    { code: "A0", description: "A0 Strategic Definition" },
    { code: "A1", description: "A1 Approval Acceptance" },
    { code: "A2", description: "A2 Concept Design" },
    { code: "A3", description: "A3 Spatial Co-ordination" },
    { code: "A4", description: "A4 ApprovedAccepted Construction" },
    { code: "A5", description: "A5 ApprovedAcceptedConstructRec" },
    { code: "A6", description: "A6 Handover Closeout" },
    { code: "A7", description: "A7 Operation End of Life" }
];

const searchFolders =[
    "urn:adsk.wipemea:fs.folder:co.TTt9faNOTnGEWOC8ji055g", // 0C.KELTBRAY - WIP
    "urn:adsk.wipemea:fs.folder:co.rDjdwZHFSp6Ee1BQ5rl3CQ", // 0D.SUB-CONTRACTORs - ALP - ALPHA FENCING  WIP
    "urn:adsk.wipemea:fs.folder:co.C7KA83Y2Q-KlPVGuXZXS3Q", // 0D.SUB-CONTRACTORs - BHS - BAKER HICKS  WIP
    "urn:adsk.wipemea:fs.folder:co.L0VYCzIuRbqv0DLEHkBjtw", // 0D.SUB-CONTRACTORs - CLE - CLEVELAND  WIP
    "urn:adsk.wipemea:fs.folder:co.sEmzYxJ-Tu2yRWVXgkJCuQ", // 0D.SUB-CONTRACTORs - DSC - DAVID SMITH CONTRACTORS  WIP
    "urn:adsk.wipemea:fs.folder:co.WG2nMXrER3iYLE5sSrBlKg", // 0D.SUB-CONTRACTORs - GRM - GRAMPIAN GEOTECHNICAL  WIP
    "urn:adsk.wipemea:fs.folder:co.4--FVVhGT62O7VqORc17LA", // 0D.SUB-CONTRACTORs - HTM - HATTON TRAFFIC MANAGEMENT  WIP
    "urn:adsk.wipemea:fs.folder:co.Lu6RU8hqS3qoab2zEpgSoQ", // 0D.SUB-CONTRACTORs - NOS - NICOL OF SKENE  WIP
    "urn:adsk.wipemea:fs.folder:co.PM3ASkyKTYed__3kzLcA7w", // 0D.SUB-CONTRACTORs - WIN - WINGATE  WIP
    "urn:adsk.wipemea:fs.folder:co.ouxOilcSTm2z9mimcuUQrw", // 0E.SHARED
    "urn:adsk.wipemea:fs.folder:co.1U7RIHcTQhK0MuiFVKmBBw", // 0F.CLIENT_SHARED
    //"urn:adsk.wipemea:fs.folder:co.fI4I2_NUQCab66s_Ifswow", // 0G.PUBLISHED
    "urn:adsk.wipemea:fs.folder:co.UuWWDGCXTsOeTF98U6pIuw", // 0H.ARCHIVED
]

const tooltips = [
    { value: "Project Pin", tooltip: "The ‘project pin’ identifier code indicates that a document is related to a specific project to control its placement and management within the project folder structure where more than one project identification number may be in use" },
    { value: "Originator", tooltip: "The ‘originator’ (company) identifier code serves to identify which company has created a document. They are ultimately accountable for the document and liable for its content through the lifecycle of the project" },
    { value: "Function", tooltip: "The ‘function’ (volume) identifier code clearly defines the required profession to allow the user to better understand the documents relevance without having to open it" },
    { value: "Spatial", tooltip: "The ‘spatial’ (location) identifier code provides the user with a clear location the document content relates to. This code can be used to understand for instance if the document relates to a site compound, battery island or junction" },
    { value: "Form", tooltip: "The ‘form’ (type) identifier code indicates to the user the type of document it is, for example a report (RP), a drawing (DR) or 2D Model (M2)" },
    { value: "Discipline", tooltip: "The ‘discipline’ (Task Team) identifier code gives a user information on who the responsible team/discipline is, who have generated the document’ content and are accountable for it" }
];

var AccessToken_DataCreate
var AccessToken_DataRead
var AccessToken_BucketCreate

let namingstandard;
let filelist =[];
let arrayContractCode=[];
let arrayOriginatorCode=[];
let arrayfunction=[];
let arrayLocationCode=[];
let arraySequenceCode=[];
let arraySubjectDiscipline=[];
let arrayDocType =[];
let SubjectDiscipline
let docTypeSelector
let ContractCode
let OriginatorCode
let vFunction
let LocationCode
let DocTypeDocument
let DocTypeDrawing
let varDocNumber_noNum
let varDocNumber_Full
let ACCFileName

let objectKeyShort
let objectKeyLong
let fileData
let filename
let customAttributes =[]
let templates = []

let titlelineID
let revisionCodeID
let revisionDescID
let statusCodeID
let ClassificationID
let StatusCodeDescriptionID
let FileDescriptionID
let StateID
let ClientFileNameID

let fileURN
let fileExtension
let progressCount = 0
let uploadbutton
let templatesList =[];
let originSelectionDropdown
let templateDropdwon
let copyURN
let copyURN_Raw
let uploadFolderID
let fileTemplate
let reloadButton
let loadingScreen

let checkbox
let manualSequence
let manualSequencetext


document.addEventListener('DOMContentLoaded', function() {
    uploadbutton = document.getElementById('viewfile_btn');
    originSelectionDropdown = document.getElementById('input_file_origin');
    droparea = document.getElementById('drop-area')
    templateDropdwon = document.getElementById('templatesDropdown');
    reloadButton = document.getElementById('reloadButton');
    docTypeSelector = document.getElementById('input_file_type')

    ContractCode = document.querySelector('#ProjectPin_input')
    OriginatorCode = document.querySelector("#Originator_input")
    vFunction = document.querySelector('#Function_input')
    LocationCode = document.querySelector("#Spatial_input")
    DocTypeDocument = document.querySelector("#DocTypeDocument_input")
    DocTypeDrawing = document.querySelector("#DocTypeDrawing_input")
    SubjectDiscipline = document.querySelector("#Discipline_input")
    tooltipQuestion = document.querySelectorAll('.fa-circle-question')

    checkbox = document.getElementById('checkbox1');
    manualSequence = document.getElementById('manualSequence');
    manualSequencetext = document.getElementById('manualSequencetext')
    // Add a click event listener to the button
    reloadButton.addEventListener('click', function() {
        // Reload the page
        location.reload();
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    });

    originSelectionDropdown.addEventListener('change', function() {
        // This function will be called whenever the dropdown value changes
        templateDropdwon.style.display = 'none'
        droparea.style.display = 'none'
        //console.log('Selected option:', originSelectionDropdown.value);
        // You can perform any actions you need here
        if(originSelectionDropdown.value === "Template Folder"){
            templateDropdwon.style.display = 'block'
        }else if(originSelectionDropdown.value === "User PC"){
            droparea.style.display = 'block'
        }
      });
    // Add event listener to each help icon
    tooltipQuestion.forEach(function(icon) {
        icon.addEventListener('click', function() {
        var index = this.getAttribute("value");
        displayMessage = lookupTooltip(index, tooltips)
        alert(displayMessage);
        });
    });

    function lookupTooltip(valueToFind, array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].value === valueToFind) {
                return array[i].tooltip;
            }
        }
        return "Tooltip not found"; // Return a default message if the value is not found
    }
  


});






