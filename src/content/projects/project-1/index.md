---
title: "StreamNDR"
description: "Open source library enabling novelty detection in data streams for Python"
date: "2023-03-08"
repoURL: "https://github.com/jgaud/streamndr"
---

Stream Novelty Detection for River (StreamNDR) is a Python library for online novelty detection. StreamNDR aims to enable [novelty detection](https://deepai.org/machine-learning-glossary-and-terms/novelty-detection) in data streams for Python. It is based on the [River](https://riverml.xyz/latest/) API and follows its implementation and format.

## 📋 Features

- ✅ Online novelty detection for data streams
- ✅ Based on the [River](https://www.riverml.xyz/) API
- ✅ Implements MINAS algorithm
- ✅ Implements ECSMiner algorithm
- ✅ Implements ECSMiner-WF (without feedback) algorithm
- ✅ Built-in novelty detection metrics (MNew, FNew, ErrRate)
- ✅ Full [documentation](https://jgaud.github.io/streamndr/) available
- ✅ Available on [PyPI](https://pypi.org/project/streamndr/)

## 🛠 Installation

StreamNDR requires Python 3.6 or above and the [ClusOpt-Core](https://pypi.org/project/clusopt-core/) package, which needs a C/C++ compiler (such as gcc) and the [Boost.Thread library](https://robots.uc3m.es/installation-guides/install-boost.html). On Debian systems:

```console
sudo apt install libboost-thread-dev
```

Install the package with `pip`:

```console
pip install streamndr
```

## ⚡️ Example Usage

As a quick example, we can train a MINAS model to classify a synthetic dataset created using [RandomRBF](https://riverml.xyz/dev/api/datasets/synth/RandomRBF/). The model is trained on only two of four generated classes and will try to detect the remaining classes as novelty patterns in an online fashion.

```python
from streamndr.model import Minas

clf = Minas(kini=100, cluster_algorithm='clustream', 
            window_size=600, threshold_strategy=1, threshold_factor=1.1, 
            min_short_mem_trigger=100, min_examples_cluster=20, verbose=1, random_state=42)

clf.learn_many(np.array(X_train), np.array(y_train))
```

The model can then be used in an online fashion, with unsupervised clusters automatically updated on each call to `predict_one`:

```python
from streamndr.metrics import MNew, FNew, ErrRate

known_classes = [0, 1]
m_new = MNew(known_classes)
f_new = FNew(known_classes)
err_rate = ErrRate(known_classes)

for x, y_true in zip(X_test, y_test):
    y_pred = clf.predict_one(x)
    if y_pred is not None:
        m_new.update(y_true, y_pred[0])
        f_new.update(y_true, y_pred[0])
        err_rate.update(y_true, y_pred[0])
```
## 🏛️ License

BSD-3-Clause
