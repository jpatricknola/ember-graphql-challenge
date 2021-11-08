defmodule PeekWeb.Resolvers.BookingResolver do
  alias Peek.Bookings

  def get_bookings(_, %{event_id: id}, _) do
    Bookings.get_bookings(id)
  end

  def create_booking(_, %{event_id: id} = params, _) do
    Bookings.create_booking(id, params)
  end
end
