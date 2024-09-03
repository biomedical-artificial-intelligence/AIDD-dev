import React from 'react'
import { Helmet } from 'react-helmet-async'
import './SarcomaBiology.css'

const SarcomaBiology = () => {
  return (
    <div className="total-container">
      <Helmet>
        <title>Sarcoma Biology</title>
        <meta name="description" content="Sarcoma Biology information for SilicoWorks Lab" />
        <link rel="canonical" href="https://biomedical-artificial-intelligence.github.io/AIDD-dev/research/sarcoma-biology" />
      </Helmet>

      <h1 className="page-title">Research</h1>
      <div className="main-container">
        <h1 className="main-title">Sarcoma Biology</h1>
        <div className="research-container">
          <div className="research-title">
            <h1>Competency of Our Lab for Oncogenic Mechanism Analysis</h1>
          </div>
          <div className="research-contents">
            DATA collection :
            Our patient managers collect highly qualified samples and DATA including QC evaluation and clinical information in compliance with the relevant regulations. They also survey patients’ outcomes including functional, mental, and pain scores, and long term prognosis such as progression free survival and overall survival outcomes.
            <br />
            <br />
            DATA analysis : Our data analyst, an expert in statistics and machine learning, analyzes the collected data to identify target genes or fusion genes.
            The following data analyses are outsourced to external institutes.
            : Fusion gene prediction using three different algorithm, GWAS, Synthetic lethality analysis
            <br />
            <br />
            In vitro study :
            DNA recombination, gain of function test, loss of function test, angiogenesis, EMT evaluation, MSC differentiation, anchorage independent growth, migration/invasion, kinase activity analysis,  apoptosis assay, drug synergy analysis, ADCC, PCR/Western/ELISA test
            The following experiments are outsourced to external company.
            : NGS, Peptide production, small molecule production, Ab production, chimeric protein production
            <br />
            <br />
            In vivo study :
            Osteosarcoma Model, Bone Metastasis Model, CAR-T cell Model, Luciferase expressing cancers, Osteolysis mouse model, Inflammatory Arthritis Model, Functional Test (Rotarod test)
            The following experiments are outsourced to external company.
            : Pharmacodynamic study using Rat, Transgenic Mouse
            <br />
            <br />
            In our laboratory, we perform whole RNA sequencing on both cancerous and normal tissues from patients. Using the obtained information on gene mutations or fusion genes, we identify potential targets. These identified targets are then validated for their oncogenic potential through in vivo or in vitro experiments, following a well-established pipeline.
            <br />
            <br />
            Fusion genes are filtered using three different algorithms. Then, they are validated using PCR or Sanger&apos;s method. Our own algorithms for causal identification clarify causal genes, aiding our decision-making for specific treatments. The graph below shows the probability of effectiveness of radiation therapy for specific gene mutations.
          </div>
        </div>
        <div className="research-container">
          <div className="research-title">
            <h1>Identified Mechanism of Target Gene and Therapeutic Potential</h1>
          </div>
          <div className="research-contents">
            <br />
            <br />
            We elucidated synergistic effect of NAC and DOX in cancers with TP53 Mutation using PDC (Patient-derived Cell).
          </div>
        </div>
        <div className="research-container">
          <div className="research-title">
            <h1></h1>
          </div>
          <div className="research-contents">
            <br />
            <br />
          </div>
        </div>

      </div>
    </div>
  )
}

export default SarcomaBiology