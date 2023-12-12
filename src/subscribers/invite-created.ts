import { 
  type SubscriberConfig, 
  type SubscriberArgs,
} from "@medusajs/medusa"

export default async function handleInviteCreated({ 
  data, eventName, container, pluginOptions, 
}: SubscriberArgs<Record<string, string>>) {
  const sendGridService = container.resolve("sendgridService")

  sendGridService.sendEmail({
    templateId: "send-invite",
    from: "jose.garcia+threshold@vokal.io",
    to: data.user_email,
    dynamic_template_data: {
      // any data necessary for your template...
      token: data.token,
    },
  })
}

export const config: SubscriberConfig = {
  event: "invite.created",
  context: {
    subscriberId: "invite-created-handler",
  },
}