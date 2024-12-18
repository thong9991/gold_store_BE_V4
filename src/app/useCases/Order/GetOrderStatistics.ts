/**
 * Interface for the use case of retrieving all order.
 * @interface
 */
export interface IGetOrderStatisticsUseCase {
  /**
   * Executes the get all order statistics use case.
   * @async
   * @returns {Promise<any>} The response data.
   */
  execute(): Promise<any>
}
