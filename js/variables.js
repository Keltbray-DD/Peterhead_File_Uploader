const projectID = "e119c525-f9f1-44a2-86db-9e4bb07a18fa";
const namingstandardID ="d5a0e865-dea7-532e-b4c8-dfbcbb8b36cd"
const hubID= "b.24d2d632-e01b-4ca0-b988-385be827cb04"
const bucketKey = "wip.dm.emea.2"
const defaultFolder = "urn:adsk.wipemea:fs.folder:co.TTt9faNOTnGEWOC8ji055g" // KELTBRAY - WIP Folder
const templateFolderID = "urn:adsk.wipemea:fs.folder:co.l8r6vS_BQ_GkrVQzgTrQzw" // APPROVED_TEMPLATES Folder

const uploadfolders = [
    {folderName:"KELTBRAY - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.TTt9faNOTnGEWOC8ji055g"},
    {folderName:"BHS - BAKER HICKS - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.C7KA83Y2Q-KlPVGuXZXS3Q"}, // 0D.SUB-CONTRACTORs - BHS - BAKER HICKS  WIP
    {folderName:"GRM - GRAMPIAN GEOTECHNICAL - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.WG2nMXrER3iYLE5sSrBlKg"}, // 0D.SUB-CONTRACTORs - GRM - GRAMPIAN GEOTECHNICAL  WIP
    {folderName:"HTM - HATTON TRAFFIC MANAGEMENT - WIP",folderID:"urn:adsk.wipemea:fs.folder:co.4--FVVhGT62O7VqORc17LA"}, // 0D.SUB-CONTRACTORs - HTM - HATTON TRAFFIC MANAGEMENT  WIP
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
    { code: "A4", description: "A4 Approved Accepted Construction" },
    { code: "A5", description: "A5 Approved Accepted Construct Rec" },
    { code: "A6", description: "A6 Handover Closeout" },
    { code: "A7", description: "A7 Operation End of Life" }
];

const searchFolders =[
    "urn:adsk.wipemea:fs.folder:co.TTt9faNOTnGEWOC8ji055g", // 0C.KELTBRAY - WIP
    "urn:adsk.wipemea:fs.folder:co.C7KA83Y2Q-KlPVGuXZXS3Q", // 0D.SUB-CONTRACTORs - BHS - BAKER HICKS  WIP
    "urn:adsk.wipemea:fs.folder:co.WG2nMXrER3iYLE5sSrBlKg", // 0D.SUB-CONTRACTORs - GRM - GRAMPIAN GEOTECHNICAL  WIP
    "urn:adsk.wipemea:fs.folder:co.4--FVVhGT62O7VqORc17LA", // 0D.SUB-CONTRACTORs - HTM - HATTON TRAFFIC MANAGEMENT  WIP
    "urn:adsk.wipemea:fs.folder:co.PM3ASkyKTYed__3kzLcA7w", // 0D.SUB-CONTRACTORs - WIN - WINGATE  WIP
    "urn:adsk.wipemea:fs.folder:co.ouxOilcSTm2z9mimcuUQrw", // 0E.SHARED
    "urn:adsk.wipemea:fs.folder:co.1U7RIHcTQhK0MuiFVKmBBw", // 0F.CLIENT_SHARED
    //"urn:adsk.wipemea:fs.folder:co.fI4I2_NUQCab66s_Ifswow", // 0G.PUBLISHED
    "urn:adsk.wipemea:fs.folder:co.UuWWDGCXTsOeTF98U6pIuw", // 0H.ARCHIVED
]

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


});






