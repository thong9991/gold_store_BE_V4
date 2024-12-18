import { IOrderDetailsRepository } from '../../../repositories/OrderDetails'
import { IGetOrderStatisticsUseCase } from '../GetOrderStatistics'

/**
 * Use case for retrieving all orders.
 * @class
 * @implements {IGetAllOrderUseCase}
 */
export class GetOrderStatisticsUseCase implements IGetOrderStatisticsUseCase {
  /**
   * Creates an instance of GetAllOrderUseCase.
   * @constructor
   * @param {IOrderDetailsRepository} orderDetailsRepository - The repository for order details data.
   */
  constructor(private orderDetailsRepository: IOrderDetailsRepository) {}

  /**
   * Executes the retrieve all orders use case.
   * @async
   * @returns {any} The response data.
   */
  async execute(): Promise<any> {
    try {
      const ordersStatistic =
        await this.orderDetailsRepository.getOrderStatistic()
      return { data: ordersStatistic, success: true }
    } catch (error: any) {
      return { data: { error: error.message }, success: false }
    }
  }
}