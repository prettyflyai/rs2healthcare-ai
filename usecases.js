// Use-case generation for the MES Fall 2026 explorer.
// Source of truth is the research workbook (research.json, keyed by company).
// Each researched use case maps to a delivery archetype that supplies the build
// plan, the effort profile and the working prototype.

const S = (n, title, detail, duration) => ({ n, title, detail, duration });

export const ARCHETYPES = {
  maintenance: {
    tag: 'Asset reliability', build: '10–12 weeks', effort: '1 engineer, 1 reliability lead',
    roiPct: 0.0060, roiFloor: 320000, prototype: 'maintenance',
    steps: [
      S(1, 'Pick the assets that hurt', 'Highest downtime cost with existing instrumentation. Three assets, not the whole estate — the pilot has to be provable.', 'Weeks 1–2'),
      S(2, 'Bridge OT to a read-only lake', 'Historian, telemetry and CMMS exported through a one-way path. No inbound route to the control network at any point.', 'Weeks 3–4'),
      S(3, 'Label the historical failures', 'Maintenance records joined to telemetry turn generic anomalies into real failure signatures.', 'Weeks 5–6'),
      S(4, 'Run silent alongside the crew', 'Predictions logged, not acted on, and compared against what actually failed over four weeks.', 'Weeks 7–10'),
      S(5, 'Write windows into the CMMS', 'Confirmed predictions become scheduled work orders with parts reserved and the calendar respected.', 'Weeks 11–12')
    ]
  },
  copilot: {
    tag: 'Knowledge', build: '6–8 weeks', effort: '1 engineer, 1 domain owner',
    roiPct: 0.0034, roiFloor: 150000, prototype: 'copilot',
    steps: [
      S(1, 'Choose one domain', 'One department, one body of knowledge. Company-wide search projects are how these fail.', 'Week 1'),
      S(2, 'Curate before you index', 'Retire the superseded. A copilot grounded on stale documents is worse than no copilot.', 'Weeks 2–3'),
      S(3, 'Enforce citation and permissions', 'Every answer shows its source and respects the asker’s existing access. No exceptions.', 'Weeks 4–5'),
      S(4, 'Benchmark against your experts', 'Fifty real questions answered by senior staff set the bar. Ship only when the agent clears it.', 'Week 6'),
      S(5, 'Capture the gaps and expand', 'Unanswerable questions become a ranked documentation backlog; extend only where usage justifies it.', 'Weeks 7–8')
    ]
  },
  docs: {
    tag: 'Document automation', build: '8–10 weeks', effort: '1 engineer, 1 process SME',
    roiPct: 0.0048, roiFloor: 220000, prototype: 'docs',
    steps: [
      S(1, 'Collect two hundred real documents', 'Messy ones included. The scanned fax is the acceptance test, not the edge case.', 'Weeks 1–2'),
      S(2, 'Define the extraction schema', 'Every field the downstream system needs, each with a confidence score attached.', 'Weeks 3–4'),
      S(3, 'Encode the policy checks', 'Completeness, consistency and the exceptions currently living in one person’s head.', 'Weeks 5–6'),
      S(4, 'Human approves every output', 'The agent drafts, a person releases. Approval clicks are the training signal.', 'Weeks 7–8'),
      S(5, 'Auto-clear the confident tier', 'Only the highest-confidence, lowest-risk band clears straight through, with a full audit trail.', 'Weeks 9–10')
    ]
  },
  service: {
    tag: 'Customer operations', build: '6–8 weeks', effort: '1 engineer, 1 service lead',
    roiPct: 0.0040, roiFloor: 180000, prototype: 'service',
    steps: [
      S(1, 'Listen to a hundred contacts', 'Transcribe and cluster. The three highest-volume intents define scope; everything else transfers.', 'Week 1'),
      S(2, 'Connect the systems of record', 'The agent is only useful if it can read the schedule, the account and the order for real.', 'Weeks 2–3'),
      S(3, 'Build the handoff contract', 'Every transfer carries a summary and the person never repeats themselves. This is the trust test.', 'Week 4'),
      S(4, 'Launch after-hours first', 'Lowest risk, highest gratitude. Two weeks of overnight traffic proves the handling quality.', 'Weeks 5–6'),
      S(5, 'Open business hours with an escape hatch', 'Immediate opt-out to a human, containment published weekly.', 'Weeks 7–8')
    ]
  },
  forecast: {
    tag: 'Planning', build: '8–10 weeks', effort: '1 engineer, 1 planner',
    roiPct: 0.0048, roiFloor: 230000, prototype: 'forecast',
    steps: [
      S(1, 'Clean the history', 'Promotions, stockouts and one-off events tagged, or the model learns the wrong lesson.', 'Weeks 1–2'),
      S(2, 'Forecast at the right grain', 'Item-location-week with explicit uncertainty rather than a single confident number.', 'Weeks 3–5'),
      S(3, 'Turn forecast into a plan', 'Replenishment, transfer or roster proposals under real lead-time and labour constraints.', 'Weeks 6–7'),
      S(4, 'Planner in the loop', 'Planners accept, adjust or reject. Overrides are the feedback signal, tracked by reason.', 'Weeks 8–9'),
      S(5, 'Prove it on one category', 'Service level and turns compared against the prior year before extending.', 'Week 10')
    ]
  },
  dispatch: {
    tag: 'Operations', build: '8–10 weeks', effort: '1 engineer, dispatch lead',
    roiPct: 0.0052, roiFloor: 240000, prototype: 'dispatch',
    steps: [
      S(1, 'Model the real constraints', 'Certifications, stock, service windows, union rules. Omit one and dispatch will not trust it.', 'Weeks 1–2'),
      S(2, 'Optimise tomorrow, not today', 'Overnight scheduling first — the low-risk version of the same engine.', 'Weeks 3–5'),
      S(3, 'Add intraday re-optimisation', 'When a job overruns, the agent reshuffles and notifies the affected customers itself.', 'Weeks 6–7'),
      S(4, 'Brief the field', 'History, prior fixes and required parts on the technician’s phone before arrival.', 'Weeks 8–9'),
      S(5, 'Report against SLA', 'Weekly first-time-fix and window adherence by crew, published.', 'Week 10')
    ]
  },
  vision: {
    tag: 'Inspection', build: '10–12 weeks', effort: '1 engineer, 1 quality lead',
    roiPct: 0.0055, roiFloor: 280000, prototype: 'vision',
    steps: [
      S(1, 'Define the defect taxonomy', 'What counts as a defect, agreed in writing with quality before a single image is labelled.', 'Weeks 1–2'),
      S(2, 'Build the labelled set', 'Two thousand images across the real defect mix, including the rare classes that matter most.', 'Weeks 3–5'),
      S(3, 'Run alongside the inspector', 'The model scores in parallel without gating anything. Disagreements are the training set.', 'Weeks 6–8'),
      S(4, 'Gate only the confident calls', 'Auto-pass the clean high-confidence tier; every suspected defect still reaches a human.', 'Weeks 9–10'),
      S(5, 'Close the loop to the line', 'Defect trends routed to process engineering weekly — where the real margin recovery sits.', 'Weeks 11–12')
    ]
  },
  drafting: {
    tag: 'Revenue', build: '6–8 weeks', effort: '1 engineer, 1 practice lead',
    roiPct: 0.0045, roiFloor: 200000, prototype: 'drafting',
    steps: [
      S(1, 'Index what you have already won', 'Prior successful work becomes the corpus the draft is assembled from — never invented language.', 'Weeks 1–2'),
      S(2, 'Structure to the evaluation criteria', 'The draft follows the scoring rubric, section by section, so reviewers can score it.', 'Weeks 3–4'),
      S(3, 'Cite every reused claim', 'Each paragraph links the past project or approved source it came from.', 'Week 5'),
      S(4, 'Owner edits, agent never sends', 'The practice lead edits and signs. Turnaround and win rate are the only measures that count.', 'Weeks 6–7'),
      S(5, 'Feed outcomes back', 'Won and lost drafts re-rank the corpus so the next assembly is better sourced.', 'Week 8')
    ]
  },
  risk: {
    tag: 'Risk', build: '8–10 weeks', effort: '1 engineer, 1 analyst',
    roiPct: 0.0042, roiFloor: 200000, prototype: 'risk',
    steps: [
      S(1, 'Baseline what went wrong before', 'Twenty-four months of overruns, losses or incidents. The pattern is usually concentrated.', 'Weeks 1–2'),
      S(2, 'Assemble the signal set', 'Cost, schedule, transaction or behaviour data behind one retrieval interface the agent can query.', 'Weeks 3–4'),
      S(3, 'Score, explain, rank', 'Every flag carries the drivers behind it. An unexplained score is an ignored score.', 'Weeks 5–7'),
      S(4, 'Route to an owner with a clock', 'Flags become cases with an accountable owner and an expiry, not a dashboard.', 'Weeks 8–9'),
      S(5, 'Measure prevented loss', 'Track intervention outcomes against a holdout so the value is demonstrated, not asserted.', 'Week 10')
    ]
  }
};

