$(document).ready(function() {
  // Selectors
  var $stepn = $('#step-n');
  var $stepnext = $('#step-next');
  var $stepprev = $('#step-prev');

  var $doctor = $('#doctor');
  var $patients = $('#patients');
  var $mutex = $('#mutex');
  var $waiting = $('#waiting');
  var $status = $('#status');
  var $doctorbed = $('#doctorbed');

  // Default number of beds
  var beds = 5;

  // Initializes number of current step
  var step = 1;

  // JSON object containing all simulated steps of the Sleeping doctor
  // problem with 5 beds
  var steps = [
  {
    doctor: 0,
    patients: [],
    mutex: 0,
    waiting: 0,
    bed: '',
    status: 'clinic open for business... even if the doctor is sleeping.',
    active: 0,
    patient: "",
    status_doctor: 0,
    status_patient: 0,
    line_doctor: "3",
    line_patient: ""
  },
  {
    doctor: 0,
    patients: ['patient #1'],
    mutex: 1,
    waiting: 0,
    bed: '',
    status: 'patient #1 arrives and locks the mutex to see if they will wait.',
    active: 1,
    patient: "1",
    status_doctor: 0,
    status_patient: 2,
    line_doctor: "3",
    line_patient: "2-3"
  },
  {
    doctor: 0,
    patients: ['patient #1'],
    mutex: 0,
    waiting: 1,
    bed: '',
    status: 'patient #1 sits down and releases the mutex.',
    active: 1,
    patient: "1",
    status_doctor: 0,
    status_patient: 1,
    line_doctor: "3",
    line_patient: "4-7"
  },
  {
    doctor: 1,
    patients: ['patient #1'],
    mutex: 1,
    waiting: 1,
    bed: '',
    status: 'doctor sees a patient, locks the mutex and calls the patient.',
    active: 0,
    patient: "1",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "4-5",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: [],
    mutex: 0,
    waiting: 0,
    bed: 'patient #1',
    status: 'doctor walks patient #1 to the doctor\'s bed and releases the mutex.',
    active: 0,
    patient: "1",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "6-7",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #2'],
    mutex: 1,
    waiting: 0,
    bed: 'patient #1',
    status: 'patient #2 arrives and locks the mutex to see if they will wait.',
    active: 1,
    patient: "2",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "7",
    line_patient: "2-3"
  },
  {
    doctor: 1,
    patients: ['patient #2'],
    mutex: 0,
    waiting: 1,
    bed: 'patient #1',
    status: 'patient #2 sits down and releases the mutex.',
    active: 1,
    patient: "2",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "7",
    line_patient: "4-7"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3'],
    mutex: 1,
    waiting: 1,
    bed: 'patient #1',
    status: 'patient #3 arrives and locks the mutex to see if they will wait.',
    active: 1,
    patient: "3",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "7",
    line_patient: "2-3"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3'],
    mutex: 0,
    waiting: 2,
    bed: 'patient #1',
    status: 'patient #3 sits down and releases the mutex.',
    active: 1,
    patient: "3",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "7",
    line_patient: "4-7"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #4'],
    mutex: 1,
    waiting: 2,
    bed: 'patient #1',
    status: 'patient #4 arrives and locks the mutex to see if they will wait.',
    active: 1,
    patient: "4",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "7",
    line_patient: "2-3"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #4'],
    mutex: 0,
    waiting: 3,
    bed: 'patient #1',
    status: 'patient #4 sits down and releases the mutex.',
    active: 1,
    patient: "4",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "7",
    line_patient: "4-7"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #4'],
    mutex: 0,
    waiting: 3,
    bed: '',
    status: 'doctor finishes Treating patient #1\'s .',
    active: 0,
    patient: "4",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "8",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #4'],
    mutex: 0,
    waiting: 3,
    bed: '',
    status: 'patient #1 leaves the clinic.',
    active: 1,
    patient: "1",
    status_doctor: 1,
    status_patient: 3,
    line_doctor: "8",
    line_patient: "13"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #4', 'patient #5'],
    mutex: 1,
    waiting: 3,
    bed: '',
    status: 'patient #5 arrives and locks the mutex to see if they will wait.',
    active: 1,
    patient: "5",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "2-3"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #4', 'patient #5'],
    mutex: 0,
    waiting: 4,
    bed: '',
    status: 'patient #5 sits down and releases the mutex.',
    active: 1,
    patient: "5",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "8",
    line_patient: "4-7"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #4', 'patient #5'],
    mutex: 1,
    waiting: 4,
    bed: '',
    status: 'doctor sees a patient, locks the mutex and calls the patient.',
    active: 0,
    patient: "5",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "4-5",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #5'],
    mutex: 0,
    waiting: 3,
    bed: 'patient #4',
    status: 'doctor walks patient #4 to the doctor\'s bed and releases the mutex.',
    active: 0,
    patient: "5",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "6-7",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #5'],
    mutex: 0,
    waiting: 3,
    bed: '',
    status: 'doctor finishes Treating patient #4\'s .',
    active: 0,
    patient: "5",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "8",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #5'],
    mutex: 0,
    waiting: 3,
    bed: '',
    status: 'patient #4 leaves the clinic.',
    active: 1,
    patient: "4",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "13"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #5', 'patient #6'],
    mutex: 1,
    waiting: 3,
    bed: '',
    status: 'patient #6 arrives and locks the mutex to see if they will wait.',
    active: 1,
    patient: "6",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "2-3"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #5', 'patient #6'],
    mutex: 0,
    waiting: 4,
    bed: '',
    status: 'patient #6 sits down and releases the mutex.',
    active: 1,
    patient: "6",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "8",
    line_patient: "4-7"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #5', 'patient #6', 'patient #7'],
    mutex: 1,
    waiting: 4,
    bed: '',
    status: 'patient #7 arrives and locks the mutex to see if they will wait.',
    active: 1,
    patient: "7",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "2-3"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #5', 'patient #6', 'patient #7'],
    mutex: 0,
    waiting: 5,
    bed: '',
    status: 'patient #7 sits down and releases the mutex.',
    active: 1,
    patient: "7",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "8",
    line_patient: "4-7"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #5', 'patient #6', 'patient #7'],
    mutex: 1,
    waiting: 5,
    bed: '',
    status: 'patient #8 arrives and locks the mutex to see if they will wait.',
    active: 1,
    patient: "8",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "2-3"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #5', 'patient #6', 'patient #7'],
    mutex: 0,
    waiting: 5,
    bed: '',
    status: 'patient #8 sees the full waiting room, releases the mutex and leaves.',
    active: 1,
    patient: "8",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "10-13"
  },
  {
    doctor: 1,
    patients: ['patient #2', 'patient #3', 'patient #5', 'patient #6', 'patient #7'],
    mutex: 1,
    waiting: 4,
    bed: '',
    status: 'doctor sees a patient, locks the mutex and calls the patient.',
    active: 0,
    patient: "5",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "4-5",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #3', 'patient #5', 'patient #6', 'patient #7'],
    mutex: 0,
    waiting: 4,
    bed: 'patient #2',
    status: 'doctor walks patient #2 to the doctor\'s bed and releases the mutex.',
    active: 0,
    patient: "2",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "6-7",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #3', 'patient #5', 'patient #6', 'patient #7'],
    mutex: 0,
    waiting: 4,
    bed: '',
    status: 'doctor finishes Treating patient #2\'s .',
    active: 0,
    patient: "2",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "8"
  },
  {
    doctor: 1,
    patients: ['patient #3', 'patient #5', 'patient #6', 'patient #7'],
    mutex: 0,
    waiting: 4,
    bed: '',
    status: 'patient #2 leaves the clinic.',
    active: 1,
    patient: "2",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "13"
  },
  {
    doctor: 1,
    patients: ['patient #3', 'patient #5', 'patient #6', 'patient #7'],
    mutex: 1,
    waiting: 3,
    bed: '',
    status: 'doctor sees a patient, locks the mutex and calls the patient.',
    active: 0,
    patient: "5",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "4-5",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #3', 'patient #6', 'patient #7'],
    mutex: 0,
    waiting: 3,
    bed: 'patient #5',
    status: 'doctor walks patient #5 to the doctor\'s bed and releases the mutex.',
    active: 0,
    patient: "5",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "6-7",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #3', 'patient #6', 'patient #7'],
    mutex: 0,
    waiting: 3,
    bed: '',
    status: 'doctor finishes Treating patient #5\'s .',
    active: 0,
    patient: "5",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "8"
  },
  {
    doctor: 1,
    patients: ['patient #3', 'patient #6', 'patient #7'],
    mutex: 0,
    waiting: 3,
    bed: '',
    status: 'patient #5 leaves the clinic.',
    active: 1,
    patient: "5",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "13"
  },
  {
    doctor: 1,
    patients: ['patient #3', 'patient #6', 'patient #7'],
    mutex: 1,
    waiting: 2,
    bed: '',
    status: 'doctor sees a patient, locks the mutex and calls the patient.',
    active: 0,
    patient: "3",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "4-5",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #6', 'patient #7'],
    mutex: 0,
    waiting: 2,
    bed: 'patient #3',
    status: 'doctor walks patient #3 to the doctor\'s bed and releases the mutex.',
    active: 0,
    patient: "3",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "6-7",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #6', 'patient #7'],
    mutex: 0,
    waiting: 2,
    bed: '',
    status: 'doctor finishes Treating patient #3\'s .',
    active: 0,
    patient: "3",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "8"
  },
  {
    doctor: 1,
    patients: ['patient #6', 'patient #7'],
    mutex: 0,
    waiting: 2,
    bed: '',
    status: 'patient #3 leaves the clinic.',
    active: 1,
    patient: "3",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "13"
  },
  {
    doctor: 1,
    patients: ['patient #6', 'patient #7'],
    mutex: 1,
    waiting: 1,
    bed: '',
    status: 'doctor sees a patient, locks the mutex and calls the patient.',
    active: 0,
    patient: "7",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "4-5",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #6'],
    mutex: 0,
    waiting: 1,
    bed: 'patient #7',
    status: 'doctor walks patient #7 to the doctor\'s bed and releases the mutex.',
    active: 0,
    patient: "7",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "6-7",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: ['patient #6'],
    mutex: 0,
    waiting: 1,
    bed: '',
    status: 'doctor finishes Treating patient #7\'s .',
    active: 0,
    patient: "7",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "8"
  },
  {
    doctor: 1,
    patients: ['patient #6'],
    mutex: 0,
    waiting: 1,
    bed: '',
    status: 'patient #7 leaves the clinic.',
    active: 1,
    patient: "7",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "13"
  },
  {
    doctor: 1,
    patients: ['patient #6'],
    mutex: 1,
    waiting: 0,
    bed: '',
    status: 'doctor sees a patient, locks the mutex and calls the patient.',
    active: 0,
    patient: "6",
    status_doctor: 1,
    status_patient: 1,
    line_doctor: "4-5",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: [],
    mutex: 0,
    waiting: 0,
    bed: 'patient #6',
    status: 'doctor walks patient #6 to the doctor\'s bed and releases the mutex.',
    active: 0,
    patient: "6",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "6-7",
    line_patient: "7"
  },
  {
    doctor: 1,
    patients: [],
    mutex: 0,
    waiting: 0,
    bed: '',
    status: 'doctor finishes Treating patient #6\'s .',
    active: 0,
    patient: "6",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "8"
  },
  {
    doctor: 1,
    patients: [],
    mutex: 0,
    waiting: 0,
    bed: '',
    status: 'patient #6 leaves the clinic.',
    active: 1,
    patient: "6",
    status_doctor: 1,
    status_patient: 2,
    line_doctor: "8",
    line_patient: "13"
  },
  {
    doctor: 0,
    patients: [],
    mutex: 0,
    waiting: 0,
    bed: '',
    status: 'doctor sees no patients and instantly falls asleep.',
    active: 0,
    patient: "",
    status_doctor: 0,
    status_patient: 0,
    line_doctor: "3",
    line_patient: ""
  },
  ]



  // Functions

  // Highlights lines from Prism <pre><code> block
  // id (string): id from <pre> element
  // lines (string): lines to highlight in the following format:
  //   "1" - line 1
  //   "2-5" - lines 2 to 5
  //   "3,6" - lines 3 and 6
  var highlightLines = function(id, lines) {
    $(id).attr("data-line", lines);
    
    // Fixes newline being appended at the end of the code by .attr
    $(id + " :first-child").text($(id).text().trim());

    Prism.highlightElement($(id + " :first-child")[0]);
  }

  // Loads the nth step of the visualization
  var loadStep = function(n) {
    // Update state table values
    $doctor.text(function() {
      if (steps[n-1]['doctor'] == 0) {
        return 'Sleeping';
      }
      else {
        return 'Awake';
      }
    });
    $patients.text(steps[n-1]['patients'].length);
    $mutex.text(function() {
      if (steps[n-1]['mutex'] == 0) {
        return 'Unlocked';
      }
      else {
        return 'Locked';
      }
    });
    $waiting.text(steps[n-1]['waiting']);
    $status.text(steps[n-1]['status']);
    $doctorbed.text(function() {
      if (steps[n-1]['bed']) {
        return steps[n-1]['bed'];
      }
      else {
        return '\xa0';
      }
    });

    // Fill the waiting room table with the patients
    // If a position is empty, put a space instead
    var patients = steps[n-1]['patients'];
    for (var i = 0; i < beds; i++) {
      $('#bed' + (i+1)).text(function() {
        if (patients[i]) {
          return patients[i];  
        }
        else {
          return '\xa0';
        }
      });
    }

    // Highlights current lines of each function on the code blocks
    highlightLines('#code-doctor', steps[n-1]['line_doctor']);
    highlightLines('#code-patient', steps[n-1]['line_patient']);

    // Toggles the doctor function's semaphore label
    if (steps[n-1]['status_doctor'] == 0) {
      $('#doctor-status').attr('class', 'label label-warning');
      $('#doctor-status').text('Waiting');
    }
    else {
      $('#doctor-status').attr('class', 'label label-success');
      $('#doctor-status').text('Running');
    }

    // Shows the id of the current patient function being displayed
    if (steps[n-1]['patient']) {
      $('#patient-current').show();
      $('#patient-current').text('patient #' + steps[n-1]['patient'])
    }
    else {
      $('#patient-current').hide();
    }

    // Toggles the patient's semaphore label
    if (steps[n-1]['status_patient'] == 0) {
      $('#patient-status').attr('class', 'label label-default');
      $('#patient-status').text('None Running');
    }
    else if (steps[n-1]['status_patient'] == 1) {
      $('#patient-status').attr('class', 'label label-warning');
      $('#patient-status').text('Waiting');
    }
    else {
      $('#patient-status').attr('class', 'label label-success');
      $('#patient-status').text('Running');
    }

    // Toggles the active thread label
    if (steps[n-1]['active'] == 0) {
      $('#doctor-active').show();
      $('#patient-active').hide();
    }
    else {
      $('#doctor-active').hide();
      $('#patient-active').show();
    }


    // Update step number in navigation buttons
    $stepn.text(step + '/' + steps.length);
  }

  // Resets visualization to the first step
  var resetVisualization = function() {
    step = 1;
    loadStep(1);
    $('#beds').text(beds);
  }



  // Event Listeners

  // Previous and next step button handlers
  $stepnext.click(function() {
    if (step < steps.length) {
      step += 1;
      loadStep(step);
    }
  });

  $stepprev.click(function() {
    if (step > 1) {
      step -= 1;
      loadStep(step);
    }
  });



  // Reset visualization after document loads
  resetVisualization();
});