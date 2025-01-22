# frozen_string_literal: true

source "https://rubygems.org"

gemspec

gem "html-proofer", "~> 5.0", group: :test

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# WDM 설치 관련 수정 (Windows에서만)
gem "wdm", "~> 0.2.0", platforms: [:mingw, :x64_mingw, :mswin] if RUBY_PLATFORM =~ /mingw|mswin/