// Company-specific programmes take precedence over the research workbook.
export const COMPANY_OVERRIDES = {
  'Cascade Environmental': [
    {
      id: 'cascade-field-report', prototype: 'cascade',
      name: 'Field-to-report documentation agent', tag: 'Operations',
      problemLabel: 'Problem', solutionLabel: 'AI solution',
      problem: 'Every drilling, sampling and remediation event generates field notes, boring logs, sample records, photographs and lab results that a scientist or project manager re-keys into a client or regulatory deliverable. The administrative hours are large, transcription errors are routine, and missing fields surface late — after the crew has demobilised.',
      solution: 'An agent that ingests structured and unstructured field data and produces a first draft of the project summary and client or regulatory report, flagging missing fields, inconsistent sample IDs, questionable depths and dates, absent photos and mismatches between field notes and lab data. The agent drafts; the scientist approves. It never makes the remediation call.',
      roiPct: 0.0065, roiFloor: 420000, build: '6–8 weeks', effort: '1 engineer, 1 project scientist',
      metrics: [['Hours per event report', '−3 hrs'], ['Transcription QA/QC effort', 'Materially reduced']],
      note: 'Benchmark: Arcadis FieldNow standardised digital field collection across 300+ sites and reported roughly three hours saved per event report, with reduced QA/QC and transcription error.',
      steps: [
        S(1, 'Baseline the report, not the technology', 'Time twenty recent event reports end to end: field capture, transcription, QA/QC, revision. Hours per report is the number the business will hold the programme to.', 'Week 1'),
        S(2, 'Standardise field capture', 'One structured capture path for notes, logs, sample IDs and photos. The agent can only be as good as what leaves the site — this step carries most of the value on its own.', 'Weeks 2–3'),
        S(3, 'Draft the deliverable', 'The agent assembles the project summary and report draft from field data and lab results, in your existing template and voice.', 'Weeks 4–5'),
        S(4, 'Add the completeness and consistency checks', 'Missing fields, sample-ID mismatches, implausible depths or dates, field-versus-lab disagreement — raised before demobilisation, not after.', 'Weeks 6–7'),
        S(5, 'Run one region under human approval', 'Every draft is approved by the project scientist. Measure hours per report against the week-one baseline before extending nationally.', 'Week 8')
      ]
    },
    {
      id: 'cascade-copilot', prototype: 'cascade',
      name: 'Cascade technical knowledge copilot', tag: 'Knowledge',
      problemLabel: 'Problem', solutionLabel: 'AI solution',
      problem: 'Twenty-five years of projects, boring logs, remediation designs, proposals, technical reports and lessons learned sit across the organisation. Engineers re-research questions the company has already answered, and a method proven in one region is reinvented in another.',
      solution: 'A secure copilot over the approved Cascade corpus that answers technical questions with citations to the source project — comparable chlorinated-solvent work in fractured rock, prior drilling approaches under given lithology, previous ERH or PFAS injection outcomes, and a first draft of the technical approach for an RFP built from relevant past work.',
      roiPct: 0.0045, roiFloor: 300000, build: '4–6 weeks', effort: '1 engineer, 1 principal engineer as reviewer',
      metrics: [['Technical search time', '−60%'], ['Onboarding to productivity', 'Weeks, not quarters']],
      note: 'Cascade has already tightened Microsoft 365 Copilot permissions after testing found most simulated queries could surface sensitive material pre-remediation. That work is the precondition this use case builds on.',
      steps: [
        S(1, 'Start from the permission work already done', 'The CMMC-driven Copilot readiness remediation is the foundation. Confirm the permission model holds for the corpus before a single document is indexed.', 'Week 1'),
        S(2, 'Curate the approved corpus', 'Projects, designs, proposals, SOPs and lessons learned — superseded material retired. A copilot grounded on stale designs is a liability, not an asset.', 'Weeks 2–3'),
        S(3, 'Enforce citation on every answer', 'Each response links the project and document it came from. Unsupported questions return nothing rather than a plausible sentence.', 'Week 4'),
        S(4, 'Benchmark against your principals', 'Fifty real technical questions answered by senior staff set the accuracy bar. Ship only when the agent clears it.', 'Week 5'),
        S(5, 'Put it in the proposal workflow', 'The highest-value first application: assembling a technical approach from relevant past projects, for a principal to edit and own.', 'Week 6')
      ]
    },
    {
      id: 'cascade-fleet', prototype: 'cascade',
      name: 'Fleet maintenance & mobilisation agent', tag: 'Operations',
      problemLabel: 'Problem', solutionLabel: 'AI solution',
      problem: 'A nationwide fleet of truck, track and limited-access rigs runs to a calendar rather than to condition. A rig fails, the job stops, the crew waits, the equipment is repaired and remobilised — and the cost lands in downtime, technician labour and schedule slip at once.',
      solution: 'An agent that fuses equipment telemetry, maintenance history, work orders, utilisation, job schedules and technician notes to predict failures, recommend a maintenance window that fits the job calendar, and propose equipment allocation and mobilisation. It recommends; maintenance decides.',
      roiPct: 0.0075, roiFloor: 450000, build: '8–12 weeks', effort: '1 engineer, 1 fleet manager, maintenance lead part-time',
      metrics: [['Maintenance planning cost', '−15%'], ['Unplanned rig downtime', 'Materially reduced']],
      note: 'Benchmark: Jacobs reports roughly 15% savings in maintenance planning and scheduling costs across its Intelligent O&M deployments.',
      steps: [
        S(1, 'Assess data readiness first', 'Telemetry coverage, work-order quality and utilisation records decide whether this is a 10-week build or a 30-week one. Run this while use cases one and two deliver.', 'Weeks 1–2'),
        S(2, 'Join maintenance history to telemetry', 'Past failures become labelled signatures instead of generic anomalies — the difference between prediction and noise.', 'Weeks 3–5'),
        S(3, 'Predict, recommend, do not act', 'Predictions and recommended windows are logged alongside the existing schedule for four weeks and compared against what actually failed.', 'Weeks 6–9'),
        S(4, 'Schedule around the job calendar', 'Once accuracy holds, recommended windows are placed against real mobilisations so maintenance stops colliding with revenue.', 'Weeks 10–11'),
        S(5, 'Extend to allocation and mobilisation', 'Equipment and crew positioning proposed from utilisation and upcoming work, with the fleet manager approving every move.', 'Week 12')
      ]
    }
  ]
};

