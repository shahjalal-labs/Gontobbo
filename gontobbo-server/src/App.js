vim.keymap.set("n", "<leader>sp", function()
  vim.fn.jobstart({
    "bash", "-c",
    [[
f="/run/media/sj/developer/web/L1B11/screenshots/ss-$(LC_TIME=C date +%I-%M-%S_%p-%d-%m-%y).png";
grim "$f" &&
wl-copy --type image/png < "$f" &&
echo "![Screenshot](./screenshots/$(basename "$f"))"
]]
  }, {
    stdout_buffered = true,
    on_stdout = function(_, data)
      if data then
        vim.api.nvim_put(data, "c", true, true)
      end
    end
  })
end, { desc = "Paste screenshot markdown" })

