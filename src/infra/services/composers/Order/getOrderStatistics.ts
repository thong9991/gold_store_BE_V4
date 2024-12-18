import { IGetOrderStatisticsUseCase } from '../../../../app/useCases/Order/GetOrderStatistics'
import { IOrderDetailsRepository } from '../../../../app/repositories/OrderDetails'
import { IController } from '../../../../presentation/http/controllers/IController'
import { OrderDetailsRepository } from '../../../repositories/typeorm/OrderDetails'
import { GetOrderStatisticsUseCase } from '../../../../app/useCases/Order/implementations/GetOrderStatistics'
import { GetOrderStatisticsController } from '../../../../presentation/http/controllers/Order/implementations/GetOrderStatistics'

/**
 * Composer function for creating and configuring the components required for retrieving order information.
 * @function
 * @returns {IController} The configured order retrieval controller.
 */
export function getOrderStatisticsComposer(): IController {
  const repository: IOrderDetailsRepository = new OrderDetailsRepository()
  const useCase: IGetOrderStatisticsUseCase = new GetOrderStatisticsUseCase(
    repository
  )
  const controller: IController = new GetOrderStatisticsController(useCase)
  return controller
}
