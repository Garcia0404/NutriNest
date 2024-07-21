const useForm = () => {

}
const handleSubmit = (e:Event) => {
  e.preventDefault();
}
export const Form = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-5">
        <label
          for="phoneNumber"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Teléfono
        </label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Escriba su teléfono"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Mensaje
        </label>
        <textarea
          rows={4}
          name="message"
          id="message"
          placeholder="Escriba un mensaje"
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
