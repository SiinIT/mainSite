import React from "react";

export const steps = [
  {
    id: 1,
    number: "Step 1",
    title: "Raccolta delle esigenze",
    text: "Coinvolgimento delle parti interessate per comprendere obiettivi, esigenze e vincoli. Documentazione delle richieste iniziali e delle aspettative.",
  },
  {
    id: 2,
    number: "Step 2",
    title: "Definizione dei requisiti",
    text: "Analisi dettagliata delle informazioni raccolte per trasformarle in requisiti tecnici e funzionali chiari, specifici e prioritari.",
  },
  {
    id: 3,
    number: "Step 3",
    title: "Pianificazione della soluzione",
    text: "Sviluppo di un piano dettagliato che include specifiche tecniche, risorse necessarie, tempistiche e strategie per l'implementazione del progetto.",
  },
];


export default function Steps() {
  return (
    <div className="feature-area-1 space bg-title">
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title text-smoke">Analisi in 3 STEP</h2>
        </div>
        <div className="row gx-0 gy-40">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4">
              <div className="process-card">
                <div className="process-card-number">{step.number}</div>
                <h4 className="process-card-title">{step.title}</h4>
                <p className="process-card-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
