import { Request, Response } from "express";

import { Webhook } from "svix";
import UserModel from "../model/user.model";

export const clerkWebhook = async (req: Request, res: Response) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET!;
  const wh = new Webhook(WEBHOOK_SECRET);

  try {
    const evt: any = wh.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"] as string,
      "svix-timestamp": req.headers["svix-timestamp"] as string,
      "svix-signature": req.headers["svix-signature"] as string,
    });

    const eventType = evt.type;

    if (eventType === "user.created") {
      const { id, username, first_name, last_name, image_url } = evt.data;
      await UserModel.create({
        clerkId: id,
        userName: username,
        firstName: first_name,
        lastName: last_name,
        photo: image_url,
      });
    }

    if (eventType === "user.updated") {
      const { id, username, first_name, last_name, image_url } = evt.data;
      await UserModel.findOneAndUpdate(
        { clerkId: id },
        {
          userName: username,
          firstName: first_name,
          lastName: last_name,
          photo: image_url,
        },
        { new: true }
      );
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;
      await UserModel.findOneAndDelete({ clerkId: id });
    }

    res.status(200).send("Webhook processed");
  } catch (err) {
    console.error("Webhook error:", err);
    res.status(400).send("Invalid webhook");
  }
};
