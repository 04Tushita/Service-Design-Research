/**
 * Maps Interactive Controller
 * Handles map tab switches, phase node selection, canvas toolbar, and detail panel updates.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Map phase dataset
  const phaseData = {
    1: {
      tag: 'PHASE 01',
      name: 'Initial Trigger & Discovery',
      summary: 'Stakeholder identifies service requirement or regulatory compliance threshold. First interaction with organizational discovery channels.',
      pains: [
        'Ambiguous guidelines on eligibility prerequisites',
        'Difficulty finding primary point-of-contact'
      ],
      gains: [
        'Clear central landing documentation',
        'Immediate self-assessment checklist'
      ],
      evidence: [
        { label: 'Interview 1', quote: 'I searched for two hours just trying to find who owned this process.' },
        { label: 'Interview 3', quote: 'The initial documentation was clearly written for lawyers, not service coordinators.' }
      ]
    },
    2: {
      tag: 'PHASE 02',
      name: 'Information Gathering & Scoping',
      summary: 'Cross-functional data collation across legacy spreadsheets, departmental drives, and email threads.',
      pains: [
        'Siloed document repositories with incompatible file schemas',
        'Repetitive manual data reentry across departments'
      ],
      gains: [
        'Unified multi-party upload inbox',
        'Real-time dependency validation'
      ],
      evidence: [
        { label: 'Interview 2', quote: 'I have to ask three different team leads for the exact same metric every quarter.' }
      ]
    },
    3: {
      tag: 'PHASE 03',
      name: 'Intake Submission & Hand-off',
      summary: 'Formal submission into the centralized service queue. Transition from user control into institutional review black box.',
      pains: [
        'Zero visibility into queue depth or estimated lead time',
        'No confirmation receipt detailing assigned reviewer'
      ],
      gains: [
        'Instant tracking token with live progress bar',
        'Automated review SLA commitment'
      ],
      evidence: [
        { label: 'Interview 1', quote: 'Once you hit submit, it disappears into a black hole for weeks.' },
        { label: 'Interview 4', quote: 'I never know if anyone even opened my ticket until I call them.' }
      ]
    },
    4: {
      tag: 'PHASE 04',
      name: 'Verification & Cross-Department Audit',
      summary: 'Internal review team cross-examines submitted artifacts against legal and operational guidelines.',
      pains: [
        'Single error kicks entire packet back to stage 1',
        'Asynchronous ping-pong over email without version control'
      ],
      gains: [
        'Inline annotations allowing targeted corrections',
        'Grace period for minor non-blocking edits'
      ],
      evidence: [
        { label: 'Interview 3', quote: 'One wrong checkbox delayed our launch by an entire month.' }
      ]
    },
    5: {
      tag: 'PHASE 05',
      name: 'Conditional Approval & Stakeholder Signoff',
      summary: 'Formal sign-off by executive sponsors and service department managers.',
      pains: [
        'Sign-off dependencies stall during executive travel',
        'Lack of automated escalation triggers'
      ],
      gains: [
        'Delegated authority settings & mobile 1-click approvals',
        'Transparent escalation countdown'
      ],
      evidence: [
        { label: 'Interview 2', quote: 'Waiting on one signature while everyone else is ready is infuriating.' }
      ]
    },
    6: {
      tag: 'PHASE 06',
      name: 'Service Activation & Provisioning',
      summary: 'Technical setup, resource allocation, and credential issuance.',
      pains: [
        'Credentials sent in uncoordinated separate emails',
        'Missing day-one onboarding guide'
      ],
      gains: [
        'Unified welcome portal with guided launch walk-through',
        'Pre-configured templates ready for immediate usage'
      ],
      evidence: [
        { label: 'Interview 4', quote: 'I had the login but no permissions to access the actual workspace.' }
      ]
    },
    7: {
      tag: 'PHASE 07',
      name: 'Ongoing Maintenance & Support',
      summary: 'Day-to-day operations, service ticket inquiries, and routine adjustments.',
      pains: [
        'Generic chatbots providing irrelevant boilerplate answers',
        'Re-explaining context every time an issue is escalated'
      ],
      gains: [
        'Persistent case history attached to all interactions',
        'Dedicated tier-2 contact routing'
      ],
      evidence: [
        { label: 'Interview 1', quote: 'Having to recount the entire backstory to four different reps is exhausting.' }
      ]
    },
    8: {
      tag: 'PHASE 08',
      name: 'Review, Renewal & Offboarding',
      summary: 'Periodic health audit, contract renewal assessment, or service decommissioning.',
      pains: [
        'Surprise renewal deadlines with no advance notice',
        'Difficult data export processes'
      ],
      gains: [
        '90-day predictive review prompts',
        'One-click automated audit summary exports'
      ],
      evidence: [
        { label: 'Interview 4', quote: 'We only realized our license expired when our users got locked out.' }
      ]
    }
  };

  // Map Tab Switching
  const mapTabs = document.querySelectorAll('.map-tab-btn');
  const breadcrumbSub = document.querySelector('.breadcrumb-sub');
  const mapTitle = document.querySelector('.map-viewport-title');
  const mapSubtitle = document.querySelector('.map-viewport-subtitle');

  mapTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      mapTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const mapType = tab.getAttribute('data-map');
      if (breadcrumbSub) {
        breadcrumbSub.textContent = tab.textContent;
      }

      if (mapTitle && mapSubtitle) {
        if (mapType === 'mindmap') {
          mapTitle.textContent = 'Service Ecosystem Mind Map';
          mapSubtitle.textContent = 'Relational clustering of organizational entities, dependencies, and communication vectors.';
        } else if (mapType === 'userflow') {
          mapTitle.textContent = 'Linear Task User Flow';
          mapSubtitle.textContent = 'Step-by-step decision hierarchy and error-branching pathways through the intake service.';
        } else {
          mapTitle.textContent = 'End-to-End Service Journey Map';
          mapSubtitle.textContent = 'Chronological narrative mapping touchpoints, emotional cadence, and friction moments across 8 phases.';
        }
      }
    });
  });

  // Phase node clicking & detail panel updating
  const phaseNodes = document.querySelectorAll('.phase-node');
  const detailTag = document.querySelector('.detail-stage-tag');
  const detailName = document.querySelector('.detail-stage-name');
  const detailSummary = document.querySelector('.detail-stage-summary');
  const painsList = document.querySelector('.detail-pains-list');
  const gainsList = document.querySelector('.detail-gains-list');
  const evidenceTags = document.querySelector('.evidence-tags');

  function updateDetailPanel(phaseNum) {
    const data = phaseData[phaseNum];
    if (!data) return;

    if (detailTag) detailTag.textContent = data.tag;
    if (detailName) detailName.textContent = data.name;
    if (detailSummary) detailSummary.textContent = data.summary;

    if (painsList) {
      painsList.innerHTML = data.pains.map(p => `<li>${p}</li>`).join('');
    }

    if (gainsList) {
      gainsList.innerHTML = data.gains.map(g => `<li>${g}</li>`).join('');
    }

    if (evidenceTags) {
      evidenceTags.innerHTML = data.evidence.map(e => `
        <button class="evidence-chip" title="${e.quote}">
          ${e.label}
        </button>
      `).join('');
    }
  }

  phaseNodes.forEach(node => {
    node.addEventListener('click', () => {
      phaseNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      const phaseNum = node.getAttribute('data-phase');
      updateDetailPanel(phaseNum);
    });
  });

  // Canvas toolbar zoom simulation
  let zoomLevel = 100;
  const zoomInBtn = document.querySelector('.zoom-in-btn');
  const zoomOutBtn = document.querySelector('.zoom-out-btn');
  const zoomFitBtn = document.querySelector('.zoom-fit-btn');
  const zoomIndicator = document.querySelector('.zoom-indicator');
  const mapCanvasArea = document.querySelector('.map-canvas-viewport');

  function updateZoom(newZoom) {
    zoomLevel = Math.max(60, Math.min(160, newZoom));
    if (zoomIndicator) zoomIndicator.textContent = `${zoomLevel}%`;
    const card = document.querySelector('.map-canvas-placeholder-card');
    if (card) {
      card.style.transform = `scale(${zoomLevel / 100})`;
      card.style.transition = 'transform 0.15s ease';
    }
  }

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => updateZoom(zoomLevel + 15));
  }
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => updateZoom(zoomLevel - 15));
  }
  if (zoomFitBtn) {
    zoomFitBtn.addEventListener('click', () => updateZoom(100));
  }

  // Trace Interviewees Toggle
  const traceBtn = document.querySelector('.trace-interviewees-btn');
  let tracingActive = false;
  if (traceBtn) {
    traceBtn.addEventListener('click', () => {
      tracingActive = !tracingActive;
      traceBtn.classList.toggle('btn-primary', tracingActive);
      traceBtn.classList.toggle('btn-secondary', !tracingActive);
      traceBtn.textContent = tracingActive ? '✓ Tracing Active' : 'Trace Interviewees';

      phaseNodes.forEach(node => {
        if (tracingActive) {
          node.style.boxShadow = '0 0 0 3px rgba(40, 167, 69, 0.4)';
        } else {
          node.style.boxShadow = 'none';
        }
      });
    });
  }

  // Initial load
  updateDetailPanel(1);
});
