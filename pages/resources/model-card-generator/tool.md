---
layout: tool
display-title: Model Card Generator
details: Acknowledging bias through transparency.

permalink: /resources/model-card-generator/tool/
resource:
  name: Model Card Generator
  url: /resources/model-card-generator/
tags:
  - Tool
version: 0.2
---
<p>
	This tool can be used to create a <a href="{{ page.resource.url }}">Model Card</a>: a way to share information about a model’s intent, data, architecture, and performance. Use the form below to generate a markdown (*.md) file version of a model card.
</p>
<p>
  The data you enter here is not saved or sent to a server. This is an entirely client-side feature.
</p>
<p>
  <span class="note-text">Note</span>: A red asterisk (<span class="required-asterisk">*</span>) indicates a required field.
</p>

<form accept-charset="UTF-8" enctype="multipart/form-data" class="usa-form model-card-form" id="model-card-form">
  <h3>Accountability</h3>
  <div>
    <label class="usa-label" for="name">Model name<span class="required-asterisk">*</span></label>
    <input class="usa-input" type="text" id="name" data-md-title="ModelName" data-md-type="h1" required>
  </div>
  <div>
    <label class="usa-label" for="owners">
      Point of contact(s)<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="text" id="owners" data-md-title="Collaborators" data-md-type="ul" required>
  </div>
  <div>
    <label class="usa-label" for="agencies">
      Agencies/Affiliations<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="text" id="agencies" data-md-title="Agency" data-md-type="ul" required>
  </div>
  <div>
    <label class="usa-label" for="acquisition">
      Model acquisition/development method<span class="required-asterisk">*</span>
    </label>
    <select name="acquisition" class="usa-select" id="acquisition" data-md-title="Ownership" data-md-type="ul" required>
      <option value>- Select -</option>
      <option value="internally-built">Internally-built</option>
      <option value="internally-built">Off-the-shelf</option>
      <option value="internally-built">Bespoke</option>
    </select>
  </div>
  <h3>Anticipated Use</h3>
  <div>
    <label class="usa-label" for="user-agencies" id="user-agencies-label">
      Division(s) using the model<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="text" id="user-agencies" data-md-title="label" data-md-type="ul" data-md-heading="Anticipated Use" required>
  </div>
  <div>
    <label class="usa-label" for="applications" id="applications-label">
      Intended application(s)<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="text" id="applications" data-md-title="label" data-md-type="ul" required>
  </div>
  <div>
    <label class="usa-label" for="user-stakeholders" id="user-stakeholders-label">
      Intended stakeholder(s)<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="text" id="user-stakeholders" data-md-title="label" data-md-type="ul" required>
  </div>
  <h3>Model Information & Architecture</h3>
  <div>
    <label class="usa-label" for="model-version" id="model-version-label">
      Current model version<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="text" id="model-version" data-md-title="label" data-md-type="ul" data-md-heading="Model Information" required>
  </div>
  <div>
    <label class="usa-label" for="release-date" id="release-date-label">
      Version release date<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="date" id="release-date" data-md-title="label" data-md-type="ul" required>
  </div>
  <div>
    <label class="usa-label" for="changes" id="changes-label">
      Changes made since last release (if any)<span class="required-asterisk">*</span>
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="changes" data-md-title="label" data-md-type="ul" required></textarea>
  </div>
  <div>
    <label class="usa-label" for="license" id="license-label">
      License for use<span class="required-asterisk">*</span>
    </label>
    <select name="acquisition" class="usa-select" id="license" data-md-title="Ownership" data-md-type="ul" required>
      <option value>- Select -</option>
      <option value="apache-2.0">Apache license 2.0</option>
      <option value="mit">MIT</option>
      <option value="gpl-3.0">GNU General Public License v3.0</option>
      <option value="mpl-2.0">Mozilla Public License 2.0</option>
      <option value="other">Other</option>
      <option value="none">None</option>
      <option value="unknown">Unknown</option>
    </select>
  </div>
  <div>
    <label class="usa-label" for="model-type" id="model-type-label">
      Type of Model (Classification, Regression, Object Detection, etc.)<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="text" id="model-type" data-md-title="label" data-md-type="ul" data-md-heading="Model Architecture" required>
  </div>
  <div>
    <label class="usa-label" for="algorithm" id="algorithm-label">
      Type of algorithm(s) used<span class="required-asterisk">*</span>
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="algorithm" data-md-title="label" data-md-type="ul" required></textarea>
  </div>
  <h3>Dataset & Performance</h3>
  <div>
    <label class="usa-label" for="data-source" id="data-source-label">
      Source(s) of the training data<span class="required-asterisk">*</span>
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="data-source" data-md-title="label" data-md-type="ul" required></textarea>
  </div>
  <div>
    <label class="usa-label" for="data-collection" id="data-collection-label">
      Data collection/generation method<span class="required-asterisk">*</span>
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="data-collection" data-md-title="label" data-md-type="ul" required></textarea>
  </div>
  <div>
    <label class="usa-label" for="data-variables" id="data-variables-label">
      Number of variables in the dataset<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="text" id="data-variables" data-md-title="label" data-md-type="ul" required>
  </div>
  <div>
    <label class="usa-label" for="entry-count" id="entry-count-label">
      Number of entries in the dataset<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="text" id="entry-count" data-md-title="label" data-md-type="ul" required>
  </div>
  <div>
    <label class="usa-label" for="validation-percent" id="validation-percent-label">
      Percent of data chosen as the training, testing, and validation sets<span class="required-asterisk">*</span>
    </label>
    <input class="usa-input" type="text" id="validation-percent" data-md-title="label" data-md-type="ul" required>
  </div>
  <div>
    <label class="usa-label" for="metrics" id="metrics-label">
      Metrics used to rate model performance<span class="required-asterisk">*</span>
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="metrics" data-md-title="label" data-md-type="ul" required></textarea>
  </div>
  <div>
    <label class="usa-label" for="performance-limit" id="performance-limit-label">
      Factors that limit the model's performance (examples: limited dataset, number of nulls/NAs) (if any)?<span class="required-asterisk">*</span>
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="performance-limit" data-md-title="label" data-md-type="ul" required></textarea>
  </div>
  <h3 data-md-title="Bias" data-md-type="h2">Bias Identification & Mitigation</h3>
  <div>
    <label class="usa-label" for="individual-population-information" id="individual-population-information-label">
      Inclusion of information related to individuals or human populations in the training/testing/validation datasets - Yes/No, <br> if "yes" include a description of demographic features
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="individual-population-information" data-md-title="label" data-md-type="ul"></textarea>
  </div>
  <div>
    <label class="usa-label" for="minimize-bias" id="minimize-bias-label">
      Methods used to minimize bias from human judgement
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="minimize-bias" data-md-title="label" data-md-type="ul"></textarea>
  </div>
  <div>
    <label class="usa-label" for="potential-bias" id="potential-bias-label">
      Potential biases found in the training dataset from collection methods, sample size, representation, etc.
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="potential-bias" data-md-title="label" data-md-type="ul"></textarea>
  </div>
  <div>
    <label class="usa-label" for="bias-eval-tools" id="bias-eval-tools-label">
      Testing/evaluation performed to look for bias in the workflow of the model
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="bias-eval-tools" data-md-title="label" data-md-type="ul"></textarea>
  </div>
  <div>
    <label class="usa-label" for="explainability-transparency" id="explainability-transparency-label">
      Degree of model explainability/transparency
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="explainability-transparency" data-md-title="label" data-md-type="ul"></textarea>
  </div>
  <h3 data-md-title="Bias" data-md-type="h2">Governance/Compliance</h3>
  <div>
    <label class="usa-label" for="compliance" id="compliance-label">
      Model/dataset compliance with existing laws and regulations (including privacy protection regulations)
    </label>
    <textarea class="usa-textarea content-textarea" type="text" id="compliance" data-md-title="label" data-md-type="ul"></textarea>
  </div>
</form>
<button type="submit" form="model-card-form" id="form-btn" class="usa-button">Create Model Card Markdown File</button>
<script src="{{ site.baseurl }}/javascript/model-card-generator.js"></script>
