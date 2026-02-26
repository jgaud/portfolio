---
title: "An Analysis of Performance Metrics for Imbalanced Classification"
description: "A study on the impact of various performance metrics for imbalanced classification domains."
date: "2021-10-09"
authors: "Jean-Gabriel Gaudreault, Paula Branco, João Gama"
venue: "International Conference on Discovery Science 2021"
paperURL: "https://doi.org/10.1007/978-3-030-88942-5_6"
tags: ["Imbalanced domains", "Performance metrics", "Performance evaluation", "Precision-recall curve"]
---

Numerous machine learning applications involve dealing with imbalanced domains, where the learning focus is on the least frequent classes. This imbalance introduces new challenges for both the performance assessment of these models and their predictive modeling. While several performance metrics have been established as baselines in balanced domains, some cannot be applied to the imbalanced case since the use of the majority class in the metric could lead to a misleading evaluation of performance. Other metrics, such as the area under the precision-recall curve, have been demonstrated to be more appropriate for imbalance domains due to their focus on class-specific performance. There are, however, many proposed implementations for this particular metric, which could potentially lead to different conclusions depending on the one used. In this research, we carry out an experimental study to better understand these issues and aim at providing a set of recommen-dations by studying the impact of using different metrics and different implementations of the same metric under multiple imbalance settings.