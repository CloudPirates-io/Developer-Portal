# Setup Instructions

On this page you will learn, how you can setup a new Managed Observability instance and connect it to your existing cluster.

## Prerequisites

Before setting up our managed observability solution, ensure that the following prerequisites are met:

1. **Kubernetes Clusters**:
   - You must have at least one Kubernetes cluster already set up.
   - The Kubernetes cluster(s) should be accessible and properly configured for integration with observability tools.

2. **Grafana Instance**:
   - A Grafana instance should be running and accessible within your infrastructure.
   - Ensure that you have the `admin` role on the Grafana instance.

3. **Dashboards and Alerting Rules**:
   - Our predefined dashboards and alerting rules must be installed in your Grafana instance.

4. **AccessToken**:
   - A created observability instance with the required credentials.
   - The accessToken can be found inside our [Customer Portal](https://auth.cloudpirates.io) by navigating to the Managed Observability


## Required Parameters
You will need the following data to create the Grafana Webhook:

| Setting                          | Value                                                     |
|----------------------------------|-----------------------------------------------------------|
| **Name**                         | [Meaningful name of the webhook]                          |
| **URL**                          |  `https://api.cloudpirates.io/v1/webhooks/grafana/alerts` |
| **Authorization Header - Credentials**         | [accessToken from customer portal]                        |


## Create a new Grafana Webhook

1. **Access Grafana Dashboard**:
   - Log in to your Grafana instance using your credentials.
   - Ensure that you have the `admin` role to configure webhooks.

2. **Navigate to Notification Channels**:
   - Once logged in, navigate to the main menu by clicking on the navigation icon located on the left-hand side of the dashboard.
   - Select `Alerting` from the dropdown menu.
   - Click on `Contact Points` channels.

3. **Add Contact point**:
   - On the `Contact Points` page, click on the `Add Contact Point` button.
   - Choose `Webhook` from the list of available integrations.

4. **Configure Webhook**:
   - Provide a meaningful name for the webhook in the `Name` field.
   - Enter the `URL` given above as endpoint.
   - Enter the previously created `accessToken` to the `Authorization Header - Credentials` field.

::: warning
Please ensure that the `Disable resolved messages` option is not enabled in the Notification settings. Resolved messages are crucial for our system to detect when an alert is resolved.
:::

5. **Test Webhook**:
   - Optionally, you can click on the `Test` button to verify that Grafana can successfully send a test payload to the webhook URL.
   - This step helps ensure that the webhook is properly configured and can receive alerts from Grafana.
   - Once you have configured the webhook settings, click on the `Save` button to add the webhook as a notification channel in Grafana.


## Add Notification Policy

Once you have setup your Contact Point, you need to add it as Notification Policy.

1. **Add Notification Policy**
    - Navigate to the Notification Policies and click on `+ new nested policy`.
    - Remove all Matching labels by clicking on the trash icon.
    - Select the previously created `Contact Point`
    - To allow all following Contact Points to also send alerts, enable the setting `Continue matching subsequent sibling nodes`