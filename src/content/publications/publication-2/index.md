---
title: "Toward streamlining the evaluation of novelty detection in data streams" 
description: "A proposed evaluation framework and novel metrics for assessing novelty detection algorithms in data streams." 
date: "2023-10-08" 
authors: "Jean-Gabriel Gaudreault, Paula Branco" 
venue: "International Conference on Discovery Science 2023" 
paperURL: "https://doi.org/10.1007/978-3-031-45275-8_47" 
tags: ["Novelty detection", "Data streams", "Evaluation framework", "Machine learning"]
---

While batch machine learning algorithms typically assume that all the concepts are available at training, the reality is often different when dealing with continuous streams of data, where new concepts can emerge and existing ones change over time. The task of novelty detection is an increasingly popular field that tackles this problem by trying to recognize these formerly unidentified concepts that fall outside the decision boundary of the models. Although there have been numerous works discussing the implementation of such algorithms, studies covering their adequate performance evaluation are still scarce. In this paper, we present an evaluation framework that aims to streamline the evaluation of novelty detection algorithms. This framework irons out the shortcomings we identified in the domain, allowing us to obtain a more robust assessment of the performance. Specifically, we propose novel metrics to complement the existing ones, and we incorporate the temporal aspect of data streams within the evaluation. We empirically test the impact of intrinsic data streams’ characteristics when using our proposed framework. We show the added value of this novel framework with experiments carried out on both artificial and real-world data sets.