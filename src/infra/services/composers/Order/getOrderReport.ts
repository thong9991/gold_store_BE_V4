import { IOrderDetailsRepository } from '../../../../app/repositories/OrderDetails'
import { IController } from '../../../../presentation/http/controllers/IController'
import { OrderDetailsRepository } from '../../../repositories/typeorm/OrderDetails'
import { GetOrderReportUseCase } from '../../../../app/useCases/Order/implementations/GetOrderReport'
import { IGetOrderReportUseCase } from '../../../../app/useCases/Order/GetOrderReport'
import { GetOrderReportController } from '../../../../presentation/http/controllers/Order/implementations/GetOrderReport'

/**
 * Composer function for creating and configuring the components required for retrieving order information.
 * @function
 * @returns {IController} The configured order retrieval controller.
 */
export function getOrderReportComposer(): IController {
  const repository: IOrderDetailsRepository = new OrderDetailsRepository()
  const useCase: IGetOrderReportUseCase = new GetOrderReportUseCase(repository)
  const controller: IController = new GetOrderReportController(useCase)
  return controller
}
