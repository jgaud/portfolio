---
title: "Empirical analysis of performance assessment for imbalanced classification" 
description: "An extensive empirical analysis of performance metrics and data characteristics in imbalanced binary classification." 
date: "2024-01-23" 
authors: "Jean-Gabriel Gaudreault, Paula Branco" 
venue: "Machine Learning Journal" 
paperURL: "https://doi.org/10.1007/s10994-023-06497-5" 
tags: ["Imbalanced learning", "Performance metrics", "Performance evaluation"]
---

There are multiple scenarios in machine learning where the data used presents a heavy bias towards one of the classes. Evaluating the performance of machine learning models in such imbalanced scenarios proves to be difficult and challenging, as one of the classes is poorly represented in the data, and this class is often more relevant to the end-user. An abundance of performance metrics have been devised and commonly used in order to solve these specific problems, however, there is often a lack of common agreement on which metric is best and which to use in specific imbalanced scenarios. In this study, we experimentally study the impact of choosing one metric over another in the evaluation of a classifier for binary classification, as well as the effect of data characteristics such as class imbalance and noise on those metrics. Based on our extensive empirical analysis, we provide a set of easy-to-follow guidelines for which performance metric is best to use depending on the context of the problem. Specifically, we highlight the importance of using multiple different metrics which are fundamentally different in imbalanced domains, we also display results on why the usage of Davis’ interpolation of the area under the precision-recall curve and the Matthews Correlation Coefficient metrics should be preferred over other similar metrics, as well as why the usage of geometric mean and score should be avoided in scenarios likely to present noise on the labels.