const REV_MID = {
  'less than $50 million': 30e6, 'less than $10 million': 7e6,
  '$10 million - $24.9 million': 17e6, '$25 million - $49.9 million': 37e6,
  '$50 million - $75 million': 62e6, '$50 million - $74.9 million': 62e6,
  '$75 million - $99.9 million': 87e6, '$100 million - $249 million': 175e6,
  '$250 million - $499 million': 375e6, '$500 million - $749 million': 625e6,
  '$750 million - $1 billion': 875e6, '$750 million - $999 million': 875e6,
  '$1 billion - $4.9 billion': 2.4e9, '$2.5 billion - $4.9 billion': 3.7e9,
  '$5 billion +': 6e9, 'over $10 billion': 12e9
};

function revenueOf(c) {
  const k = String(c.revenue || '').trim().toLowerCase();
  if (REV_MID[k]) return REV_MID[k];
  const nums = k.match(/[\d.]+/g);
  if (!nums) return 120e6;
  const bn = /billion/.test(k);
  const v = nums.map(Number).reduce((a, b) => a + b, 0) / nums.length;
  return v * (bn ? 1e9 : 1e6);
}

const round = (v) => v >= 1e6 ? Math.round(v / 5e4) * 5e4 : Math.round(v / 1e4) * 1e4;

