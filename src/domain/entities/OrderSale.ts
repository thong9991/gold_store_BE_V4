import { IOrderDetailsInRequestDTO } from '../dtos/OrderDetails/OrderDetailsIn'
import { ICreateOrderSaleRequestDTO } from '../dtos/OrderSale/CreateOrderSale'
import { IUpdateOrderSaleRequestDTO } from '../dtos/OrderSale/UpdateOrderSale'
import { IProductInRequestDTO } from '../dtos/Product/ProductIn'

/**
 * Interface representing the structure of a sale order.
 * @interface
 */
export interface OrderSaleInterface {
  product: IProductInRequestDTO
  cutAmount: number
  newWage: number
}

/**
 * Class representing a sale order.
 * @class
 */
export class OrderSaleEntity {
  private _product: IProductInRequestDTO
  private _cutAmount: number
  private _newWage: number

  /**
   * Create an instance of OrderSaleEntity.
   * @constructor
   * @param {OrderSaleInterface} props - The properties of the sale order.
   */
  constructor(props: OrderSaleInterface) {
    this._product = props.product
    this._cutAmount = props.cutAmount
    this._newWage = props.newWage
  }

  /**
   * Create a new sale order instance with provided data.
   * @static
   * @param {ICreateOrderSaleRequestDTO} data - The data to create a sale order.
   * @returns {OrderSaleEntity} The created sale order instance.
   */
  static create({
    product,
    cutAmount,
    newWage,
  }: ICreateOrderSaleRequestDTO): OrderSaleEntity {
    return new OrderSaleEntity({
      product: product,
      cutAmount: cutAmount,
      newWage: newWage,
    })
  }

  /**
   * Update the sale order instance with provided data.
   * @static
   * @param {IUpdateOrderSaleRequestDTO} updatedOrderSale - The data to update a sale order.
   * @returns {IUpdateOrderSaleRequestDTO} The updated sale order instance.
   */
  static update(
    updatedOrderSale: IUpdateOrderSaleRequestDTO
  ): IUpdateOrderSaleRequestDTO {
    return updatedOrderSale
  }

  /**
   * Gets the sale order's product.
   * @readonly
   */
  get product(): IProductInRequestDTO {
    return this._product
  }

  /**
   * Gets the sale order's cut gold amount.
   * @readonly
   */
  get cutAmount(): number {
    return this._cutAmount
  }

  /**
   * Gets the sale order's total wage.
   * @readonly
   */
  get newWage(): number {
    return this._newWage
  }
}
