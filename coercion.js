/** 
 * Primitive Types - (literals)
 * Natives 
 * Coercion
**/

function initUI() {
    $workEntryForm = $("[rel*=js-work-entry-form]"); 
    $workEntrySelectProject = $workEntryForm.find("[rel*=js-select-project]");
    $workEntryDescription = $workEntryForm.find("[rel*=js-work-description]");
    $workEntryTime = $workEntryForm.find("[rel*=js-work-time]");
    $workEntrySubmit = $workEntryForm.find("[rel*=js-submit-work-entry]");
    $totalTime = $("[rel*=js-total-work-time]");
    $projectList = $("[rel*=js-project-list]");

    var handleClick = function() { 
        var projectId = $workEntrySelectProject.val(); 
        var description = $workEntryDescription.val(); 
        var minutes = $workEntryTime.val(); 

        if (!validateWorkEntry(description, minutes)) { 
            alert("Oops, bad entry. Try again."); 
            $workEntryDescription[0].focus(); 
            return; 
        }

        $workEntryDescription.val("");
        $workEntryTime.val(""); 
        addWorkToProject(Number(projectId), description, Number(minutes)); 
        $workEntryDescription[0].focus(); 
    }; 
    $workEntrySubmit.on("click", handleClick);
}

function validateWorkEntry(description, minutes) {
    if (description.length < 5) return false;
    if (
        /^\s*$/.test(minutes) || 
        Number.isNaN(Number(minutes)) || 
        minutes < 0 || 
        minutes > 600 
    ) {
        return false;
    }

    return true;
} 

function addProject(description) {
    var projectId = Math.round(Math.random()*1E4); 
    var projectEntryData = { id: projectId, description: description, work: [], time: 0 }; 
    projects.push(projectEntryData);

    addProjectToList(projectEntryData); 
    addProjectSelection(projectEntryData); 
}

function addProjectToList(projectEntryData) {
    var $project = $(projectTemplate);
    $project.attr("data-project-id", projectEntryData.id);
    $project.find("[rel*=js-project-description]").text(projectEntryData.description); 
    $projectList.append($project);

    projectEntryData.$element = $project; 
} 

function addProjectSelection(projectEntryData) {
    var $option = $("<option></option>");
    $option.attr("value", projectEntryData.id); 
    $option.text(projectEntryData.description);
    $workEntrySelectProject.append($option);
} 

function findProjectEntry(projectId) {
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === projectId) {
            return projects[i];
        } 
    }
} 