export const money = (v) => v >= 1e6
  ? '$' + (v / 1e6).toFixed(v >= 1e7 ? 1 : 2).replace(/\.0$/, '') + 'M'
  : '$' + Math.round(v / 1e3) + 'K';

const splitList = (s) => String(s || '').split(/;|·/).map(x => x.trim()).filter(Boolean);

export function buildUseCases(company, research) {
  const rows = (research && research[company.company]) || [];
  const override = COMPANY_OVERRIDES[company.company];

  let picked;
  if (override) {
    picked = override.map(o => ({ ...o, archetype: ARCHETYPES[o.prototype] || null }));
  } else {
    picked = rows.slice(0, 3).map(r => {
      const A = ARCHETYPES[r.a] || ARCHETYPES.copilot;
      const kpis = splitList(r.k);
      return {
        id: r.a + '-' + r.p,
        prototype: A.prototype,
        name: r.n,
        tag: A.tag,
        problemLabel: 'Why this first',
        solutionLabel: 'How it works',
        problem: r.w,
        solution: r.i,
        roiPct: A.roiPct, roiFloor: A.roiFloor,
        build: A.build, effort: A.effort,
        metrics: kpis.length ? [['Measured by', kpis.slice(0, 3).join(' · ')]] : [],
        note: r.note ? r.note : r.m ? 'Comparable implementations: ' + r.m + '. Evidence is directional — validate the economics against the company during discovery.' : '',
        sources: splitList(r.s).filter(u => u.startsWith('http')),
        rev: r.rev || null,
        steps: A.steps
      };
    });
  }

  const rev = revenueOf(company);
  return picked.map((t, i) => {
    const isRev = !!t.rev;
    const raw = isRev ? t.rev.customers * t.rev.attach * t.rev.price : Math.max(t.roiFloor, rev * t.roiPct) * (1 - i * 0.14);
    const roi = isRev ? Math.round(raw / 1e4) * 1e4 : round(raw);
    const cost = isRev ? round(t.rev.build) : round(Math.max(60000, roi * (0.22 + i * 0.03)));
    return {
      ...t,
      key: company.company + '::' + t.id,
      roiKind: isRev ? 'revenue' : 'saving',
      roiKindLabel: isRev ? 'Annual revenue lift' : 'Annual saving',
      roiBasis: isRev ? t.rev.basis : '',
      roi, roiLabel: money(roi),
      cost, costLabel: money(cost),
      payback: Math.max(2, Math.round((cost / (roi / 12)) * 10) / 10),
      confidence: i === 0 ? 'High' : i === 1 ? 'High' : 'Medium'
    };
  });
}
