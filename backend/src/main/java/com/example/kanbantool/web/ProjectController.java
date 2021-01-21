package com.example.kanbantool.web;

import com.example.kanbantool.domain.Project;
import com.example.kanbantool.services.ValidationErrorService;
import com.example.kanbantool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;
    @Autowired
    private ValidationErrorService validationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result) {
        ResponseEntity<?> errorMap = validationErrorService.mapValidationErrorService(result);

        if (errorMap != null) {
            return errorMap;
        }

        Project persistedProject = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<>(persistedProject, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId) {
        Project project = projectService.findProjectByIdentifier(projectId);

        return new ResponseEntity<>(project, HttpStatus.OK);
    }
}
