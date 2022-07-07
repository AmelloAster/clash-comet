#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayMenuItem};

fn main()  -> std::io::Result<()> {
  let context = tauri::generate_context!();

  let tray_menu = SystemTrayMenu::new()
    .add_item(CustomMenuItem::new("open_window", "Show"))
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(CustomMenuItem::new("system_proxy", "System Proxy"))
    .add_item(CustomMenuItem::new("tun_mode", "Tun Mode"))
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(CustomMenuItem::new("global_proxy", "Global"))
    .add_item(CustomMenuItem::new("rule_proxy", "Rule"))
    .add_item(CustomMenuItem::new("direct_proxy", "Direct"))
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(CustomMenuItem::new("restart_clash", "Restart Clash"))
    .add_item(CustomMenuItem::new("quit", "Quit").accelerator("CmdOrControl+Q"));

  let mut builder = tauri::Builder::default()
    .menu(if cfg!(target_os = "macos") {
      tauri::Menu::os_default(&context.package_info().name)
    } else {
      tauri::Menu::default()
    }).system_tray(SystemTray::new().with_menu(tray_menu));

    builder
    .run(context)
    .expect("error while running tauri application");

    Ok(())
}
