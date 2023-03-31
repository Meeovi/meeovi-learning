import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class QuotesUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    grand_total?: NullableStringFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    categories?: NullableStringFieldUpdateOperationsInput | undefined;
    valid_until?: NullableStringFieldUpdateOperationsInput | undefined;
    quote_stage?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: NullableStringFieldUpdateOperationsInput | undefined;
    cust_id?: IntFieldUpdateOperationsInput | undefined;
    prod_id?: BigIntFieldUpdateOperationsInput | undefined;
    order_id?: IntFieldUpdateOperationsInput | undefined;
    account?: NullableStringFieldUpdateOperationsInput | undefined;
    approval_issues?: NullableStringFieldUpdateOperationsInput | undefined;
    approval_status?: NullableStringFieldUpdateOperationsInput | undefined;
    assigned_to?: NullableStringFieldUpdateOperationsInput | undefined;
    billing_city?: NullableStringFieldUpdateOperationsInput | undefined;
    billing_country?: NullableStringFieldUpdateOperationsInput | undefined;
    billing_postal?: NullableStringFieldUpdateOperationsInput | undefined;
    billing_state?: NullableStringFieldUpdateOperationsInput | undefined;
    billing_street?: NullableStringFieldUpdateOperationsInput | undefined;
    contact?: NullableStringFieldUpdateOperationsInput | undefined;
    currency?: NullableStringFieldUpdateOperationsInput | undefined;
    discount?: NullableStringFieldUpdateOperationsInput | undefined;
    invoice_status?: NullableStringFieldUpdateOperationsInput | undefined;
    line_item_discount?: NullableStringFieldUpdateOperationsInput | undefined;
    line_item_group_total?: NullableStringFieldUpdateOperationsInput | undefined;
    line_item_name?: NullableStringFieldUpdateOperationsInput | undefined;
    line_item_subtotal?: NullableStringFieldUpdateOperationsInput | undefined;
    line_item_tax?: NullableStringFieldUpdateOperationsInput | undefined;
    line_item_total?: NullableStringFieldUpdateOperationsInput | undefined;
    payment_terms?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping_city?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping_country?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping_postal?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping_state?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping_street?: NullableStringFieldUpdateOperationsInput | undefined;
    shipping_tax?: NullableStringFieldUpdateOperationsInput | undefined;
    subtotal?: NullableStringFieldUpdateOperationsInput | undefined;
    tax?: NullableStringFieldUpdateOperationsInput | undefined;
    total?: NullableStringFieldUpdateOperationsInput | undefined;
    customers_customersToquotes?: NullableStringFieldUpdateOperationsInput | undefined;
    orders?: NullableStringFieldUpdateOperationsInput | undefined;
    products_productsToquotes?: NullableStringFieldUpdateOperationsInput | undefined;
}
