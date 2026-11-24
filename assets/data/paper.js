/* Source: TAR_CSS_TASLP-3.pdf; extracted 2026-11-24. */
window.DEMO_PAPER = {
  "schemaVersion": 1,
  "source": {
    "file": "TAR_CSS_TASLP-3.pdf",
    "pageCount": 13,
    "sha256": "28419d7237ce0025a190fd75f81cc37dcd76728071f51531137c60308398bd82",
    "extractedOn": "2026-11-24",
    "appendixPresent": false
  },
  "title": "TAR-CSS: Task-Loss-Guided Ranked-Prefix Context Retrieval for Conversational Speech Synthesis",
  "shortTitle": "TAR-CSS",
  "authors": [
    "Jun-Bum Kim",
    "Nam-Seok Song",
    "Gaeun Kim",
    "Joon-Hyuk Chang"
  ],
  "affiliations": [
    "School of Electronics, Hanyang University, Seoul, 04763, Korea"
  ],
  "authorDetails": [
    {
      "name": "Jun-Bum Kim",
      "email": "johnny9696@hanyang.ac.kr"
    },
    {
      "name": "Nam-Seok Song",
      "email": "insang99@hanyang.ac.kr"
    },
    {
      "name": "Gaeun Kim",
      "email": "gaeun8389@hanyang.ac.kr"
    },
    {
      "name": "Joon-Hyuk Chang",
      "email": "jchang@hanyang.ac.kr",
      "corresponding": true,
      "designation": "Senior Member, IEEE"
    }
  ],
  "abstract": "Conversational speech synthesis (CSS) uses dialogue history to generate contextually appropriate speech. Although a longer history provides more information, the additional context may not always improve synthesis quality for the current utterance. We propose Task-loss-guided Ranked-prefix Conversational Speech Synthesis (TAR-CSS), which learns which historical utterances to prioritize and how many to retain for synthesis. TAR-CSS ranks historical utterances by their relevance to the current utterance. During training, TAR-CSS uses the synthesis loss for the current utterance as the task loss to evaluate ranked prefixes of different lengths. This task loss guides learning of both the retrieval scores and the threshold that determines which historical utterances to retain at inference. On DailyTalk, TAR-CSS achieved the lowest mel-spectrogram, pitch, and energy prediction errors. Among the synthesis models, it also achieved the highest mean opinion score (MOS) for naturalness (3.71) and dialogue mean opinion score (D-MOS) for contextual appropriateness (4.25). Without further training, TAR-CSS achieved the lowest mel-spectrogram, pitch, and phoneme duration errors on the English subsets of NCSSD. These results suggest that task-loss-guided history selection helps generate speech that fits the dialogue context.",
  "overview": "TAR-CSS learns which preceding utterances help synthesize the current turn and how many to retain. It uses synthesis losses from ranked history prefixes to train retrieval scores and a sample-specific selection threshold, then combines the selected context with the current utterance through local and global post-context modeling. A mixture-of-experts fusion encoder supports text, audio, and visual context, including missing audio or visual inputs when text remains available.",
  "indexTerms": [
    "Conversational Speech Synthesis",
    "Adaptive History Selection",
    "Multi-modal Context Modeling",
    "Missing-Modality Robustness"
  ],
  "figures": [
    {
      "id": "fig-1",
      "label": "Figure 1",
      "title": "TAR-CSS architecture",
      "src": "assets/figures/paper_20261124/fig-1.png",
      "pdf": "assets/figures/paper_20261124/fig-1.pdf",
      "caption": "Overview of TAR-CSS. The modality fusion process generates local and global representations from multimodal inputs. Retrieval scoring and ranked-prefix learning rank historical utterances based on their relationships with the current utterance and select relevant history using a predicted threshold. Post-context modeling integrates the selected historical information to condition the TTS backbone.",
      "contentDescription": "Text, audio, and visual features are fused into local and global representations. Task-loss-guided ranked-prefix learning selects historical utterances, and post-context modeling conditions the TTS backbone.",
      "section": "architecture",
      "sourcePage": 3,
      "cropPoints": [
        46.964,
        54.0708,
        564.9936,
        217.262
      ],
      "dpi": 450,
      "sourceType": "embedded raster",
      "width": 3239,
      "height": 1021,
      "originalSrc": "assets/figures/paper_20261124/fig-1-original.png",
      "originalWidth": 8460,
      "originalHeight": 2620
    },
    {
      "id": "fig-2",
      "label": "Figure 2",
      "title": "Acoustic performance by dialogue-history length",
      "src": "assets/figures/paper_20261124/fig-2.png",
      "pdf": "assets/figures/paper_20261124/fig-2.pdf",
      "caption": "Performance variation with respect to dialogue history length. From left to right, the figures visualize the evaluation results for pitch, energy, and mel-spectrogram, respectively.",
      "contentDescription": "Pitch, energy, and mel-spectrogram errors across dialogue-history length groups for TAR-CSS and the comparison models.",
      "section": "results",
      "sourcePage": 7,
      "cropPoints": [
        72.67,
        198.51,
        539.33,
        333.6
      ],
      "dpi": 450,
      "sourceType": "native vector",
      "width": 2917,
      "height": 845
    },
    {
      "id": "fig-3",
      "label": "Figure 3",
      "title": "D-MOS by dialogue-history length",
      "src": "assets/figures/paper_20261124/fig-3.png",
      "pdf": "assets/figures/paper_20261124/fig-3.pdf",
      "caption": "D-MOS for original and synthesized speech on DailyTalk, grouped by the number of preceding utterances. Each point shows a mean rating based on data from 30 listening-test rounds selected according to the D-MOS of TAR-CSS.",
      "contentDescription": "D-MOS across four dialogue-history length groups for original speech, TAR-CSS, and seven comparison models.",
      "section": "results",
      "sourcePage": 8,
      "cropPoints": [
        46.964,
        54.071,
        302.022,
        201.853
      ],
      "dpi": 450,
      "sourceType": "native vector",
      "width": 1595,
      "height": 925,
      "sourceNote": "The manuscript caption describes 30 rounds selected according to TAR-CSS D-MOS. This caption is retained as source text, not an independently verified listener-count or random-sampling claim."
    },
    {
      "id": "fig-4",
      "label": "Figure 4",
      "title": "Matched MOS and D-MOS responses: comparison models",
      "src": "assets/figures/paper_20261124/fig-4.png",
      "pdf": "assets/figures/paper_20261124/fig-4.pdf",
      "caption": "Performance variation with respect to dialogue history length. From left to right, the figures visualize the evaluation results for pitch, energy, and mel-spectrogram, respectively.",
      "contentDescription": "Matched item-response Win/Tie/Loss distributions for TAR-CSS compared with seven synthesis models, shown separately for MOS and D-MOS.",
      "section": "results",
      "sourcePage": 8,
      "cropPoints": [
        53.24,
        409.95,
        295.75,
        662.79
      ],
      "dpi": 450,
      "sourceType": "native vector",
      "width": 1517,
      "height": 1581,
      "sourceNote": "The manuscript’s Fig. 4 caption describes acoustic-history plots, but the embedded graphic shows matched MOS/D-MOS Win/Tie/Loss bars. The figure itself is reproduced unchanged."
    },
    {
      "id": "fig-5",
      "label": "Figure 5",
      "title": "Which historical utterances are selected?",
      "src": "assets/figures/paper_20261124/fig-5.png",
      "pdf": "assets/figures/paper_20261124/fig-5.pdf",
      "caption": "Statistical analysis of history-node selection patterns. (a) Selection ratios according to speaker identity, illustrating which speaker’s contextual information is more frequently incorporated into the current utterance. (b) Selection ratios according to the relative temporal distance from the current utterance, showing how frequently history nodes are selected as their positions become more distant in the dialogue history.",
      "contentDescription": "History selection rates, aggregation-weight shares, and top-weight node shares by speaker, with selection rates and weight shares by relative turn distance.",
      "section": "analysis",
      "sourcePage": 9,
      "cropPoints": [
        53.24,
        215.32,
        295.91,
        457.99
      ],
      "dpi": 450,
      "sourceType": "native vector",
      "width": 1518,
      "height": 1518
    },
    {
      "id": "fig-6",
      "label": "Figure 6",
      "title": "D-MOS by history length: selection ablations",
      "src": "assets/figures/paper_20261124/fig-6.png",
      "pdf": "assets/figures/paper_20261124/fig-6.pdf",
      "caption": "D-MOS for original and synthesized speech on DailyTalk, grouped by the number of preceding utterances. Each point shows a mean rating based on data from 30 listening-test rounds selected according to the D-MOS of TAR-CSS.",
      "contentDescription": "D-MOS across four dialogue-history length groups for TAR-CSS, w/o Task Loss, w/o Filtering, Top-K Selection, and Low Score selection.",
      "section": "analysis",
      "sourcePage": 10,
      "cropPoints": [
        46.964,
        448.17,
        302.022,
        595.96
      ],
      "dpi": 450,
      "sourceType": "native vector",
      "width": 1595,
      "height": 924,
      "sourceNote": "The source caption mentions original speech, but the graphic contains TAR-CSS and four selection ablations. The selected-round statement is manuscript source text, not an independently verified evaluation protocol."
    },
    {
      "id": "fig-7",
      "label": "Figure 7",
      "title": "Matched responses: missing-modality conditions",
      "src": "assets/figures/paper_20261124/fig-7.png",
      "pdf": "assets/figures/paper_20261124/fig-7.pdf",
      "caption": "D-MOS for original and synthesized speech on DailyTalk, grouped by the number of preceding utterances. Each point shows a mean rating based on data from 30 listening-test rounds selected according to the D-MOS of TAR-CSS.",
      "contentDescription": "Matched MOS and D-MOS Win/Tie/Loss distributions comparing the full-modality TAR-CSS condition with text+audio, text+vision, and text-only conditions.",
      "section": "analysis",
      "sourcePage": 10,
      "cropPoints": [
        309.978,
        257.58,
        565.036,
        439.44
      ],
      "dpi": 450,
      "sourceType": "native vector",
      "width": 1595,
      "height": 1138,
      "sourceNote": "The manuscript’s Fig. 7 caption describes a D-MOS history-length plot, but the embedded graphic shows matched MOS/D-MOS Win/Tie/Loss bars for modality conditions. The figure itself is reproduced unchanged."
    },
    {
      "id": "fig-8",
      "label": "Figure 8",
      "title": "Matched responses: task-loss and selection ablations",
      "src": "assets/figures/paper_20261124/fig-8.png",
      "pdf": "assets/figures/paper_20261124/fig-8.pdf",
      "caption": "D-MOS for original and synthesized speech on DailyTalk, grouped by the number of preceding utterances. Each point shows a mean rating based on data from 30 listening-test rounds selected according to the D-MOS of TAR-CSS.",
      "contentDescription": "Matched MOS and D-MOS Win/Tie/Loss distributions comparing TAR-CSS with w/o Task Loss, w/o Filtering, Top-K Selection, and Low Score.",
      "section": "analysis",
      "sourcePage": 11,
      "cropPoints": [
        46.964,
        510.35,
        302.03,
        702.94
      ],
      "dpi": 450,
      "sourceType": "native vector",
      "width": 1595,
      "height": 1205,
      "sourceNote": "The manuscript’s Fig. 8 caption and nearby body reference describe a D-MOS history-length plot, but the embedded graphic shows matched MOS/D-MOS Win/Tie/Loss bars for selection ablations. The figure itself is reproduced unchanged."
    }
  ],
  "tables": [
    {
      "id": "table-1",
      "label": "Table I",
      "title": "DailyTalk: naturalness, dialogue appropriateness, and acoustic prediction",
      "headers": [
        "Model",
        "MOS",
        "D-MOS",
        "MCD",
        "Mel (DTW) ↓",
        "Mel (MAE) ↓",
        "E-DTW ↓",
        "E-MAE ↓",
        "P-DTW ↓",
        "P-MAE ↓",
        "D-MAE ↓"
      ],
      "rows": [
        [
          "Original",
          "\\(4.62 \\pm 0.12\\)",
          "\\(4.68 \\pm 0.10\\)",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-"
        ],
        [
          "DailyTalk [15]",
          "\\(3.45 \\pm 0.14\\)",
          "\\(3.73 \\pm 0.17\\)",
          "9.2942",
          "0.8112",
          "0.9017",
          "0.3866",
          "0.4301",
          "0.3314",
          "0.3264",
          "0.2535"
        ],
        [
          "FC-Talker [16]",
          "\\(3.60 \\pm 0.16\\)",
          "\\(3.63 \\pm 0.19\\)",
          "9.2593",
          "0.8026",
          "0.8971",
          "0.3903",
          "0.4376",
          "0.3555",
          "0.3503",
          "0.2575"
        ],
        [
          "DialogueGCN [20]",
          "\\(3.53 \\pm 0.16\\)",
          "\\(3.56 \\pm 0.18\\)",
          "9.3608",
          "0.8188",
          "0.8996",
          "0.4062",
          "0.4461",
          "0.3447",
          "0.3419",
          "0.2621"
        ],
        [
          "MSRGCN [21]",
          "\\(3.67 \\pm 0.19\\)",
          "\\(3.79 \\pm 0.20\\)",
          "9.2819",
          "0.8413",
          "0.9146",
          "0.4071",
          "0.4445",
          "0.3451",
          "0.3462",
          "0.2649"
        ],
        [
          "ECSS [22]",
          "\\(3.65 \\pm 0.16\\)",
          "\\(3.61 \\pm 0.21\\)",
          "9.3526",
          "0.8202",
          "0.9096",
          "0.3905",
          "0.4388",
          "0.3527",
          "0.3510",
          "0.2550"
        ],
        [
          "I3-CSS [18]",
          "\\(3.56 \\pm 0.12\\)",
          "\\(3.66 \\pm 0.20\\)",
          "9.3503",
          "0.8107",
          "0.8915",
          "0.3878",
          "0.4302",
          "0.3500",
          "0.3458",
          "0.2508"
        ],
        [
          "RADKA-CSS [23]",
          "\\(3.65 \\pm 0.16\\)",
          "\\(3.80 \\pm 0.14\\)",
          "9.3317",
          "0.8390",
          "0.9146",
          "0.4167",
          "0.4535",
          "0.3562",
          "0.3483",
          "0.2512"
        ],
        [
          "TAR-CSS (Ours)",
          "\\(3.71 \\pm 0.13\\)",
          "\\(4.25 \\pm 0.10\\)",
          "9.0415",
          "0.7429",
          "0.8281",
          "0.3796",
          "0.4220",
          "0.3182",
          "0.3165",
          "0.2528"
        ]
      ],
      "directions": [
        null,
        "max",
        "max",
        "min",
        "min",
        "min",
        "min",
        "min",
        "min",
        "min",
        "min"
      ],
      "note": "MOS and D-MOS are reported with 95% confidence intervals as printed in the manuscript. Higher MOS and D-MOS and lower MCD are better. Except for duration, DTW metrics use target-free inference and MAE metrics use reference phoneme durations. Original is the natural-speech reference and is excluded from the synthesis-model best-value comparison.",
      "sourcePage": 7,
      "numericRows": [
        [
          null,
          4.62,
          4.68,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          3.45,
          3.73,
          9.2942,
          0.8112,
          0.9017,
          0.3866,
          0.4301,
          0.3314,
          0.3264,
          0.2535
        ],
        [
          null,
          3.6,
          3.63,
          9.2593,
          0.8026,
          0.8971,
          0.3903,
          0.4376,
          0.3555,
          0.3503,
          0.2575
        ],
        [
          null,
          3.53,
          3.56,
          9.3608,
          0.8188,
          0.8996,
          0.4062,
          0.4461,
          0.3447,
          0.3419,
          0.2621
        ],
        [
          null,
          3.67,
          3.79,
          9.2819,
          0.8413,
          0.9146,
          0.4071,
          0.4445,
          0.3451,
          0.3462,
          0.2649
        ],
        [
          null,
          3.65,
          3.61,
          9.3526,
          0.8202,
          0.9096,
          0.3905,
          0.4388,
          0.3527,
          0.351,
          0.255
        ],
        [
          null,
          3.56,
          3.66,
          9.3503,
          0.8107,
          0.8915,
          0.3878,
          0.4302,
          0.35,
          0.3458,
          0.2508
        ],
        [
          null,
          3.65,
          3.8,
          9.3317,
          0.839,
          0.9146,
          0.4167,
          0.4535,
          0.3562,
          0.3483,
          0.2512
        ],
        [
          null,
          3.71,
          4.25,
          9.0415,
          0.7429,
          0.8281,
          0.3796,
          0.422,
          0.3182,
          0.3165,
          0.2528
        ]
      ],
      "referenceRows": [
        0
      ],
      "rankingMode": "columns",
      "source": "TAR_CSS_TASLP-3.pdf",
      "dataset": "DailyTalk",
      "section": "results",
      "caption": "Model performance comparison using mel-level objective metrics. Except for duration, DTW-based metrics are computed from target-free inference, whereas MAE-based metrics are evaluated using the target duration to ensure a fair comparison across models.",
      "bestCells": [
        {
          "row": 8,
          "column": 1
        },
        {
          "row": 8,
          "column": 2
        },
        {
          "row": 8,
          "column": 3
        },
        {
          "row": 8,
          "column": 4
        },
        {
          "row": 8,
          "column": 5
        },
        {
          "row": 8,
          "column": 6
        },
        {
          "row": 8,
          "column": 7
        },
        {
          "row": 8,
          "column": 8
        },
        {
          "row": 8,
          "column": 9
        },
        {
          "row": 6,
          "column": 10
        }
      ]
    },
    {
      "id": "table-2",
      "label": "Table II",
      "title": "DailyTalk: waveform-level performance",
      "headers": [
        "Model",
        "Spk-Sim ↑",
        "WER ↓",
        "Emo-Sim ↑"
      ],
      "rows": [
        [
          "DailyTalk [15]",
          "0.6213",
          "0.0933",
          "0.7078"
        ],
        [
          "FC-Talker [16]",
          "0.6327",
          "0.0950",
          "0.7145"
        ],
        [
          "DialogueGCN [20]",
          "0.6270",
          "0.1016",
          "0.7067"
        ],
        [
          "MSRGCN [21]",
          "0.5953",
          "0.0952",
          "0.6863"
        ],
        [
          "ECSS [22]",
          "0.6085",
          "0.1015",
          "0.7148"
        ],
        [
          "I³-CSS [18]",
          "0.6133",
          "0.0968",
          "0.7095"
        ],
        [
          "RADKA-CSS [23]",
          "0.6304",
          "0.0974",
          "0.7048"
        ],
        [
          "TAR-CSS (Ours)",
          "0.6304",
          "0.0940",
          "0.7275"
        ]
      ],
      "directions": [
        null,
        "max",
        "min",
        "max"
      ],
      "note": "All synthesized mel-spectrograms are reconstructed using the same HiFi-GAN vocoder. WER is retained as a fraction, matching the table in the manuscript.",
      "sourcePage": 7,
      "numericRows": [
        [
          null,
          0.6213,
          0.0933,
          0.7078
        ],
        [
          null,
          0.6327,
          0.095,
          0.7145
        ],
        [
          null,
          0.627,
          0.1016,
          0.7067
        ],
        [
          null,
          0.5953,
          0.0952,
          0.6863
        ],
        [
          null,
          0.6085,
          0.1015,
          0.7148
        ],
        [
          null,
          0.6133,
          0.0968,
          0.7095
        ],
        [
          null,
          0.6304,
          0.0974,
          0.7048
        ],
        [
          null,
          0.6304,
          0.094,
          0.7275
        ]
      ],
      "referenceRows": [],
      "rankingMode": "columns",
      "source": "TAR_CSS_TASLP-3.pdf",
      "dataset": "DailyTalk",
      "section": "results",
      "caption": "Waveform-level performance comparison on DailyTalk. All synthesized mel-spectrograms are reconstructed using the same HiFi-GAN vocoder.",
      "bestCells": [
        {
          "row": 1,
          "column": 1
        },
        {
          "row": 0,
          "column": 2
        },
        {
          "row": 7,
          "column": 3
        }
      ]
    },
    {
      "id": "table-3",
      "label": "Table III",
      "title": "NCSSD: cross-dataset generalization without adaptation",
      "headers": [
        "Model",
        "Mel (DTW) ↓",
        "Mel (MAE) ↓",
        "E-DTW ↓",
        "E-MAE ↓",
        "P-DTW ↓",
        "P-MAE ↓",
        "D-MAE ↓",
        "Spk-Sim ↑",
        "Emo-Sim ↑",
        "WER ↓"
      ],
      "rows": [
        [
          "DailyTalk [15]",
          "1.9248",
          "2.3175",
          "0.2548",
          "0.7913",
          "0.3030",
          "0.4781",
          "0.2292",
          "0.0243",
          "0.6867",
          "0.1098"
        ],
        [
          "FC-Talker [16]",
          "1.9237",
          "2.3305",
          "0.2538",
          "0.8131",
          "0.3046",
          "0.4983",
          "0.2357",
          "0.0229",
          "0.6924",
          "0.1279"
        ],
        [
          "DialogueGCN [20]",
          "1.9258",
          "2.3441",
          "0.2626",
          "0.8626",
          "0.4041",
          "0.5629",
          "0.2357",
          "0.0189",
          "0.6980",
          "0.1077"
        ],
        [
          "MSRGCN [21]",
          "1.9161",
          "2.3378",
          "0.2278",
          "0.7515",
          "0.3950",
          "0.5743",
          "0.2273",
          "0.0131",
          "0.6939",
          "0.2103"
        ],
        [
          "ECSS [22]",
          "1.9056",
          "2.4326",
          "0.2360",
          "0.7850",
          "0.2985",
          "0.5570",
          "0.2306",
          "0.0238",
          "0.6861",
          "0.1153"
        ],
        [
          "I³-CSS [18]",
          "1.9127",
          "2.3157",
          "0.2454",
          "0.7766",
          "0.2962",
          "0.5384",
          "0.2270",
          "0.0250",
          "0.6904",
          "0.1085"
        ],
        [
          "RADKA-CSS [23]",
          "1.9516",
          "2.4340",
          "0.2398",
          "0.7305",
          "0.3600",
          "0.5851",
          "0.2481",
          "0.0138",
          "0.6963",
          "0.1090"
        ],
        [
          "TAR-CSS (Ours)",
          "1.9011",
          "2.2434",
          "0.2289",
          "0.7429",
          "0.2929",
          "0.4429",
          "0.2132",
          "0.0199",
          "0.6974",
          "0.1074"
        ]
      ],
      "directions": [
        null,
        "min",
        "min",
        "min",
        "min",
        "min",
        "min",
        "min",
        "max",
        "max",
        "min"
      ],
      "note": "All models are trained on DailyTalk and evaluated on NCSSD without additional training or adaptation. The first seven metrics evaluate acoustic prediction; the final three evaluate reconstructed waveforms. WER is a fraction.",
      "sourcePage": 9,
      "numericRows": [
        [
          null,
          1.9248,
          2.3175,
          0.2548,
          0.7913,
          0.303,
          0.4781,
          0.2292,
          0.0243,
          0.6867,
          0.1098
        ],
        [
          null,
          1.9237,
          2.3305,
          0.2538,
          0.8131,
          0.3046,
          0.4983,
          0.2357,
          0.0229,
          0.6924,
          0.1279
        ],
        [
          null,
          1.9258,
          2.3441,
          0.2626,
          0.8626,
          0.4041,
          0.5629,
          0.2357,
          0.0189,
          0.698,
          0.1077
        ],
        [
          null,
          1.9161,
          2.3378,
          0.2278,
          0.7515,
          0.395,
          0.5743,
          0.2273,
          0.0131,
          0.6939,
          0.2103
        ],
        [
          null,
          1.9056,
          2.4326,
          0.236,
          0.785,
          0.2985,
          0.557,
          0.2306,
          0.0238,
          0.6861,
          0.1153
        ],
        [
          null,
          1.9127,
          2.3157,
          0.2454,
          0.7766,
          0.2962,
          0.5384,
          0.227,
          0.025,
          0.6904,
          0.1085
        ],
        [
          null,
          1.9516,
          2.434,
          0.2398,
          0.7305,
          0.36,
          0.5851,
          0.2481,
          0.0138,
          0.6963,
          0.109
        ],
        [
          null,
          1.9011,
          2.2434,
          0.2289,
          0.7429,
          0.2929,
          0.4429,
          0.2132,
          0.0199,
          0.6974,
          0.1074
        ]
      ],
      "referenceRows": [],
      "rankingMode": "columns",
      "source": "TAR_CSS_TASLP-3.pdf",
      "dataset": "NCSSD (CL-EN and RC-EN)",
      "section": "results",
      "columnGroups": [
        {
          "label": "Acoustic prediction",
          "start": 1,
          "span": 7
        },
        {
          "label": "Waveform evaluation",
          "start": 8,
          "span": 3
        }
      ],
      "caption": "Cross-dataset generalization results on NCSSD. All models are trained on DailyTalk and evaluated on NCSSD without any additional training or adaptation.",
      "bestCells": [
        {
          "row": 7,
          "column": 1
        },
        {
          "row": 7,
          "column": 2
        },
        {
          "row": 3,
          "column": 3
        },
        {
          "row": 6,
          "column": 4
        },
        {
          "row": 7,
          "column": 5
        },
        {
          "row": 7,
          "column": 6
        },
        {
          "row": 7,
          "column": 7
        },
        {
          "row": 5,
          "column": 8
        },
        {
          "row": 2,
          "column": 9
        },
        {
          "row": 7,
          "column": 10
        }
      ]
    },
    {
      "id": "table-4",
      "label": "Table IV",
      "title": "Missing-modality robustness",
      "headers": [
        "Text",
        "Audio",
        "Vision",
        "MOS ↑",
        "D-MOS ↑",
        "Mel (DTW) ↓",
        "Mel (MAE) ↓",
        "MCD ↓",
        "E-DTW ↓",
        "E-MAE ↓",
        "P-DTW ↓",
        "P-MAE ↓",
        "D-MAE ↓"
      ],
      "rows": [
        [
          "✓",
          "✓",
          "✓",
          "\\(3.71 \\pm 0.13\\)",
          "\\(4.25 \\pm 0.10\\)",
          "0.7429",
          "0.8281",
          "9.0415",
          "0.3796",
          "0.4220",
          "0.3182",
          "0.3165",
          "0.2528"
        ],
        [
          "✓",
          "✓",
          "",
          "\\(3.67 \\pm 0.16\\)",
          "\\(4.13 \\pm 0.12\\)",
          "0.7421",
          "0.8279",
          "9.0381",
          "0.3798",
          "0.4223",
          "0.3181",
          "0.3168",
          "0.2527"
        ],
        [
          "✓",
          "",
          "✓",
          "\\(3.68 \\pm 0.14\\)",
          "\\(4.11 \\pm 0.12\\)",
          "0.7464",
          "0.8324",
          "9.0430",
          "0.3864",
          "0.4303",
          "0.3215",
          "0.3195",
          "0.2498"
        ],
        [
          "✓",
          "",
          "",
          "\\(3.64 \\pm 0.14\\)",
          "\\(4.13 \\pm 0.13\\)",
          "0.7470",
          "0.8329",
          "9.0448",
          "0.3880",
          "0.4316",
          "0.3215",
          "0.3192",
          "0.2503"
        ]
      ],
      "directions": [
        null,
        null,
        null,
        "max",
        "max",
        "min",
        "min",
        "min",
        "min",
        "min",
        "min",
        "min",
        "min"
      ],
      "note": "Checkmarks identify available modalities; blank cells identify unavailable modalities. Text is always available. Missing audio and/or vision is removed from the entire dialogue context. MOS and D-MOS retain the manuscript table’s 95% confidence intervals.",
      "sourcePage": 10,
      "numericRows": [
        [
          null,
          null,
          null,
          3.71,
          4.25,
          0.7429,
          0.8281,
          9.0415,
          0.3796,
          0.422,
          0.3182,
          0.3165,
          0.2528
        ],
        [
          null,
          null,
          null,
          3.67,
          4.13,
          0.7421,
          0.8279,
          9.0381,
          0.3798,
          0.4223,
          0.3181,
          0.3168,
          0.2527
        ],
        [
          null,
          null,
          null,
          3.68,
          4.11,
          0.7464,
          0.8324,
          9.043,
          0.3864,
          0.4303,
          0.3215,
          0.3195,
          0.2498
        ],
        [
          null,
          null,
          null,
          3.64,
          4.13,
          0.747,
          0.8329,
          9.0448,
          0.388,
          0.4316,
          0.3215,
          0.3192,
          0.2503
        ]
      ],
      "referenceRows": [],
      "rankingMode": "columns",
      "source": "TAR_CSS_TASLP-3.pdf",
      "dataset": "DailyTalk",
      "section": "analysis",
      "caption": "Ablation study on the modality fusion encoder under missing-modality scenarios. Text is always available, while audio and/or visual modalities are entirely missing from the dialogue context. Checkmarks indicate the available modalities.",
      "bestCells": [
        {
          "row": 0,
          "column": 3
        },
        {
          "row": 0,
          "column": 4
        },
        {
          "row": 1,
          "column": 5
        },
        {
          "row": 1,
          "column": 6
        },
        {
          "row": 1,
          "column": 7
        },
        {
          "row": 0,
          "column": 8
        },
        {
          "row": 0,
          "column": 9
        },
        {
          "row": 1,
          "column": 10
        },
        {
          "row": 0,
          "column": 11
        },
        {
          "row": 2,
          "column": 12
        }
      ]
    },
    {
      "id": "table-5",
      "label": "Table V",
      "title": "Task-loss supervision and history-selection ablation",
      "headers": [
        "Model",
        "MOS ↑",
        "D-MOS ↑",
        "Mel (DTW) ↓",
        "Mel (MAE) ↓",
        "E-DTW ↓",
        "E-MAE ↓",
        "P-DTW ↓",
        "P-MAE ↓",
        "D-MAE ↓"
      ],
      "rows": [
        [
          "TAR-CSS (Ours)",
          "\\(3.70 \\pm 0.13\\)",
          "\\(4.25 \\pm 0.10\\)",
          "0.7429",
          "0.8281",
          "0.3796",
          "0.4220",
          "0.3182",
          "0.3165",
          "0.2528"
        ],
        [
          "w/o Task Loss",
          "\\(3.45 \\pm 0.13\\)",
          "\\(3.80 \\pm 0.16\\)",
          "0.8043",
          "0.8809",
          "0.3749",
          "0.4361",
          "0.3365",
          "0.3351",
          "0.2597"
        ],
        [
          "w/o Filtering",
          "\\(3.73 \\pm 0.14\\)",
          "\\(3.91 \\pm 0.16\\)",
          "0.8148",
          "0.8978",
          "0.3892",
          "0.4318",
          "0.3398",
          "0.3170",
          "0.2608"
        ],
        [
          "Top-K Selection (\\(K = 5\\))",
          "\\(3.66 \\pm 0.12\\)",
          "\\(3.79 \\pm 0.13\\)",
          "0.8207",
          "0.9067",
          "0.4067",
          "0.4518",
          "0.3518",
          "0.3795",
          "0.2495"
        ],
        [
          "Low Score",
          "\\(3.64 \\pm 0.16\\)",
          "\\(3.98 \\pm 0.15\\)",
          "0.8150",
          "0.8957",
          "0.4045",
          "0.4500",
          "0.3391",
          "0.3397",
          "0.2616"
        ]
      ],
      "directions": [
        null,
        "max",
        "max",
        "min",
        "min",
        "min",
        "min",
        "min",
        "min",
        "min"
      ],
      "note": "Low Score uses the trained TAR-CSS model and retains historical utterances with scores below the predicted threshold at inference. The source table says bold indicates the best value for each metric. TAR-CSS MOS is 3.70 in this table, versus 3.71 in Tables I and IV; each table is reproduced as printed.",
      "sourcePage": 10,
      "numericRows": [
        [
          null,
          3.7,
          4.25,
          0.7429,
          0.8281,
          0.3796,
          0.422,
          0.3182,
          0.3165,
          0.2528
        ],
        [
          null,
          3.45,
          3.8,
          0.8043,
          0.8809,
          0.3749,
          0.4361,
          0.3365,
          0.3351,
          0.2597
        ],
        [
          null,
          3.73,
          3.91,
          0.8148,
          0.8978,
          0.3892,
          0.4318,
          0.3398,
          0.317,
          0.2608
        ],
        [
          null,
          3.66,
          3.79,
          0.8207,
          0.9067,
          0.4067,
          0.4518,
          0.3518,
          0.3795,
          0.2495
        ],
        [
          null,
          3.64,
          3.98,
          0.815,
          0.8957,
          0.4045,
          0.45,
          0.3391,
          0.3397,
          0.2616
        ]
      ],
      "referenceRows": [],
      "rankingMode": "columns",
      "source": "TAR_CSS_TASLP-3.pdf",
      "dataset": "DailyTalk",
      "section": "analysis",
      "caption": "Ablation of task-loss supervision and history selection on DailyTalk. Low Score uses the trained TAR-CSS model and selects historical utterances with scores below the predicted threshold at inference. Bold indicates the best value for each metric.",
      "bestCells": [
        {
          "row": 2,
          "column": 1
        },
        {
          "row": 0,
          "column": 2
        },
        {
          "row": 0,
          "column": 3
        },
        {
          "row": 0,
          "column": 4
        },
        {
          "row": 1,
          "column": 5
        },
        {
          "row": 0,
          "column": 6
        },
        {
          "row": 0,
          "column": 7
        },
        {
          "row": 0,
          "column": 8
        },
        {
          "row": 3,
          "column": 9
        }
      ]
    },
    {
      "id": "table-6",
      "label": "Table VI",
      "title": "Target-threshold versus predicted-threshold acoustic errors",
      "headers": [
        "Metric",
        "T+A+V",
        "T+A",
        "T+V",
        "T"
      ],
      "rows": [
        [
          "\\(\\Delta\\) MCD",
          "0.0137",
          "0.0071",
          "0.0139",
          "0.0052"
        ],
        [
          "\\(\\Delta\\) Mel (DTW)",
          "0.0053",
          "0.0049",
          "0.0023",
          "0.0016"
        ],
        [
          "\\(\\Delta\\) Mel (MAE)",
          "0.0056",
          "0.0060",
          "0.0024",
          "0.0015"
        ],
        [
          "\\(\\Delta\\) E-DTW",
          "0.0141",
          "0.0140",
          "0.0051",
          "0.0035"
        ],
        [
          "\\(\\Delta\\) E-MAE",
          "0.0161",
          "0.0160",
          "0.0062",
          "0.0045"
        ],
        [
          "\\(\\Delta\\) P-DTW",
          "0.0011",
          "0.0017",
          "0.0017",
          "0.0022"
        ],
        [
          "\\(\\Delta\\) P-MAE",
          "0.0009",
          "0.0014",
          "0.0009",
          "0.0012"
        ],
        [
          "\\(\\Delta\\) D-MAE",
          "0.0003",
          "0.0003",
          "0.0001",
          "0.0004"
        ]
      ],
      "directions": [
        null,
        null,
        null,
        null,
        null
      ],
      "note": "Each entry is the target-threshold error minus the predicted-threshold error: \\[\\Delta M = M(\\tau^\\star) - M(\\hat{\\tau})\\] Here \\(M\\) is the indicated acoustic metric, \\(\\tau^\\star\\) is the target threshold, and \\(\\hat{\\tau}\\) is the predicted threshold. T, A, and V denote text, audio, and vision. Positive differences mean the predicted threshold yields lower errors. These are differences across distinct metrics, so no column-wise best value is highlighted.",
      "sourcePage": 11,
      "numericRows": [
        [
          null,
          0.0137,
          0.0071,
          0.0139,
          0.0052
        ],
        [
          null,
          0.0053,
          0.0049,
          0.0023,
          0.0016
        ],
        [
          null,
          0.0056,
          0.006,
          0.0024,
          0.0015
        ],
        [
          null,
          0.0141,
          0.014,
          0.0051,
          0.0035
        ],
        [
          null,
          0.0161,
          0.016,
          0.0062,
          0.0045
        ],
        [
          null,
          0.0011,
          0.0017,
          0.0017,
          0.0022
        ],
        [
          null,
          0.0009,
          0.0014,
          0.0009,
          0.0012
        ],
        [
          null,
          0.0003,
          0.0003,
          0.0001,
          0.0004
        ]
      ],
      "referenceRows": [],
      "rankingMode": "none",
      "source": "TAR_CSS_TASLP-3.pdf",
      "dataset": "DailyTalk",
      "section": "analysis",
      "caption": "Differences in acoustic metrics between the target and predicted thresholds under each modality condition. Each entry reports \\(\\Delta M\\) for metric \\(M\\), defined as the target-threshold error minus the predicted-threshold error. T, A, and V denote text, audio, and vision, respectively.",
      "sourceCaption": "Differences in acoustic metrics between the target and predicted thresholds under each modality condition. Each entry reports \\(\\Delta M = M(\\tau^\\star) - M(\\hat{\\tau})\\) for metric \\(M\\). T, A, and V denote text, audio, and vision, respectively.",
      "bestCells": []
    }
  ],
  "links": {},
  "dataNotes": [
    "All six tables are transcribed from the supplied 13-page manuscript; values and confidence intervals are not replaced by existing site content.",
    "Objective metric strings retain the printed four decimal places. numericRows contains point estimates solely for comparison and accessibility.",
    "directions is aligned with headers and contains min, max, or null. bestCells is zero-indexed. All tied best values are included.",
    "Original in Table I is a natural-speech reference and is excluded from generated-system ranking. Table VI has no meaningful column-wise best because its rows use different metrics.",
    "The PDF contains eight labeled figures, six tables, and no appendix pages. Its references to Appendix ?? cannot be resolved from this file.",
    "Figure captions are preserved as manuscript source text; contentDescription describes the actual visible graphic. Source discrepancies are documented in the private extraction audit."
  ]
};
