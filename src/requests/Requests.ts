import { User } from "../users/Users";
import { Vendor } from "../vendors/Vendors";

export class Request {
  id: number | undefined = undefined;
  description = "";
  justification = "";
  rejectionReason = "";
  deliveryMode = "";
  status = "NEW";
  total: number | undefined;
  userId: number | undefined;

  user: User | undefined;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;

    if (initializer.id) this.id = initializer.id;
    if (initializer.description) this.description = initializer.description;
    if (initializer.justification) this.justification = initializer.justification;
    if (initializer.rejectionReason) this.rejectionReason = initializer.rejectionReason;
    if (initializer.deliveryMode) this.deliveryMode = initializer.deliveryMode;
    if (initializer.status) this.status = initializer.status;
    if (initializer.total) this.total = initializer.total;
    if (initializer.userId) this.userId = initializer.userId;
  }
}
