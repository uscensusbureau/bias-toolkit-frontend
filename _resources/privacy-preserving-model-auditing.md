---
display-title: Privacy-Preserving Model Auditing
details: Enabling AI model evaluation while protecting individual privacy.

agency-partners:
  - text: U.S. Census Bureau
    href: https://www.census.gov/

github: https://github.com/XDgov/privacy-preserving-model-auditing-demo
# whether or not the card is "featured" on the /resources page or homepage
featured: false
order: 2
tags:
  - tool
---

Sometimes a model owner might want to use sensitive individual data to evaluate the groupwise performance of their model. What can they do if they don't have direct access to that data?

Our demo of **privacy-preserving model auditing** shows one potential solution. Using an open source cryptographic protocol called Private Join and Compute, we demonstrate the calculation of groupwise metrics between two parties without revealing any private individual information from either side. More details on the demo can be found in our blog posts below.

- Part 1: [Privacy-preserving model auditing overview](https://www.xd.gov/blog/privacy-preserving-model-auditing/)
- Part 2: [Technical deep dive](https://www.xd.gov/blog/ppma-deep-dive/)

You can find the full repository with instructions on [Github]({{ page.github }})
