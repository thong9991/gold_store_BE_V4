import { Request, Response, Router } from 'express'
import { createOrderComposer } from '../../../infra/services/composers/Order/createOrder'
import { deleteCheckedOrdersComposer } from '../../../infra/services/composers/Order/deleteCheckedOrders'
import { deleteOrderComposer } from '../../../infra/services/composers/Order/deleteOrder'
import { getOrderComposer } from '../../../infra/services/composers/Order/getOrder'
import { updateOrderComposer } from '../../../infra/services/composers/Order/updateOrder'
import { getOrderStatisticsComposer } from '../../../infra/services/composers/Order/getOrderStatistics'
import { expressAdapter } from '../../adapters/express'
import { ensureAdminAuthorized } from '../middlewares/ensureAdminAuthorized'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { getOrderReportComposer } from '../../../infra/services/composers/Order/getOrderReport'

/**
 * Router for handling order-related routes.
 */
const orderRoutes = Router()

/**
 * Endpoint to create a new order (requires personal authentication).
 */
orderRoutes.post(
  '/',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    const adapter = await expressAdapter(request, createOrderComposer())
    return response.status(adapter.statusCode).json(adapter.body)
  }
)

/**
 * Endpoint to get order information (requires admin authentication).
 */
orderRoutes.get(
  '/',
  ensureAdminAuthorized,
  async (request: Request, response: Response) => {
    const adapter = await expressAdapter(request, getOrderComposer())
    return response.status(adapter.statusCode).json(adapter.body)
  }
)

/**
 * Endpoint to update order information (requires admin authentication).
 */
orderRoutes.patch(
  '/:id',
  ensureAdminAuthorized,
  async (request: Request, response: Response) => {
    const adapter = await expressAdapter(request, updateOrderComposer())
    return response.status(adapter.statusCode).json(adapter.body)
  }
)

/**
 * Endpoint to delete checked orders (requires admin authentication).
 */
orderRoutes.delete(
  '/',
  ensureAdminAuthorized,
  async (request: Request, response: Response) => {
    const adapter = await expressAdapter(request, deleteCheckedOrdersComposer())
    return response.status(adapter.statusCode).json(adapter.body)
  }
)

/**
 * Endpoint to delete a order (requires admin authentication).
 */
orderRoutes.delete(
  '/:id',
  ensureAdminAuthorized,
  async (request: Request, response: Response) => {
    const adapter = await expressAdapter(request, deleteOrderComposer())
    return response.status(adapter.statusCode).json(adapter.body)
  }
)

/**
 * Endpoint to get a order statistic.
 */
orderRoutes.get(
  '/statistics',
  ensureAdminAuthorized,
  async (request: Request, response: Response) => {
    const adapter = await expressAdapter(request, getOrderStatisticsComposer())
    return response.status(adapter.statusCode).json(adapter.body)
  }
)

/**
 * Endpoint to get a order for report
 */
orderRoutes.get(
  '/report',
  ensureAdminAuthorized,
  async (request: Request, response: Response) => {
    const adapter = await expressAdapter(request, getOrderReportComposer())
    return response.status(adapter.statusCode).json(adapter.body)
  }
)

export { orderRoutes }
